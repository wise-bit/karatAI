


import person from "./person.js";
let stage, line, json;


(function () {

    console.log("initializing stage");


    stage = new createjs.Stage("myCanvas");

    line = initPerson();




    json = JSON.parse(document.getElementById("canvasJSON").innerText);

    initTween(json)

    addLinesToStage(line);

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

    console.log(json[0]["timestamp"]);
    console.log(json[0]["coordinates"][String(1)]);
    console.log(json[0]["angles"]);

    for (let i = 0; i < json.length; i++) {


        let coordinate = json[i]["coordinates"];
        tween1.to({ x: line.one.x + coordinate[String(1)]["x"], y: line.one.y + coordinate[String(1)]["y"] }, (i + 1) * 500)

        tween2.to({ x: line.two.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween3.to({ x: line.three.x + coordinate[String(1)]["x"] }, (i + 1) * 500)


        tween4.to({ x: line.four.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween5.to({ x: line.five.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween6.to({ x: line.six.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween7.to({ x: line.seven.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween8.to({ x: line.eight.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween9.to({ x: line.nine.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween10.to({ x: line.ten.x + coordinate[String(1)]["x"] }, (i + 1) * 500)
        tween11.to({ x: line.eleven.x + coordinate[String(1)]["x"] }, (i + 1) * 500)


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



function handleClick(event) {
    console.log("hellooo");
    // Click happenened
}
