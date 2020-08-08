


import person from "./person.js";
var stage;

(function () {

    console.log("being called");
    stage = new createjs.Stage("myCanvas");
    let top = person.top(stage);

    stage.addChild(top)
    stage.update();

    init();
})();


function init() {



}





function tick(event) {
    stage.update();
}

function handleClick(event) {
    console.log("hellooo");
    // Click happenened
}





