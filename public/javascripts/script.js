


import person from "./person.js";
let stage;

(function () {

    console.log("initializing stage");
    stage = new createjs.Stage("myCanvas");

    console.log("initializing person");
    let line = initPerson();

    /*

    createjs.Tween.get(line.one, { loop: true }).to({ x: 450 }, 3000).to({ x: 50 }, 3000)

    createjs.Ticker.addEventListener("tick", tick);
        line.one.addEventListener("click", handleClick);

    */

    stage.addChild(line.one, line.two, line.three, li)
    stage.update();

})();


function initPerson() {
    return {
        one: person.one(),
        two: person.two(),
        three: person.three(),
        four: person.four(),
        five: person.four(),
        six: person.four(),
        seven: person.four(),
        eight: person.four(),
        eight: person.four(),
        eight: person.four(),
        eight: person.four(),



    }
    //init
}

function tick(event) {
    stage.update();
}

function handleClick(event) {
    console.log("hellooo");
    // Click happenened
}



