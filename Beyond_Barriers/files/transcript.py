import os
import speech_recognition as sr
import ffmpeg
import spacy
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests (React frontend)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

nlp = spacy.load("en_core_web_sm")

def extract_audio(video_path, audio_path):
    try:
        ffmpeg.input(video_path).output(audio_path, format="wav").run(overwrite_output=True)
    except Exception as e:
        print(f"Error extracting audio: {e}")

def convert_audio_to_text(audio_path):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_path) as source:
        audio = recognizer.record(source)

    try:
        return recognizer.recognize_google(audio)
    except sr.UnknownValueError:
        return "Speech not recognized."
    except sr.RequestError:
        return "Google Speech Recognition service unavailable."

def english_to_isl(sentence):
    doc = nlp(sentence.lower())

    subject = None
    verb = None
    obj = []

    remove_words = {"a", "an", "the", "to", "am", "is", "are", "was", "were"}

    for token in doc:
        if token.text in remove_words:
            continue  # Skip unnecessary words
        if token.pos_ == "NOUN" and not subject:
            subject = token.text  # First noun as subject
        elif token.pos_ == "VERB" and not verb:
            verb = token.text  # First verb as action
        else:
            obj.append(token.text)  # Remaining words as object

    obj_str = " ".join(obj).upper() if obj else ""

    # Convert to ISL order: Subject + Object + Verb
    isl_sentence = f"{subject or ''} {obj_str} {verb.upper() if verb else ''}".strip()

    return isl_sentence if isl_sentence else "COULD NOT TRANSLATE"

def transcribe_video(video_path):
    audio_path = video_path.replace(".mp4", ".wav")
    extract_audio(video_path, audio_path)
    transcription = convert_audio_to_text(audio_path)

    isl_text = english_to_isl(transcription)

    with open("transcription.txt", "w", encoding="utf-8") as f:
        f.write(transcription)

    with open("isl_transcription.txt", "w", encoding="utf-8") as f:
        f.write(isl_text)

    return transcription, isl_text

@app.route("/transcribe", methods=["POST"])
def transcribe():
    if "video" not in request.files:
        return jsonify({"error": "No video file provided"}), 400

    video_file = request.files["video"]
    video_path = os.path.join(UPLOAD_FOLDER, video_file.filename)
    video_file.save(video_path)

    transcription, isl_text = transcribe_video(video_path)
    return jsonify({"transcription": transcription, "isl_translation": isl_text})

@app.route("/get_transcription", methods=["GET"])
def get_transcription():
    if not os.path.exists("transcription.txt"):
        return jsonify({"transcription": "No transcription available"}), 404

    with open("transcription.txt", "r", encoding="utf-8") as f:
        transcription = f.read()

    with open("isl_transcription.txt", "r", encoding="utf-8") as f:
        isl_transcription = f.read()

    return jsonify({"transcription": transcription, "isl_translation": isl_transcription})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000) 
