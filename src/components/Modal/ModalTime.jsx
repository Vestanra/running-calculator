import { useEffect } from "react";
import { useState } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, Wrap, WrapInput } from "./Modal.styled";

export const ModalTime = ({ modalIsOpen, closeModal, time, onChangeTime }) => {
    const [h, setH] = useState(time.split(':')[0])
    const [min, setMin] = useState(time.split(':')[1])
    const [sec, setSec] = useState(time.split(':')[2])

    useEffect(() => {
        setH(time.split(':')[0])
        setMin(time.split(':')[1])
        setSec(time.split(':')[2])
    }, [time])

    const onChangeH = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 23) {
            return
        }
        setH(evt.target.value)
    }

    const onChangeMin = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 60) {
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
        setH(time.split(':')[0])
        setMin(time.split(':')[1])
        setSec(time.split(':')[2])
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
                <Title>Вкажіть час</Title>
                <WrapInput>
                    <Input type="number" value={h} name="h" onChange={onChangeH} />:
                    <Input type="number" value={min} name="min" onChange={onChangeMin} />:
                    <Input type="number" value={sec} name="sec" onChange={onChangeSec} /> км
                </WrapInput>
                <BtnWrap>
                    <Btn type="button" onClick={onClose}>відміна</Btn>
                    <Btn type="button" onClick={() => onChangeTime(h, min, sec)}>ок</Btn>
                </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};