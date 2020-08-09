


import linePoint from "./linePoint.js";
import circlePoint from "./circlePoint.js";

let stage, line, circle, json;

let i = 0;
(function () {

    console.log("initializing stage");


    stage = new createjs.Stage("myCanvas");


    json = JSON.parse(document.getElementById("canvasJSON").innerText);

    line = initLine(json);
    circle = initCircle(json);




    initTween(json)
    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setFPS(1);

    addLinesToStage(line);
    addCirclesToStage(circle);

})();




function initTween(json) {

    let tween1 = createjs.Tween.get(circle.one);
    let tween2 = createjs.Tween.get(circle.two);
    let tween3 = createjs.Tween.get(circle.three);
    let tween4 = createjs.Tween.get(circle.four);
    let tween5 = createjs.Tween.get(circle.five);
    let tween6 = createjs.Tween.get(circle.six);
    let tween7 = createjs.Tween.get(circle.seven);
    let tween8 = createjs.Tween.get(circle.eight);
    let tween9 = createjs.Tween.get(circle.nine);
    let tween10 = createjs.Tween.get(circle.ten);
    let tween11 = createjs.Tween.get(circle.eleven);
    let tween12 = createjs.Tween.get(circle.twelve);
    let tween13 = createjs.Tween.get(circle.thirteen);

    console.log(json[0]["timestamp"]);
    console.log(json[0]["coordinates"][String(1)]);
    console.log(json[0]["angles"]);


    for (let i = 0; i < json.length; i++) {



        let coordinate = json[i]["coordinates"];


        tween1.to({ x: coordinate[String(1)]["x"], y: coordinate[String(1)]["y"] }, (i + 1) * 500)
        tween2.to({ x: coordinate[String(2)]["x"], y: coordinate[String(2)]["y"] }, (i + 1) * 500)
        tween3.to({ x: coordinate[String(3)]["x"], y: coordinate[String(3)]["y"] }, (i + 1) * 500)
        tween4.to({ x: coordinate[String(4)]["x"], y: coordinate[String(4)]["y"] }, (i + 1) * 500)
        tween5.to({ x: coordinate[String(5)]["x"], y: coordinate[String(5)]["y"] }, (i + 1) * 500)
        tween6.to({ x: coordinate[String(6)]["x"], y: coordinate[String(6)]["y"] }, (i + 1) * 500)
        tween7.to({ x: coordinate[String(7)]["x"], y: coordinate[String(7)]["y"] }, (i + 1) * 500)
        tween8.to({ x: coordinate[String(8)]["x"], y: coordinate[String(8)]["y"] }, (i + 1) * 500)
        tween9.to({ x: coordinate[String(9)]["x"], y: coordinate[String(9)]["y"] }, (i + 1) * 500)
        tween10.to({ x: coordinate[String(10)]["x"], y: coordinate[String(10)]["y"] }, (i + 1) * 500)
        tween11.to({ x: coordinate[String(11)]["x"], y: coordinate[String(11)]["y"] }, (i + 1) * 500)
        tween12.to({ x: coordinate[String(12)]["x"], y: coordinate[String(12)]["y"] }, (i + 1) * 500)
        tween13.to({ x: coordinate[String(13)]["x"], y: coordinate[String(13)]["y"] }, (i + 1) * 500)





        break;


    }


    /*
    createjs.Tween.get(line.one, { loop: true }).to({ x: line.one.x + 300 }, 3000).to({ x: 50 }, 3000)
    createjs.Tween.get(line.two, { loop: true }).to({ x: line.two.x + 300 }, 3000).to({ x: 50 }, 3000)
    */

}


function tick(event) {
    /*
    circle.one.x = circle.one.x + json[i]["coordinates"][String(1)]["x"];
    circle.one.y = circle.one.x + json[i]["coordinates"][String(1)]["y"];
    console.log(json[i]["coordinates"][String(1)]["x"]);

    i++;
    console.log(i)
    */
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
