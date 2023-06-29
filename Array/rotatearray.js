function rotate(arr,n){
    let temp = arr[n-1];
     for(let i = n-1; i > 0 ; i--){
        //  console.log(arr[i],arr[i-1], i);
         arr[i] = arr[i-1];
     }
     arr[0] = temp;
     console.log(arr);
     return arr;
}

rotate([1, 2, 3, 4, 5], 5);

