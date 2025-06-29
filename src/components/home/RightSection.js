import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function RightSection() {
  return (
    <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
      <img
        src="mayank.jpg"
        alt="Mayank Agarwal"
        width="180"
        height="180"
        style={{
          borderRadius: "50%",
          border: "5px solid white",
          marginBottom: "20px"
        }}
      />
      <h2 className="fw-bold">MAYANK AGARWAL</h2>
      <p>Creative Web Developer based in India.
        <br/>I build responsive and user-friendly websites.</p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px", fontSize: "20px" }}>
        <a href="https://www.facebook.com/mayankagarwal019" className="text-white" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/mayankgoyal077" className="text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/mayank.agarwal785" className="text-white" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/Mayankgoel077" className="text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </div>
  );
}

export default RightSection;
