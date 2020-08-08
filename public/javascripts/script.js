


import person from "./person.js";
let stage;
let stage2;

(function () {

    console.log("initializing stage");


    stage = new createjs.Stage("myCanvas");



    let line = initPerson();

    /*

    createjs.Tween.get(line.one, { loop: true }).to({ x: 450 }, 3000).to({ x: 50 }, 3000)

    createjs.Ticker.addEventListener("tick", tick);
        line.one.addEventListener("click", handleClick);

    */

    addLinesToStage(line);

})();


function initPerson() {
    return {
        one: person.one(),
        two: person.two(),
        three: person.three(),
        four: person.four(),
        five: person.five(),
        six: person.six(),
        seven: person.seven(),
        eight: person.eight(),
        nine: person.nine(),
        ten: person.ten(),
        eleven: person.eleven()
    }
    //init
}

function addLinesToStage(line) {

    stage.addChild(line.one, line.two, line.three, line.four, line.five, line.six, line.seven, line.eight, line.nine, line.ten, line.eleven)
    stage.update();



}

function tick(event) {
    stage.update();
}

function handleClick(event) {
    console.log("hellooo");
    // Click happenened
}



