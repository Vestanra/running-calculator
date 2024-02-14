import ReactModal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, UnderInput, Wrap, WrapInput } from "./Modal.styled";
ReactModal.setAppElement('#root');

export const ModalDistance = ({ modalIsOpen, closeModal, distance, onChangeDistance }) => {
    const [km, setKm] = useState(distance.split(',')[0])
    const [m, setM] = useState(distance.split(',')[1] || '0')

    useEffect(() => {
        setKm(distance.split(',')[0]);
        setM(distance.split(',')[1] || '0');
    }, [distance]);


    const onChangeKm = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 100) {
            return;
        }
        if (evt.target.value === "") {
            setKm("");
        } else {
            setKm(evt.target.value);
        }
    };

    const onChangeM = (evt) => {
        if (+evt.target.value < 0 || +evt.target.value > 9) {
            return
        }
        setM(evt.target.value)
    }

    const onClose = () => {
        setKm(distance.split(',')[0])
        setM(distance.split(',')[1] || '0')
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
                <Title>Вкажіть дистанцію</Title>
                <WrapInput>
                    <div>
                        <Input
                            type="number"
                            value={km}
                            name="km"
                            onChange={onChangeKm}
                            placeholder="0"
                        />,
                        <Input
                            type="number"
                            value={m}
                            name="m"
                            onChange={onChangeM}
                            placeholder="0"
                        />
                    </div>
                    <UnderInput>км , м</UnderInput>
                </WrapInput>
                <BtnWrap>
                    <Btn type="button" onClick={onClose}>відміна</Btn>
                    <Btn type="button" onClick={() => onChangeDistance(km, m)}>ок</Btn>
                </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};
