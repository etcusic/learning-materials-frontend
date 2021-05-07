export const sleepOneSecond = (time) => {
    console.log(time)
    return new Promise(resolve => setTimeout(resolve, 1000));
} 

// function newPromise (myFunction) {
//     return 
// }