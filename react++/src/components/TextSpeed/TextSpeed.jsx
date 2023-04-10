import React, { useState, useEffect } from "react";
import { useRef } from "react";

import axios from "axios";

import s from "./TextSpeed.module.css";

import Fieldtext from "./components/Fieldtext";
import Textarea from "./components/Textarea";
import Footer from "./components/Footer";
import Header from "./components/Header";

const urlText = "https://fish-text.ru/get?title=sentence&number=1";

const TextSpeed = () => {
  const [testText, setTestText] = useState("");
  const [currentTextarea, setCurrentTextarea] = useState("");
  const textareaRef = useRef();
  const [loadingText, setLoadingText] = useState(false);

  const [startBeforeGame, setStartBeforeGame] = useState(false);

  const [beforeSeconds, setBeforeSeconds] = useState(3);
  const [afterSeconds, setAfterSeconds] = useState(0);

  const [endTest, setEndTest] = useState(false);

  const typingSpeed = Math.floor((testText.length / afterSeconds) * 60);

  const fetchData = async () => {
    setLoadingText(true);
    const recordData = await axios.get(urlText);
    setTestText(recordData.data.text);
    setLoadingText(false);
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
    setStartBeforeGame(true);
    setEndTest(false);
  };

  const stringValidation = () => {
    const amtSymbolTextarea = currentTextarea.length;
    const newText = testText.slice(0, amtSymbolTextarea);
    return newText === currentTextarea;
  };

  const handlerClickTextarea = (event) => {
    setCurrentTextarea(event.target.value);
    if (textareaRef.current.value === testText && stringValidation()) {
      setStartBeforeGame(false);
      setCurrentTextarea("");
      setEndTest(true);
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
        startBeforeGame={startBeforeGame}
        loading={loadingText}
        currentTextarea={currentTextarea}
        testText={testText}
        fetchData={fetchData}
      />
      <Textarea
        textareaRef={textareaRef}
        startBeforeGame={startBeforeGame}
        stringValidation={stringValidation}
        currentTextarea={currentTextarea}
        handlerClickTextarea={handlerClickTextarea}
      />

      <Footer
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

export default TextSpeed;
