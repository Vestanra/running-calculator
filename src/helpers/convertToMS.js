export const convertToMS = (seconds) => {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${String(minutes)}:${String(remainingSeconds).padStart(2, '0')}`;
}