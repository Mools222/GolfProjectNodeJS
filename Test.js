const firebaseTools = require('./FirebaseTools');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    let arr = ["red", "blue", "green", "yellow"];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        firebaseTools.saveScore(arr[randomNumber], 1);
        await sleep(2000);
    }
}

test();