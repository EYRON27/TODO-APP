import React from "react";
import "../styles/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2>Loading Page...</h2>
    </div>
  );
}
