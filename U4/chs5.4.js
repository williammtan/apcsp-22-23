// 7.5.4 Is It Even?

var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start(){
	while (true) {
	    let num = readInt("Enter a number (0 to exit): ");
	    if (num == SENTINEL) {
	        break;
	    }
	    if (isEven(num)) {
	        println("Even");
	    } else {
	        println("Odd");
	    }
	    
	}
	println("Done!");
}

function isEven(num) {
    return num % 2 == 0;
}