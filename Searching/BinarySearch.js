function binarySearch(arr, item) {
    let lb = 0;
    let ub = arr.length;
    while (lb <= ub) {
        let mid = Math.floor((lb + ub) / 2);
        console.log(lb, ub, mid);
        if (item === arr[mid]) {
            console.log("Item Found....", mid, arr[mid]);
            break;
        } else if (item > arr[mid]) {
            lb = mid + 1;
        } else {
            ub = mid - 1;
        }
    }

}

binarySearch([1, 2, 3, 4, 5, 6, 7], 5);