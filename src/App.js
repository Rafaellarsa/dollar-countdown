import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.js";

function App() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("December 31, 2021 23:59:59").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <main className="main-container">
        <h2>Faltam</h2>
        <article className="main">
          <Card text="Dias" timer={timerDays} />
          <Card text="Horas" timer={timerHours} />
          <Card text="Minutos" timer={timerMinutes} />
          <Card text="Segundos" timer={timerSeconds} />
        </article>
        <h2>para o Marcelo me pagar 1 dólar</h2>
      </main>
    </div>
  );
}

export default App;
