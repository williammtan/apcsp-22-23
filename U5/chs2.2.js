// Draw a Barcode

setSize(400, 100);
var NUM_LINES = 400;
var i = 1;

function start() {
    drawBarcode(generateBarcode(NUM_LINES));
}

// Draw the given barcode
function drawBarcode(barcode) {
    // Your code goes here
    for(var i=0;i<barcode.length;i++) {
        if(barcode[i]) {
            var line = new Line(i+1, 0, i+1, 100);
            line.setLineWidth(1);
            add(line);
        }
    
    }
}

/* Generates a bit array representing a barcode
 * The array contains booleans in each index.
 * true means there is a black line.
 * false means there is not.
 *
 * Returns the array.
 */
function generateBarcode(lines) {
    var barcode = [];
    for (var i = 0; i < lines; i++) {
        barcode[i] = Randomizer.nextBoolean(0.3);
    }
    return barcode;
}