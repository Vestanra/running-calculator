import { useEffect } from "react";
import { useState } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, UnderInput, Wrap, WrapInput } from "./Modal.styled";

export const ModalTime = ({ modalIsOpen, closeModal, time, onChangeTime }) => {
    const [hT, setHT] = useState(time.split(':')[0])
    const [minT, setMinT] = useState(time.split(':')[1])
    const [secT, setSecT] = useState(time.split(':')[2])

    useEffect(() => {
        setHT(time.split(':')[0] || '0')
        setMinT(time.split(':')[1])
        setSecT(time.split(':')[2])
    }, [time])

    const onChangeH = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 23) {
            return
        }
        setHT(evt.target.value)
    };

    const onChangeMin = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 60) {
            return
        }
        setMinT(evt.target.value)
    };

    const onChangeSec = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 60) {
            return
        }
        setSecT(evt.target.value)
    };

    const onClose = () => {
        setHT(time.split(':')[0])
        setMinT(time.split(':')[1])
        setSecT(time.split(':')[2])
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
                    <div>
                        <Input
                            type="number"
                            value={hT}
                            name="h"
                            onChange={onChangeH}
                            placeholder="0"
                        />:
                        <Input
                            type="number"
                            value={minT}
                            name="min"
                            onChange={onChangeMin}
                            placeholder="00"
                        />:
                        <Input
                            type="number"
                            value={secT} name="sec"
                            onChange={onChangeSec}
                            placeholder="00"
                        />
                    </div>
                    <UnderInput>год : хв : сек</UnderInput>
                </WrapInput>
                <BtnWrap>
                    <Btn type="button" onClick={onClose}>відміна</Btn>
                    <Btn type="button" onClick={() => onChangeTime(hT, minT, secT)}>ок</Btn>
                </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};