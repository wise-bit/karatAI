


function createLine(coordinate) {
    let sizeW = 2
    let sizeH = 2

    let line = new createjs.Shape();
    line.graphics.setStrokeStyle(1).beginStroke("#3FBF68");
    console.log("called " + coordinate.moveToX);
    line.rotation = 0

    // Tell EaselJS where to go to start drawing the line
    line.graphics.moveTo((coordinate.moveToX + 500) / sizeW, (coordinate.moveToY + 500) / sizeH);
    // Tell EaselJS where to draw the line to
    line.graphics.lineTo((coordinate.lineToX + 500) / sizeW, (coordinate.lineToY + 500) / sizeH);

    line.graphics.endStroke();


    return line;

}

const person = {
    one() {
        return createLine({ moveToX: 100, moveToY: 100, lineToX: 150, lineToY: 200 })

    },

    two() {



        return createLine({ moveToX: 150, moveToY: 200, lineToX: 500, lineToY: 100 })

    },


    three() {


        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 250 })

    },

    four() {

        return createLine({ moveToX: 500, moveToY: 100, lineToX: 850, lineToY: 200 })

    },


    five() {


        return createLine({ moveToX: 850, moveToY: 200, lineToX: 900, lineToY: 100 })

    },

    six() {

        return createLine({ moveToX: 500, moveToY: 250, lineToX: 500, lineToY: 450 })

    },

    seven() {

        return createLine({ moveToX: 500, moveToY: 450, lineToX: 250, lineToY: 650 })

    },

    eight() {


        return createLine({ moveToX: 250, moveToY: 650, lineToX: 200, lineToY: 850 })

    },

    nine() {

        return createLine({ moveToX: 500, moveToY: 450, lineToX: 750, lineToY: 650 })

    },

    ten() {
        return createLine({ moveToX: 750, moveToY: 650, lineToX: 700, lineToY: 850 })


    },

    eleven() {

        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 10 })

    },


}



export default person