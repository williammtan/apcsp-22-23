function binarySearch(arr) {
    let mid = Math.floor(arr.length / 2);
    console.log(arr + " " + mid);
    if(arr[mid] == val) {
        return i;
    } else if(arr[mid]>val) {
        return binarySearch(arr.slice(0, mid-1));
    } else if(arr[mid]<val) {
        return binarySearch(arr.slice(mid+1, arr.length-1));
    }
}
