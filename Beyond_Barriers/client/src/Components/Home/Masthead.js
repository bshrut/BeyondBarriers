import React from "react";

function Masthead() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center home-gradient mb-0 pb-0">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
      <div className="d-flex flex-column align-items-center text-center text-white">
        <div className="fw-bold" style={{ fontSize: "2.9rem" }}>Empower Your Communication</div>
        <div className="lead" style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "700px" }}>
          Welcome to Next-Gen Communication, where we transform your videos into sign language.  
          Upload your video and let us help you communicate effortlessly.
          </div>
          </div>
        
        <div className="d-flex justify-content-center mt-5">
          <a className="btn btn-lg px-3"href="#card-section" style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // White Transparent
            color: "#e0e0e0", // White Text
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(3px)", // Glass effect
            padding: "10px 20px",
            transition: "all 0.3s ease",
            }}
            >Get Started <i className="fa fa-angle-down" />
            </a>
         </div>

      </div>
    </div>
  );
}

export default Masthead;
