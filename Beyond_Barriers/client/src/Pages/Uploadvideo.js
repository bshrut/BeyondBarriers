import React, { useState } from 'react';

const Uploadvideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [islTranslation, setISLTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleTranslate = async () => {
    if (!videoFile) {
      alert('Please select a video file before translating.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Transcription request failed.');
      }

      fetchTranscription();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing the file.');
      setLoading(false);
    }
  };

  const fetchTranscription = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_transcription');
      if (!response.ok) {
        throw new Error('Failed to fetch transcription.');
      }

      const data = await response.json();
      setTranscription(data.transcription || 'No transcription available.');
      setISLTranslation(data.isl_translation || 'No ISL translation available.');
    } catch (error) {
      console.error('Error fetching transcription:', error);
      alert('Could not retrieve transcription.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      width: '500px',
      padding: '30px',
      backgroundColor: '#fff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      textAlign: 'center',
      marginTop: '50px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
        Upload Your Video for Translation
      </h2>

      <div style={{ marginBottom: '20px', textAlign: 'left' }}>
        <label style={{ fontSize: '14px', fontWeight: '600', color: '#555' }}>
          Upload Video from Device
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '15px',
          }}
        />
      </div>

      <button style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: videoFile ? 'pointer' : 'not-allowed',
        width: '100%',
      }}
        onClick={handleTranslate}
        disabled={!videoFile || loading}
      >
        {loading ? 'Transcribing...' : 'Translate'}
      </button>

      {transcription && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'left',
          fontSize: '14px',
          fontWeight: '600',
          color: '#333'
        }}>
          <h3>Transcription:</h3>
          <p>{transcription}</p>
        </div>
      )}

      {islTranslation && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#eef2ff',
          borderRadius: '8px',
          textAlign: 'left',
          fontSize: '14px',
          fontWeight: '600',
          color: '#333'
        }}>
          <h3>ISL Translation:</h3>
          <p>{islTranslation}</p>
        </div>
      )}
    </div>
  );
};

export default Uploadvideo;
