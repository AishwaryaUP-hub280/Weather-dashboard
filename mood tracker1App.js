import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const moodData = {
    Happy: {
      emoji: "😊",
      color: "#ffe066",
      message: "Keep smiling! Today is your day 🌞",
    },
    Sad: {
      emoji: "😢",
      color: "#74c0fc",
      message: "It's okay to feel sad. Better days are coming 💙",
    },
    Angry: {
      emoji: "😡",
      color: "#ff6b6b",
      message: "Take a deep breath... stay calm 🧘",
    },
    Excited: {
      emoji: "🤩",
      color: "#b197fc",
      message: "Wow! Something amazing is happening 🎉",
    },
  };

  const handleMood = (selectedMood) => {
    setMood(selectedMood);
  };

  const currentMood = moodData[mood];

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        backgroundColor: currentMood ? currentMood.color : "#f1f3f5",
        transition: "0.5s",
        paddingTop: "50px",
      }}
    >
      <h1>Mood Tracker 🎭</h1>

      <div>
        <button onClick={() => handleMood("Happy")}>😊 Happy</button>
        <button onClick={() => handleMood("Sad")}>😢 Sad</button>
        <button onClick={() => handleMood("Angry")}>😡 Angry</button>
        <button onClick={() => handleMood("Excited")}>🤩 Excited</button>
      </div>

      {currentMood && (
        <div style={{ marginTop: "30px" }}>
          <h2>
            {currentMood.emoji} You are feeling {mood}
          </h2>
          <p style={{ fontSize: "18px" }}>{currentMood.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;