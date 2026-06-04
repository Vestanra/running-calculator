import { useEffect, useState } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, UnderInput, Wrap, WrapInput } from "./Modal.styled";

const MAX_DIGITS = 4; // MMSS

// digits "4" -> "0:04", "430" -> "4:30", "1230" -> "12:30"
const formatPace = (digits) => {
    const padded = digits.padStart(3, '0');
    const sec = padded.slice(-2);
    const min = String(parseInt(padded.slice(0, -2), 10));
    return `${min}:${sec}`;
};

export const ModalTemp = ({ modalIsOpen, closeModal, pace, onChangePace }) => {
    // typed digits, filled right-to-left like a phone timer; empty = nothing typed yet
    const [digits, setDigits] = useState('');

    // reset the buffer on open / when an external pace arrives, so the field
    // starts blank and shows the current value only as a faint placeholder
    useEffect(() => {
        setDigits('');
    }, [pace, modalIsOpen]);

    const onChange = (evt) => {
        setDigits(evt.target.value.replace(/\D/g, '').slice(-MAX_DIGITS));
    };

    const onClose = () => {
        setDigits('');
        closeModal();
    };

    const onOk = () => {
        if (digits === '') {
            // nothing typed -> keep the current value untouched
            onClose();
            return;
        }
        const padded = digits.padStart(3, '0');
        const rawMin = parseInt(padded.slice(0, -2), 10);
        const rawSec = parseInt(padded.slice(-2), 10);
        const total = rawMin * 60 + rawSec; // carry seconds > 59 into minutes
        const min = Math.floor(total / 60);
        const sec = total % 60;
        onChangePace(String(min), String(sec).padStart(2, '0'));
    };

    return (
        <ReactModalStyled
            contentLabel="Modal"
            isOpen={modalIsOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(20, 18, 16, 0.45)',
                    backdropFilter: 'blur(6px)',
                    zIndex: 100,
                },
            }}
        >
            <CloseIcon onClick={onClose} />
            <Wrap>
                <Title>Темп</Title>
                <WrapInput>
                    <Input
                        type="text"
                        inputMode="numeric"
                        name="pace"
                        value={digits === '' ? '' : formatPace(digits)}
                        onChange={onChange}
                        placeholder={pace}
                        $width="120px"
                        $widthLg="140px"
                    />
                    <UnderInput>хв : сек</UnderInput>
                </WrapInput>
                <BtnWrap>
                    <Btn type="button" onClick={onOk}>ок</Btn>
                </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};
