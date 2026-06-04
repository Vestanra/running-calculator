import { useEffect, useState } from "react";
import { Btn, BtnWrap, CloseIcon, Input, ReactModalStyled, Title, UnderInput, Wrap, WrapInput } from "./Modal.styled";

const MAX_DIGITS = 6; // HHMMSS

// digits "4" -> "0:00:04", "130" -> "0:01:30", "13045" -> "1:30:45"
const formatTime = (digits) => {
    const padded = digits.padStart(5, '0');
    const sec = padded.slice(-2);
    const min = padded.slice(-4, -2);
    const h = String(parseInt(padded.slice(0, -4), 10));
    return `${h}:${min}:${sec}`;
};

export const ModalTime = ({ modalIsOpen, closeModal, time, onChangeTime }) => {
    // typed digits, filled right-to-left like a phone timer; empty = nothing typed yet
    const [digits, setDigits] = useState('');

    // reset the buffer on open / when an external time arrives, so the field
    // starts blank and shows the current value only as a faint placeholder
    useEffect(() => {
        setDigits('');
    }, [time, modalIsOpen]);

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
        const padded = digits.padStart(5, '0');
        const rawH = parseInt(padded.slice(0, -4), 10);
        const rawMin = parseInt(padded.slice(-4, -2), 10);
        const rawSec = parseInt(padded.slice(-2), 10);
        const total = rawH * 3600 + rawMin * 60 + rawSec; // carry overflow upward
        const h = Math.floor(total / 3600);
        const min = Math.floor((total % 3600) / 60);
        const sec = total % 60;
        onChangeTime(String(h), String(min).padStart(2, '0'), String(sec).padStart(2, '0'));
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
                <Title>Час</Title>
                <WrapInput>
                    <Input
                        type="text"
                        inputMode="numeric"
                        name="time"
                        value={digits === '' ? '' : formatTime(digits)}
                        onChange={onChange}
                        placeholder={time}
                        $width="150px"
                        $widthLg="175px"
                    />
                    <UnderInput>год : хв : сек</UnderInput>
                </WrapInput>
                <BtnWrap>
                    <Btn type="button" onClick={onOk}>ок</Btn>
                </BtnWrap>
            </Wrap>
        </ReactModalStyled>
    )
};
