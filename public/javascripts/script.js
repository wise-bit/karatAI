


import linePoint from "./linePoint.js";
import circlePoint from "./circlePoint.js";

let stage, line, circle, json;


(function () {

    console.log("initializing stage");


    stage = new createjs.Stage("myCanvas");


    line = initLine();
    circle = initCircle();



    json = JSON.parse(document.getElementById("canvasJSON").innerText);

    // initTween(json)

    addLinesToStage(line);
    addCirclesToStage(circle);

})();



function initLine() {
    return {
        one: linePoint.one(),
        two: linePoint.two(),
        three: linePoint.three(),
        four: linePoint.four(),
        five: linePoint.five(),
        six: linePoint.six(),
        seven: linePoint.seven(),
        eight: linePoint.eight(),
        nine: linePoint.nine(),
        ten: linePoint.ten(),
        eleven: linePoint.eleven(),
        twelve: linePoint.twelve(),
        thirteen: linePoint.thirteen()

    }

    //init
}

function initCircle() {
    return {
        one: circlePoint.one(),
        two: circlePoint.two(),
        three: circlePoint.three(),
        four: circlePoint.four(),
        five: circlePoint.five(),
        six: circlePoint.six(),
        seven: circlePoint.seven(),
        eight: circlePoint.eight(),
        nine: circlePoint.nine(),
        ten: circlePoint.ten(),
        eleven: circlePoint.eleven(),
        twelve: circlePoint.twelve(),
        thirteen: circlePoint.thirteen()

    }

    //init
}




function addLinesToStage(line) {

    stage.addChild(line.one, line.two, line.three, line.four, line.five, line.six, line.seven, line.eight, line.nine, line.ten, line.eleven, line.twelve, line.thirteen)
    stage.update();

}

function addCirclesToStage(circle) {

    stage.addChild(circle.one, circle.two, circle.three, circle.four, circle.five, circle.six, circle.seven, circle.eight, circle.nine, circle.ten, circle.eleven, circle.twelve, circle.thirteen)
    stage.update();

}






function handleClick(event) {
    console.log("hellooo");
    // Click happenened
}
