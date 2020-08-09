


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
    one(json) {


        return createLine({ moveToX: 100, moveToY: 100, lineToX: 150, lineToY: 200 })

    },

    two(json) {



        return createLine({ moveToX: 150, moveToY: 200, lineToX: 500, lineToY: 100 })

    },


    three(json) {


        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 450 })

    },

    twelve(json) {

        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: -100 })

    },


    four(json) {

        return createLine({ moveToX: 500, moveToY: 100, lineToX: 850, lineToY: 200 })

    },


    five(json) {


        return createLine({ moveToX: 850, moveToY: 200, lineToX: 900, lineToY: 100 })

    },



    thirteen(json) {
        return createLine({ moveToX: 350, moveToY: 450, lineToX: 650, lineToY: 450 })

    },

    //six gets lineto of thirteen and seven get movetoX
    six(json) {

        return createLine({ moveToX: 350, moveToY: 450, lineToX: 250, lineToY: 650 })

    },


    seven(json) {

        return createLine({ moveToX: 650, moveToY: 450, lineToX: 750, lineToY: 650 })

    },

    eight(json) {

        return createLine({ moveToX: 250, moveToY: 650, lineToX: 350, lineToY: 850 })
    }
    ,

    nine(json) {

        return createLine({ moveToX: 750, moveToY: 650, lineToX: 700, lineToY: 850 })


    },


    eleven(json) {
        return createLine({ moveToX: 700, moveToY: 850, lineToX: 700, lineToY: 850 })

    },

    ten(json) {

        return createLine({ moveToX: 350, moveToY: 850, lineToX: 350, lineToY: 850 })

    },






}


export default linePoint

