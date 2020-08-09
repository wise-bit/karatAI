


import linePoint from "./linePoint.js";
import circlePoint from "./circlePoint.js";

let stage, line, circle, json;


(function () {

    console.log("initializing stage");


    stage = new createjs.Stage("myCanvas");


    json = JSON.parse(document.getElementById("canvasJSON").innerText);

    line = initLine(json);
    circle = initCircle(json);




    initTween(json)

    addLinesToStage(line);
    addCirclesToStage(circle);

})();




function initTween(json) {

    let tween1 = createjs.Tween.get(line.one);
    let tween2 = createjs.Tween.get(line.two);
    let tween3 = createjs.Tween.get(line.three);
    let tween4 = createjs.Tween.get(line.four);
    let tween5 = createjs.Tween.get(line.five);
    let tween6 = createjs.Tween.get(line.six);
    let tween7 = createjs.Tween.get(line.seven);
    let tween8 = createjs.Tween.get(line.eight);
    let tween9 = createjs.Tween.get(line.nine);
    let tween10 = createjs.Tween.get(line.ten);
    let tween11 = createjs.Tween.get(line.eleven);
    let tween12 = createjs.Tween.get(line.eleven);
    let tween13 = createjs.Tween.get(line.eleven);

    console.log(json[0]["timestamp"]);
    console.log(json[0]["coordinates"][String(1)]);
    console.log(json[0]["angles"]);

    for (let i = 0; i < json.length; i++) {



        let coordinate = json[i]["coordinates"];

        //tween1.to({ x: coordinate[String(1)]["x"], y: coordinate[String(1)]["y"] }, (i + 1) * 500)
        tween2.to({ x: coordinate[String(2)]["x"], y: coordinate[String(2)]["y"] }, (i + 1) * 500)
        tween3.to({ x: coordinate[String(3)]["x"], y: coordinate[String(3)]["y"] }, (i + 1) * 500)
        tween4.to({ x: coordinate[String(4)]["x"], y: coordinate[String(4)]["y"] }, (i + 1) * 500)





        break;




    }

    createjs.Ticker.addEventListener("tick", tick);

    /*
    createjs.Tween.get(line.one, { loop: true }).to({ x: line.one.x + 300 }, 3000).to({ x: 50 }, 3000)
    createjs.Tween.get(line.two, { loop: true }).to({ x: line.two.x + 300 }, 3000).to({ x: 50 }, 3000)
    */

}


function tick(event) {
    stage.update();
}





function initLine(json) {
    return {
        one: linePoint.one(json),
        two: linePoint.two(json),
        three: linePoint.three(json),
        four: linePoint.four(json),
        five: linePoint.five(json),
        six: linePoint.six(json),
        seven: linePoint.seven(json),
        eight: linePoint.eight(json),
        nine: linePoint.nine(json),
        ten: linePoint.ten(json),
        eleven: linePoint.eleven(json),
        twelve: linePoint.twelve(json),
        thirteen: linePoint.thirteen(json)

    }

    //init
}

function initCircle(json) {
    return {
        one: circlePoint.one(json),
        two: circlePoint.two(json),
        three: circlePoint.three(json),
        four: circlePoint.four(json),
        five: circlePoint.five(json),
        six: circlePoint.six(json),
        seven: circlePoint.seven(json),
        eight: circlePoint.eight(json),
        nine: circlePoint.nine(json),
        ten: circlePoint.ten(json),
        eleven: circlePoint.eleven(json),
        twelve: circlePoint.twelve(json),
        thirteen: circlePoint.thirteen(json),

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
