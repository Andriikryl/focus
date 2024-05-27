"use client";
import React, { useState, useEffect, useRef } from "react";
import { Gauge } from "../gauge/Gauge";
import { Input } from "../input/Input";
import { Heading } from "../heading/Heading";
import styles from "./style.module.css";
import { CardGrainyBackground } from "../cardBackground/CardBackGround";
import { Button } from "../button/Button";
import { Counter } from "../counter/Counter";

export default function Hero() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New state to track pause status

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isCounting && !isPaused && currentCount < targetNumber) {
      intervalIdRef.current = setTimeout(() => {
        setCurrentCount((prevCount) => prevCount + 1);
      }, 1000); // Adjust the interval time as needed
    }

    return () => {
      if (intervalIdRef.current) {
        clearTimeout(intervalIdRef.current);
      }
    };
  }, [isCounting, isPaused, currentCount, targetNumber]);

  const handleStartClick = () => {
    setIsCounting(true);
    setCurrentCount(0); // Reset the count when starting
    setIsPaused(false); // Ensure timer is not paused when starting
  };

  const handlePauseResumeClick = () => {
    setIsPaused(!isPaused); // Toggle pause/resume
  };

  const handleResetClick = () => {
    setIsCounting(false);
    setCurrentCount(0); // Reset the count
    setIsPaused(false); // Ensure timer is not paused when resetting
  };

  return (
    <div className={styles.wrapper}>
      <Heading headingLevel="h1">Focus</Heading>
      <CardGrainyBackground>
        <Gauge value={currentCount} max={targetNumber} />
        <Counter value={currentCount} />
      </CardGrainyBackground>
      <Input
        label="Time"
        value={targetNumber}
        onChange={(e) => setTargetNumber(Number(e.target.value))}
        type="number"
        min={1}
      />
      <div className={styles.button__group}>
        <Button onClick={handleStartClick}>Start</Button>
        <Button onClick={handlePauseResumeClick}>
          {isPaused ? "Resume" : "Pause"}
        </Button>
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
    </div>
  );
}
