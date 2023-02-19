let promise_resolved = new Promise((resolve, reject) => {
    console.log('Initial resolved promise');
    resolve("result1"); // resolve 함수로 전달될 결과
})
.then((message) => {
    console.log("resolved " + message);
    throw new Error("throwed error!");
})
.catch((error) => {
    console.log('Error handling ' + error);
    return "result2" // return 으로 전달될 결과
})
.then((message) => {
    // 여기서 finally와 같은 효과
    console.log("finally " + message);
});


let promise_rejected = new Promise((resolve, reject) => {
    console.log('Initial rejected promise');
    reject("rejected!"); // rejected 되어 catch 구문으로 가게 됨
})
.then(() => {
    throw new Error("throwed error!");
})
.catch((error) => {
    console.log('Error handling ' + error);
})
.then(() => {
    // 여기서 finally와 같은 효과
    console.log('finally');
});
