// Print Flight Itinerary

function start(){
	// Write your code here
	var itinerary = ["San Francisco", "New York", "Chicago", "Honolulu"];
	for(var i=0;i<itinerary.length;i++) {
	    print(itinerary[i]);
	    if(i!=itinerary.length-1) {
	        print(" -> ");
	    }
	}
}