// Empty Array (Push/Pop)

function printArr(arr, n) {
    for(let i=0;i<n.length;i++) {
        println(arr[i]);
    }
}

function start(){
	// Write your code here
	let arr = [];
	arr.push(3);
	arr.push("hello");
	arr.push(false);
	println(arr[0]);
	println(arr[1]);
	println(arr[2]);
// 	printArr(arr, 3);
	arr.pop();
	arr.pop();
// 	printArr(arr, 3);
    println(arr[0]);
	println(arr[1]);
	println(arr[2]);
}