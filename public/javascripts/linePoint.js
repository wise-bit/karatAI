


function createLine(coordinate) {
    let sizeW = 2
    let sizeH = 2

    let line = new createjs.Shape();
    line.graphics.setStrokeStyle(1).beginStroke("#3FBF68");
    //  console.log("called " + coordinate.moveToX);

    // Tell EaselJS where to go to start drawing the line
    line.graphics.moveTo((coordinate.moveToX + 500) / sizeW, (coordinate.moveToY + 500) / sizeH);
    // Tell EaselJS where to draw the line to
    line.graphics.lineTo((coordinate.lineToX + 500) / sizeW, (coordinate.lineToY + 500) / sizeH);


    line.graphics.endStroke();


    return line;

}

const linePoint = {
    one() {


        return createLine({ moveToX: 100, moveToY: 100, lineToX: 150, lineToY: 200 })

    },

    two() {



        return createLine({ moveToX: 150, moveToY: 200, lineToX: 500, lineToY: 100 })

    },


    three() {


        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 450 })

    },

    twelve() {

        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: -100 })

    },


    four() {

        return createLine({ moveToX: 500, moveToY: 100, lineToX: 850, lineToY: 200 })

    },


    five() {


        return createLine({ moveToX: 850, moveToY: 200, lineToX: 900, lineToY: 100 })

    },



    thirteen() {
        return createLine({ moveToX: 350, moveToY: 450, lineToX: 650, lineToY: 450 })

    },

    //six gets lineto of thirteen and seven get movetoX
    six() {

        return createLine({ moveToX: 350, moveToY: 450, lineToX: 250, lineToY: 650 })

    },


    seven() {

        return createLine({ moveToX: 650, moveToY: 450, lineToX: 750, lineToY: 650 })

    },

    eight() {

        return createLine({ moveToX: 250, moveToY: 650, lineToX: 350, lineToY: 850 })
    }
    ,

    nine() {

        return createLine({ moveToX: 750, moveToY: 650, lineToX: 700, lineToY: 850 })


    },


    ten() {
        return createLine({ moveToX: 500, moveToY: 900, lineToX: 750, lineToY: 900 })


    },

    eleven() {

        return createLine({ moveToX: 300, moveToY: 900, lineToX: 900, lineToY: 900 })

    },






}


export default linePoint

