
const person = {
    top(stage) {

        let ball = new createjs.Shape();
        ball.graphics.beginFill("#000000").drawCircle(0, 0, 50)
        ball.x = 50;
        ball.y = 200;

        createjs.Tween.get(ball, { loop: true }).to({ x: 450 }, 3000).to({ x: 50 }, 3000)
        stage.addChild(ball)
        stage.update();
        return ball;
    },

}


export default person