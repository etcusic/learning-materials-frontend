export const sleepOneSecond = () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
} 