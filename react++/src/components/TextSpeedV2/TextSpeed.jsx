import React, { useState, useEffect } from "react";
import { useRef } from "react";

import axios from "axios";

import s from "./TextSpeed.module.css";

import Fieldtext from "./components/Fieldtext/Fieldtext";
import Textarea from "./components/Textarea/Textarea";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const urlText = "https://fish-text.ru/get?title=sentence&number=1";

const TextSpeedv2 = () => {
  const [testText, setTestText] = useState("");
  const [currentTextarea, setCurrentTextarea] = useState("");
  const textareaRef = useRef();
  const [loadingText, setLoadingText] = useState(false);

  const [startBeforeGame, setStartBeforeGame] = useState(false);

  const [beforeSeconds, setBeforeSeconds] = useState(3);
  const [afterSeconds, setAfterSeconds] = useState(0);

  const [endTest, setEndTest] = useState(false);

  const [errors, setErrors] = useState(0);

  const typingSpeed = Math.floor((testText.length / afterSeconds) * 60);

  function countErrors() {
    const words1 = testText.split(" ");
    const words2 = textareaRef.current?.value.split(" ") || [];
    let count = 0;

    for (let i = 0; i < words1.length; i++) {
      if (words1[i] !== words2[i]) {
        for (let j = 0; j < words1[i].length; j++) {
          if (words1[i][j] !== words2[i][j]) {
            count++;
          }
        }
      }
    }

    return count;
  }

  const fetchData = async () => {
    setLoadingText(true);
    const recordData = await axios.get(urlText);
    setTestText(recordData.data.text.slice(0, 30).trim());
    setLoadingText(false);
    setEndTest(false);
    setCurrentTextarea("");
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (startBeforeGame && beforeSeconds > 0) {
        setBeforeSeconds((prev) => prev - 1);
        if (beforeSeconds === 1) textareaRef.current.focus();
      }

      if (startBeforeGame && beforeSeconds === 0) {
        setAfterSeconds((prev) => prev + 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [beforeSeconds, startBeforeGame, afterSeconds]);

  const handlerClickStart = () => {
    setBeforeSeconds(3);
    setAfterSeconds(0);
    setCurrentTextarea("");
    setStartBeforeGame(true);
    setEndTest(false);
  };

  const handlerClickTextarea = (event) => {
    setCurrentTextarea(event.target.value);
    if (textareaRef.current.value.length === testText.length) {
      setStartBeforeGame(false);
      setEndTest(true);

      setErrors(countErrors());
    }
  };

  const handlerClickАgain = () => {
    setBeforeSeconds(3);
    setAfterSeconds(0);
    setCurrentTextarea("");
  };
  const handlerClickBreak = () => {
    setStartBeforeGame(false);
    setCurrentTextarea("");
  };

  return (
    <div className={s.box}>
      <h1>Speed Test</h1>

      <Header
        endTest={endTest}
        startBeforeGame={startBeforeGame}
        beforeSeconds={beforeSeconds}
        afterSeconds={afterSeconds}
      />

      <Fieldtext
        currentTextarea={currentTextarea}
        startBeforeGame={startBeforeGame}
        loading={loadingText}
        testText={testText}
        fetchData={fetchData}
      />
      <Textarea
        textareaRef={textareaRef}
        startBeforeGame={startBeforeGame}
        currentTextarea={currentTextarea}
        handlerClickTextarea={handlerClickTextarea}
      />

      <Footer
        errors={errors}
        endTest={endTest}
        typingSpeed={typingSpeed}
        startBeforeGame={startBeforeGame}
        handlerClickBreak={handlerClickBreak}
        handlerClickАgain={handlerClickАgain}
        handlerClickStart={handlerClickStart}
      />
    </div>
  );
};

export default TextSpeedv2;
