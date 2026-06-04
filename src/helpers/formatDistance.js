export const formatDistance = (distance) => {
    const value = Number(distance.replace(',', '.'));
    if (Number.isNaN(value)) return distance;
    const rounded = Math.round(value * 100) / 100;
    if (rounded % 1 === 0) return String(rounded);
    return rounded.toFixed(2).replace('.', ',');
}
