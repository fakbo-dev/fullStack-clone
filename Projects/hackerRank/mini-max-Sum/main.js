function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    let result = 0;
    let final;
    for (let i = 0; i < arr.length; i++) {
        if (min < arr[i]) {
            min = arr[i];
        } else if (max > arr[i]) {
            max = arr[i];
        }
        result += arr[i];
        const minResult = result - min;
        const maxResult = result - max;
        final = `${minResult} ${maxResult}`;
    }
    console.log(final);

}