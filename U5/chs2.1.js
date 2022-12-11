// Coin Flip Fun: Longest Streak of Heads

var NUM_FLIPS = 100;

function start(){
	var flips = flipCoins();
	printArray(flips);
}

function longestHeadsStreak(flips) {
    var best = 0;
    var n = 0;
    for(var i=0;i<flips.length;i++) {
        if(flips[i]=="Heads") {
            n++;
        } else {
            best = Math.max(n, best);
            n = 0;
        }
    }
    best = Math.max(n, best);
    
    println("Longest Streak of Heads: " + best);
}

// This function should flip a coin NUM_FLIPS
// times, and add the result to an array. We
// return the result to the caller.
function flipCoins(){
	var flips = [];
	for(var i = 0; i < NUM_FLIPS; i++){
		if(Randomizer.nextBoolean()){
			flips.push("Heads");
		}else{
			flips.push("Tails");
		}
	}
	return flips;
}

function printArray(arr){
	for(var i = 0; i < arr.length; i++){
		println(i + ": " + arr[i]);
	}
}