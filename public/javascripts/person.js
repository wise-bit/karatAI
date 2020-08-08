


function createLine(coordinate) {
    let line = new createjs.Shape();
    line.graphics.setStrokeStyle(1).beginStroke("#3FBF68");
    console.log("called " + coordinate.moveToX);
    // Tell EaselJS where to go to start drawing the line
    line.graphics.moveTo(coordinate.moveToX, coordinate.moveToY);

    // Tell EaselJS where to draw the line to
    line.graphics.lineTo(coordinate.lineToX, coordinate.lineToY);
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


        return createLine({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 450 })

    },

    four() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#00000");
        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(500, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(850, 200);

        line.graphics.endStroke();

        return line;
    },


    five() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#00000");
        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(850, 200);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(900, 100);

        line.graphics.endStroke();

        return line;
    },

    six() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#BFB43F");

        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(100, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(150, 200);

        line.graphics.endStroke();

        return line;
    },

    seven() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#BFB43F");

        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(100, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(150, 200);

        line.graphics.endStroke();

        return line;
    },

    eight() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#BFB43F");

        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(100, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(150, 200);

        line.graphics.endStroke();

        return line;
    },

    nine() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#BFB43F");

        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(100, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(150, 200);

        line.graphics.endStroke();

        return line;
    },

    ten() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#BFB43F");

        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(100, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(150, 200);

        line.graphics.endStroke();

        return line;
    },


    eleven() {

        let line = new createjs.Shape();
        line.graphics.setStrokeStyle(1).beginStroke("#BFB43F");

        // Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(100, 100);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(150, 200);

        line.graphics.endStroke();
        return line;
    },


}

/*

// Tell EaselJS where to go to start drawing the line
        line.graphics.moveTo(120, 305);

        // Tell EaselJS where to draw the line to
        line.graphics.lineTo(280, 305);

        // Draw another line to a new point
        line.graphics.lineTo(180, 96);




        // Do that again for good measure (and to get a crazy looking thing on screen
        line.graphics.lineTo(96, 180);


*/


export default person