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
import { Header, InputsWrap, TitleHeader, ButtonWrap, Button, Main, ButtonTitle, ButtonNumber, ButtonText, SaveResetWrap, SaveResetBtn, SaveTitle, WrapThougts, TitleTought, TextTought, SvgRun, ImgRun } from "./App.styled";

export const App = () => {
  const [modalOpenDis, setModalOpenDis] = useState(false)
  const [modalOpenTime, setModalOpenTime] = useState(false)
  const [modalOpenRace, setModalOpenRace] = useState(false)
  const [distance, setDistance] = useState('0')
  const [pace, setPace] = useState("0:00")
  const [time, setTime] = useState("0:00:00")
  const [distanceForFormala, setDistanceForFormala] = useState(0)
  const [paceForformula, setPaceForformula] = useState(0)
  const [timeForFormula, setTimeForFormula] = useState(0)
  const [saveResults, setSaveResults] = useState(() => {
    const results = localStorage.getItem("results")
    if (results !== null) {
      return (JSON.parse(results))
    } else {
      return []
    }
  });
  
  const openModalDis = () => setModalOpenDis(true);
  const closeModalDis = () => setModalOpenDis(false);
  const openModalTime = () => setModalOpenTime(true);
  const closeModalTime = () => setModalOpenTime(false);
  const openModalRace = () => setModalOpenRace(true);
  const closeModalRace = () => setModalOpenRace(false);
    
  useEffect(() => {
    setDistanceForFormala(parseFloat(distance.replace(",", ".")))
    setPaceForformula(+pace.split(":")[0] * 60 + +pace.split(":")[1])
    setTimeForFormula(+time.split(":")[0] * 60 * 60 + +time.split(":")[1] * 60 + +time.split(":")[2])
  }, [distance, pace, time])

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(saveResults));
  }, [saveResults])

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
  
  const onButtonsClick = (km) => setDistance(km)
  
  const onChangeDistance = (km, m) => {
    let dis
    if (+m === 0) {
      dis = `${km}`
    } else {
      dis = `${km},${m}`
    }
    setDistance(dis)
    closeModalDis()
  }

  const onChangeTime = (h, min, sec) => {
    setTime(`${h}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`)
    closeModalTime()
  }

  const onChangePace = (min, sec) => {
    setPace(`${min}:${sec.padStart(2, '0')}`)
    closeModalRace()
  }
    
  const calculateTime = useCallback(() => {
    const seconds = Math.round(distanceForFormala * paceForformula)
    setTime(convertToHMS(seconds))
  }, [distanceForFormala, paceForformula])
 
  const calculatePace = useCallback(() => {
    const seconds = Math.round(timeForFormula / distanceForFormala)
    setPace(convertToMS(seconds))
  }, [distanceForFormala, timeForFormula])

  const calculateDistance = useCallback(() => {
    const distance = String((timeForFormula / paceForformula).toFixed(2))
    const km = distance.split('.')[0]
    const m = distance.split('.')[2] || 0
    let dis
    if (+m === 0) {
      dis = `${km}`
    } else {
      dis = `${km},${m}`
    }
    
    setDistance(dis)
  }, [paceForformula, timeForFormula])
  
  useEffect(() => {
    if (distanceForFormala > 0 && paceForformula > 0) {
      calculateTime();
    } else if (timeForFormula > 0 && distanceForFormala > 0) {
      calculatePace();
    } else if (timeForFormula > 0 && paceForformula > 0) {
      calculateDistance();
    }
  }, [calculateDistance, calculatePace, calculateTime, distanceForFormala, paceForformula, timeForFormula]);

  const onReset = () => {
    setDistance('0');
    setPace("0:00");
    setTime("0:00:00");
  };

  const onSave = () => {
    if (paceForformula > 0 && timeForFormula > 0 && distanceForFormala > 0) {
      setSaveResults(prvSt => [{ distance, pace, time, id: nanoid() }, ...prvSt])
    }
  }
  
  const onDeleteResult = (id) => setSaveResults(prvSt => prvSt.filter(el => el.id !== id))
  
  return (
    <div>
      <Header>
        <TitleHeader><ImgRun src={logo} alt="Логотип" /><p>Running calculator</p></TitleHeader>
      </Header>
      <Main>
        <WrapThougts>
          <TitleTought>Мудрість дня для бігуна:</TitleTought>
          <TextTought>"Якщо вранці замість того щоб довше поспати ти встаєш бігати - то можливо ти не такий і мудрий"</TextTought>
        </WrapThougts>
        <Buttons onButtonsClick={onButtonsClick} />
        <InputsWrap>
          <ButtonWrap>
            <Button onClick={openModalDis}>
              <ButtonTitle>Дистанція</ButtonTitle>
              <ButtonNumber>{distance}</ButtonNumber>
              <ButtonText>км</ButtonText>
            </Button>
            <ModalDistance
              modalIsOpen={modalOpenDis}
              closeModal={closeModalDis}
              distance={distance}
              onChangeDistance={onChangeDistance} />
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
          <SaveResetBtn
            onClick={onSave}
            disabled={(paceForformula > 0 && timeForFormula > 0 && distanceForFormala > 0) ? false : true}>Зберегти</SaveResetBtn>
          <SaveResetBtn type="button" onClick={onReset}>Скинути</SaveResetBtn>
        </SaveResetWrap>
        {saveResults.length > 0 &&
          <SaveTitle>Збережені результати</SaveTitle>}
        <SavedResults list={saveResults} onDelete={onDeleteResult} />
      </Main>
      <GlobalStyle />
    </div>
  );
};
