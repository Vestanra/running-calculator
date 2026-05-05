import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ModalDistance } from "./Modal/ModalDistance";
import { ModalTime } from "./Modal/ModalTime";
import { ModalTemp } from "./Modal/ModalTemp";
import { Buttons } from "./Buttonts/Buttonts";
import { convertToHMS, convertToMS } from "../helpers/index.js";
import { useEffect } from "react";
import { useCallback } from "react";
import { nanoid } from "nanoid";
import { SavedResults } from "./SavedResults/SavedResults";
import logo from '../run128.png';
import {
  Header, InputsWrap, TitleHeader, ButtonWrap, Button,
  Main, ButtonTitle, ButtonNumber, ButtonText, SaveResetWrap,
  SaveResetBtn, SaveTitle, ImgRun, TextHeader,
  ToggleWrap, ToggleLabel, ToggleInput, ToggleSlider
} from "./App.styled";

export const App = () => {
  const [run, setRun] = useState(false);
  const [modalOpenDis, setModalOpenDis] = useState(false);
  const [modalOpenTime, setModalOpenTime] = useState(false);
  const [modalOpenRace, setModalOpenRace] = useState(false);
  const [distance, setDistance] = useState('0');
  const [pace, setPace] = useState("0:00");
  const [time, setTime] = useState("0:00:00");
  const [distanceForFormala, setDistanceForFormala] = useState(0);
  const [paceForformula, setPaceForformula] = useState(0);
  const [timeForFormula, setTimeForFormula] = useState(0);
  const [lastChanged, setLastChanged] = useState(null);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [saveResults, setSaveResults] = useState(() => {
    const results = localStorage.getItem("results");
    if (results !== null) {
      return JSON.parse(results);
    } else {
      return [];
    }
  });

  const openModalDis = () => setModalOpenDis(true);
  const closeModalDis = () => setModalOpenDis(false);
  const openModalTime = () => setModalOpenTime(true);
  const closeModalTime = () => setModalOpenTime(false);
  const openModalRace = () => setModalOpenRace(true);
  const closeModalRace = () => setModalOpenRace(false);

  const handleClick = () => {
    setRun(true);
    setTimeout(() => setRun(false), 2000);
  };

  useEffect(() => {
    setDistanceForFormala(parseFloat(distance.replace(",", ".")));
  }, [distance]);

  useEffect(() => {
    setPaceForformula(+pace.split(":")[0] * 60 + +pace.split(":")[1]);
  }, [pace]);

  useEffect(() => {
    setTimeForFormula(+time.split(":")[0] * 60 * 60 + +time.split(":")[1] * 60 + +time.split(":")[2]);
  }, [time]);

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(saveResults));
  }, [saveResults]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const body = document.body;
    if (modalOpenDis || modalOpenRace || modalOpenTime) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [modalOpenDis, modalOpenRace, modalOpenTime]);

  const onButtonsClick = (km) => {
    setDistance(km);
    setLastChanged("distance");
  };

  const onChangeDistance = (km, m) => {
    let dis;
    if (+m === 0) {
      dis = `${km || '0'}`;
    } else {
      dis = `${km || "0"},${m.padStart(2, '0')}`;
    }
    setDistance(dis);
    setLastChanged("distance");
    closeModalDis();
  };

  const onChangeTime = (h, min, sec) => {
    if (+h === 0 && +min === 0 && +sec === 0) {
      setTime('0:00:00');
      setLastChanged("time");
      closeModalTime();
      return;
    }
    let newTime = `${h || '0'}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
    setTime(newTime);
    setLastChanged("time");
    closeModalTime();
  };

  const onChangePace = (min, sec) => {
    if (min.length === 0) {
      setPace(`0:${sec.padStart(2, '0')}`);
    } else if (sec.length === 0) {
      setPace(`${min}:00`);
    } else {
      setPace(`${min}:${sec.padStart(2, '0')}`);
    }
    setLastChanged("pace");
    closeModalRace();
  };

  const calculateTime = useCallback(() => {
    const seconds = Math.round(distanceForFormala * paceForformula);
    setTime(convertToHMS(seconds));
  }, [distanceForFormala, paceForformula]);

  const calculatePace = useCallback(() => {
    const seconds = Math.round(timeForFormula / distanceForFormala);
    setPace(convertToMS(seconds));
  }, [distanceForFormala, timeForFormula]);

  const calculateDistance = useCallback(() => {
    const distance = String((timeForFormula / paceForformula).toFixed(2));
    const km = distance.split('.')[0];
    const m = distance.split('.')[1] || '0';
    let dis;
    if (+m === 0) {
      dis = `${km}`;
    } else {
      dis = `${km},${m}`;
    }
    setDistance(dis);
  }, [paceForformula, timeForFormula]);


  useEffect(() => {
      if (lastChanged === "distance" && distanceForFormala > 0 && timeForFormula > 0 && paceForformula === 0) {
        calculatePace();
      } 
      if (lastChanged === "distance" && distanceForFormala > 0 && timeForFormula > 0 && paceForformula > 0) {
        calculateTime();
      } 
      if (lastChanged === "pace" && distanceForFormala > 0 && paceForformula > 0) {
        calculateTime();
      }
      if (lastChanged === "pace" && distanceForFormala === 0 && paceForformula > 0 && timeForFormula > 0) {
        calculateDistance();
      }
      if (lastChanged === "time" && distanceForFormala > 0 && timeForFormula > 0) {
        calculatePace();
      }
      if (lastChanged === "time" && distanceForFormala === 0 && timeForFormula > 0 && paceForformula > 0) {
        calculateDistance();
      }
  }, [
    distanceForFormala,
    paceForformula,
    timeForFormula,
    calculateTime,
    calculatePace,
    calculateDistance,
    lastChanged
  ]);

  const onReset = () => {
    setDistance('0');
    setPace("0:00");
    setTime("0:00:00");
    setLastChanged(null);
  };

  const onSave = () => {
    if (paceForformula > 0 && timeForFormula > 0 && distanceForFormala > 0) {
      setSaveResults(prvSt => [{ distance, pace, time, id: nanoid() }, ...prvSt]);
    }
  };

  const onDeleteResult = (id) =>
    setSaveResults(prvSt => prvSt.filter(el => el.id !== id));

  const formatDistance = (distance) => {
    const value = Number(distance.replace(',', '.'));
    if (Number.isNaN(value)) return distance;
    const rounded = Math.round(value * 100) / 100;
    if (rounded % 1 === 0) return String(rounded);
    return rounded.toFixed(2).replace('.', ',');
  };

  return (
    <div>
      <Header>
        <TitleHeader>
          <TextHeader>Running calculator</TextHeader>
          <ImgRun src={logo} $run={run} onClick={handleClick} alt="Логотип" />
        </TitleHeader>
      </Header>
      <Main>
        <ToggleWrap>
          <ToggleLabel>
            <ToggleInput type="checkbox" checked={isDark} onChange={() => setIsDark(d => !d)} />
            <ToggleSlider $isDark={isDark} />
          </ToggleLabel>
        </ToggleWrap>
        {/* <Expression /> */}
        <Buttons onButtonsClick={onButtonsClick} />
        <InputsWrap>
          <ButtonWrap>
            <Button onClick={openModalDis}>
              <ButtonTitle>Дистанція</ButtonTitle>
              <ButtonNumber>
                {formatDistance(distance)}
              </ButtonNumber>
              <ButtonText>км</ButtonText>
            </Button>
            <ModalDistance
              modalIsOpen={modalOpenDis}
              closeModal={closeModalDis}
              distance={distance}
              onChangeDistance={onChangeDistance}
            />
          </ButtonWrap>
          <ButtonWrap>
            <Button onClick={openModalRace}>
              <ButtonTitle>Темп</ButtonTitle>
              <ButtonNumber>{pace}</ButtonNumber>
              <ButtonText>хв/км</ButtonText>
            </Button>
            <ModalTemp
              modalIsOpen={modalOpenRace}
              closeModal={closeModalRace}
              pace={pace}
              onChangePace={onChangePace}
            />
          </ButtonWrap>
          <ButtonWrap>
            <Button onClick={openModalTime}>
              <ButtonTitle>Час</ButtonTitle>
              <ButtonNumber>{time}</ButtonNumber>
              <ButtonText>год:хв:сек</ButtonText>
            </Button>
            <ModalTime
              modalIsOpen={modalOpenTime}
              closeModal={closeModalTime}
              time={time}
              onChangeTime={onChangeTime}
            />
          </ButtonWrap>
        </InputsWrap>
        <SaveResetWrap>
          <SaveResetBtn type="button" onClick={onReset}>
            Скинути
          </SaveResetBtn>
          <SaveResetBtn
            onClick={onSave}
            disabled={
              paceForformula > 0 && timeForFormula > 0 && distanceForFormala > 0
                ? false
                : true
            }
          >
            Зберегти
          </SaveResetBtn>
        </SaveResetWrap>
        {saveResults.length > 0 && (
          <SaveTitle>Збережені результати</SaveTitle>
        )}
        <SavedResults list={saveResults} onDelete={onDeleteResult} />
      </Main>
      <GlobalStyle />
    </div>
  );
};
