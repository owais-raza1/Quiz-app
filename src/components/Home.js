import React from "react";
import { useNavigate } from "react-router-dom";
import BAButton from "./BAButton";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-screen min-h-screen flex items-center justify-center">
      <BAButton
        onClick={() => navigate("/quiz")}
        text="Navigate to quiz screen"
        className="text-3xl border-2 border-green-900 bg-teal-600 p-4 rounded-lg text-white hover:scale-105 transition-all duration-700 hover:shadow-2xl shadow-fuchsia-900 font-bold"
      />
    </div>
  );
}

export default Home;
