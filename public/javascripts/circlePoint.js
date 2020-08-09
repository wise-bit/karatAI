


function createCircle(coordinate) {
    let sizeW = 2
    let sizeH = 2

    let circle = new createjs.Shape();
    //  console.log("called " + coordinate.moveToX);
    circle.graphics.setStrokeStyle(1).beginStroke("#00000").beginFill("red").drawCircle((coordinate.moveToX + 500) / sizeW, (coordinate.moveToY + 500) / sizeH, 10);

    return circle;

}

const circlePoint = {
    one() {


        return createCircle({ moveToX: 100, moveToY: 100, lineToX: 150, lineToY: 200 })

    },

    two() {



        return createCircle({ moveToX: 150, moveToY: 200, lineToX: 500, lineToY: 100 })

    },


    three() {


        return createCircle({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 250 })

    },

    four() {

        //so far, four, five take lineTo
        return createCircle({ moveToX: 850, moveToY: 200, lineToX: 850, lineToY: 200 })

    },


    five() {

        return createCircle({ moveToX: 900, moveToY: 100, lineToX: 900, lineToY: 100 })

    },

    six() {

        return createCircle({ moveToX: 500, moveToY: 250, lineToX: 500, lineToY: 450 })

    },

    seven() {

        return createCircle({ moveToX: 500, moveToY: 450, lineToX: 250, lineToY: 650 })

    },

    eight() {


        return createCircle({ moveToX: 250, moveToY: 650, lineToX: 200, lineToY: 850 })

    },

    nine() {

        return createCircle({ moveToX: 500, moveToY: 450, lineToX: 750, lineToY: 650 })

    },

    ten() {
        return createCircle({ moveToX: 750, moveToY: 650, lineToX: 700, lineToY: 850 })


    },

    eleven() {

        return createCircle({ moveToX: 600, moveToY: 10, lineToX: 500, lineToY: 10 })

    },

    twelve() {

        return createCircle({ moveToX: 850, moveToY: 700, lineToX: 500, lineToY: 10 })

    },

    thirteen() {

        return createCircle({ moveToX: 850, moveToY: 700, lineToX: 500, lineToY: 10 })

    },


}


export default circlePoint

