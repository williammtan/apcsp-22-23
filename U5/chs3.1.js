// Reverse List

function start(){
	// Write your code here
	var arr = [1,2,3,4];
    var reversed = reverseList(arr);
    println(reversed);
}

function reverseList(arr) {
    let newArr = [];
    for(let i=arr.length-1;i>=0;i--) {
        newArr.push(arr[i]);
    }
    
    return newArr;
}