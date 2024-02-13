import { useEffect } from "react";
import { useState } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, Wrap, WrapInput } from "../Modal.styled";

export const ModalTemp = ({ modalIsOpen, closeModal, pace, onChangePace }) => {
    const [min, setMin] = useState(pace.split(':')[0])
    const [sec, setSec] = useState(pace.split(':')[1])

    useEffect(() => {
        setMin(pace.split(':')[0])
        setSec(pace.split(':')[1])
    }, [pace])

    const onChangeMin = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 30) {
            return
        }
        setMin(evt.target.value)
    }

    const onChangeSec = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 60) {
            return
        }
        setSec(evt.target.value)
    }

    const onClose = () => {
        setMin(pace.split(':')[0])
        setSec(pace.split(':')[1])
        closeModal()
    }
 
    return (
        <ReactModalStyled
            contentLabel="Modal"
            isOpen={modalIsOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(35, 31, 32, 0.5)',
                },
            }}
        >
                
            <CloseIcon onClick={onClose} />
            <Wrap>
                <Title>Вкажіть темп</Title>
            <WrapInput>
                <Input type="number" value={min} name="min" onChange={onChangeMin} />:
                <Input type="number" value={sec} name="sec" onChange={onChangeSec} /> км
            </WrapInput>
            <BtnWrap>
                <Btn type="button" onClick={onClose}>відміна</Btn>
                <Btn type="button" onClick={() => onChangePace(min, sec)}>ок</Btn>
            </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};