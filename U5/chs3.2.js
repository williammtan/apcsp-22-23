// Remove From Line

function arrPrinter(arr) {
    for(let i=0;i<arr.length;i++) {
	    print(arr[i] );
	    if(i!=arr.length-1) {
	        print(", ");
	    }
	}
}

function start(){
	var line = ["Sam", "Lisa", "Laurie", "Bob", "Ryan"];
	arrPrinter(line);
	println(""); 
	// Your code goes here
	line.remove(0);
	line.remove(0);
	arrPrinter(line);
}