export const getRandomNumber = (min, max) => {
    const amplitud = max -min;
    const amplitudRamdom = Math.random() * amplitud;

    return min + Math.round(amplitudRamdom)

}