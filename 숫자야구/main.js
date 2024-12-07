const start = document.querySelector(".start");
let num_box = [];
start.addEventListener('click',function() {
    while(num_box.length < 4) {
        let randomNum = parseInt(Math.random()*10);
        if(!num_box.includes(randomNum)){
            num_box.push(randomNum);
        }
    }
    console.log(num_box);
    if(num_box.length === 4) {
        start.disabled = true;
    }
});

const stop = document.querySelector(".stop");
stop.addEventListener('click',function() {
    num_box = [];
    start.disabled = false;
})
const submitBtn = document.querySelector('.submitBtn');
const numText = document.querySelector('.numText');
let user_box = [];
let count = 0;
submitBtn.addEventListener('click',function() {
    count++;
    const inputNum = numText.value;
    user_box = inputNum.split("").map(Number);
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < 4; i++) {
        if(num_box[i] === user_box[i]) {
            strike++;
        }else if(num_box.includes(user_box[i])) {
            ball++;
        }
    }
    if(strike === 4){
        console.log("4스트라이크 겜을 승리하셨습니다.");
        console.log("도전횟수 : "+count);
        start.disabled = false;
        num_box = [];
        count = 0;
    }else {
        console.log(strike+"스트라이크");
    }
    if(ball !== 0) {
        console.log(ball+"볼");
    }
    numText.value = "";
})