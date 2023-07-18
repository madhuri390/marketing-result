import React from "react";
import "./FooterComponent.css";

export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          Copyright &copy; <span className="year">2021</span> of Marketing
          Results. All rights are reserved
        </p>
      </div>
    </footer>
  );
}
