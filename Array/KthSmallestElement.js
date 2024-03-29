
// Javascript implementation of worst
// case linear time algorithm
// to find k'th smallest element

// int partition(int arr[], int l, int r, int k);

// A simple function to find median of arr[]. This is called
// only for an array of size 5 in this program.
function findMedian(arr, i, n) {
    if (i <= n)
        arr.sort((a, b) => a - b); // Sort the array
    else
        arr.sort((a, b) => a - b);
    return arr[Math.floor(n / 2)]; // Return middle element
}

// Returns k'th smallest element
// in arr[l..r] in worst case
// linear time. ASSUMPTION: ALL
// ELEMENTS IN ARR[] ARE DISTINCT
function kthSmallest(arr, l, r, k)
{

    // If k is smaller than
    // number of elements in array
    if (k > 0 && k <= r - l + 1)
    {
        let n = r - l + 1; // Number of elements in arr[l..r]

        // Divide arr[] in groups of size 5,
        // calculate median of every group
        // and store it in median[] array.
        let i;

        // There will be floor((n+4)/5) groups;
        let median = new Array(Math.floor((n + 4) / 5));
        for (i = 0; i < n / 5; i++)
            median[i] = findMedian(arr, l + i * 5, 5);

        // For last group with less than 5 elements
        if (i * 5 < n) 
        {
            median[i] = findMedian(arr, l + i * 5, n % 5);
            i++;
        }

        // Find median of all medians using recursive call.
        // If median[] has only one element, then no need
        // of recursive call
        let medOfMed = (i == 1) ? median[i - 1] :
            kthSmallest(median, 0, i - 1, Math.floor(i / 2));

        // Partition the array around a random element and
        // get position of pivot element in sorted array
        let pos = partition(arr, l, r, medOfMed);

        // If position is same as k
        if (pos - l == k - 1)
            return arr[pos];
        if (pos - l > k - 1) // If position is more, recur for left
            return kthSmallest(arr, l, pos - 1, k);

        // Else recur for right subarray
        return kthSmallest(arr, pos + 1, r, k - pos + l - 1);
    }

    // If k is more than number of elements in array
    return Integer.MAX_VALUE;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

// It searches for x in arr[l..r], and
// partitions the array around x.
function partition(arr, l, r, x) {
    // Search for x in arr[l..r] and move it to end
    let i;
    for (i = l; i < r; i++)
        if (arr[i] == x)
            break;
    swap(arr, i, r);

    // Standard partition algorithm
    i = l;
    for (let j = l; j <= r - 1; j++) {
        if (arr[j] <= x) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, r);
    return i;
}

// Driver code

let arr = [12, 3, 5, 7, 4, 19, 26];
let n = arr.length, k = 3;
document.write("K'th smallest element is "
    + kthSmallest(arr, 0, n - 1, k));

// This code has been contributed by Saurabh Jaiswal
