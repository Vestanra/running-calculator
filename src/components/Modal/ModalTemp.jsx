import { useEffect } from "react";
import { useState } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, UnderInput, Wrap, WrapInput } from "./Modal.styled";

export const ModalTemp = ({ modalIsOpen, closeModal, pace, onChangePace }) => {
    const [min, setMin] = useState(pace.split(':')[0])
    const [sec, setSec] = useState(pace.split(':')[1])

    useEffect(() => {
        setMin(pace.split(':')[0] || '0')
        setSec(pace.split(':')[1] || '00')
    }, [pace])

    const onChangeMin = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 30) {
            return
        }
        if (evt.target.value === "") {
            setMin("");
        } else {
            setMin(evt.target.value)
        }
        
    };

    const onChangeSec = (evt) => {
        if (evt.target.value === "") {
            setSec("0");
        } else if (+evt.target.value < 0 || +evt.target.value > 60) {
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
                    <div>
                        <Input
                            type="number"
                            name="min"
                            onChange={onChangeMin}
                            placeholder={min.length === 0 ? '0' : min}                            
                        />:
                        <Input
                            type="number"
                            name="sec"
                            onChange={onChangeSec}
                            placeholder={sec.length === 0 ? '00' : sec}
                        />
                    </div>
                    <UnderInput>хв : сек</UnderInput>
                </WrapInput>
                <BtnWrap>
                    <Btn type="button" onClick={onClose}>відміна</Btn>
                    <Btn type="button" onClick={() => onChangePace(min, sec)}>ок</Btn>
                </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};