


function createCircle(coordinate) {
    let sizeW = 2
    let sizeH = 2

    let circle = new createjs.Shape();
    //  console.log("called " + coordinate.moveToX);
    circle.graphics.setStrokeStyle(1).beginStroke("#00000").beginFill("red").drawCircle((coordinate.moveToX + 500) / sizeW, (coordinate.moveToY + 500) / sizeH, 10);

    return circle;

}

const circlePoint = {
    one(json) {
        let coordinate = json[0]["coordinates"];

        console.log("correct: one is at" + coordinate)


        return createCircle({
            moveToX: coordinate[String(1)]["x"],
            moveToY: coordinate[String(1)]["y"], lineToX: 150, lineToY: 200
        })

    },

    two(json) {

        let coordinate = json[0]["coordinates"];

        console.log("correct: two is at" + coordinate)



        return createCircle({ moveToX: coordinate[String(2)]["x"], moveToY: coordinate[String(2)]["y"], lineToX: 500, lineToY: 100 })

    },


    three(json) {

        let coordinate = json[0]["coordinates"];


        console.log("correct: three is at" + coordinate)

        return createCircle({ moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 250 })

    },
    twelve(json) {
        let coordinate = json[0]["coordinates"];


        console.log("correct: twelve is at" + coordinate)

        return createCircle({ moveToX: 500, moveToY: -100, lineToX: 500, lineToY: 10 })

    },

    four(json) {
        let coordinate = json[0]["coordinates"];


        console.log("correct: four is at" + coordinate)

        //so far, four, five take lineTo
        return createCircle({ moveToX: 850, moveToY: 200, lineToX: 850, lineToY: 200 })

    },


    five(json) {
        let coordinate = json[0]["coordinates"];


        console.log("correct: five is at" + coordinate)

        return createCircle({ moveToX: 900, moveToY: 100, lineToX: 900, lineToY: 100 })

    },

    thirteen(json) {
        let coordinate = json[0]["coordinates"];

        console.log("correct: thirteen is at" + coordinate)


        return createCircle({ moveToX: 500, moveToY: 450, lineToX: 500, lineToY: 10 })

    },

    six(json) {
        let coordinate = json[0]["coordinates"];

        console.log("correct: six is at" + coordinate)


        return createCircle({ moveToX: 350, moveToY: 450, lineToX: 500, lineToY: 450 })

    },

    seven(json) {
        let coordinate = json[0]["coordinates"];

        console.log("correct: seven is at" + coordinate)
        return createCircle({ moveToX: 650, moveToY: 450, lineToX: 250, lineToY: 650 })

    },

    eight(json) {
        let coordinate = json[0]["coordinates"];


        console.log("correct: eight is at" + coordinate)

        return createCircle({ moveToX: 250, moveToY: 650, lineToX: 200, lineToY: 850 })

    },

    nine(json) {
        let coordinate = json[0]["coordinates"];


        console.log("correct: nine is at" + coordinate)

        return createCircle({ moveToX: 750, moveToY: 650, lineToX: 750, lineToY: 650 })

    },

    eleven(json) {
        let coordinate = json[0]["coordinates"];

        console.log("correct: eleven is at" + coordinate)

        return createCircle({ moveToX: 700, moveToY: 850, lineToX: 500, lineToY: 10 })

    },

    //LAST POINT HAS NO LINESS
    ten(json) {
        let coordinate = json[0]["coordinates"];

        console.log("correct: ten is at" + coordinate)
        return createCircle({ moveToX: 350, moveToY: 850, lineToX: 700, lineToY: 850 })


    },







}


export default circlePoint

