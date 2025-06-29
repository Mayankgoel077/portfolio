import React from "react";

function LeftSection() {
  const navItems = ["HOME", "ABOUT", "SERVICE", "PORTFOLIO", "NEWS", "CONTACT"];

  return (
    <div style={{
      backgroundColor: "#000",
      color: "white",
      height: "100vh",
      padding: "30px",
    }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>INDIA</h2>
      <ul style={{ paddingLeft: 0 }}>
        {navItems.map((item, idx) => (
          <li
            key={idx}
            style={{
              listStyleType: "none",
              padding: "10px 0",
              borderBottom: "1px solid #333",
              cursor: "pointer",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div style={{ position: "absolute", bottom: "20px", fontSize: "12px", color: "#aaa" }}>
        <p>© 2025 India</p>
        <p><i>Created by Mayank</i></p>
      </div>
    </div>
  );
}

export default LeftSection;
