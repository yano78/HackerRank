/**
 * Created by yano on 30/12/18.
 */

'use strict';

function minimumSwaps(arr) {
	let swaps = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== i + 1) {
			let t = arr[i];
			arr[i] = arr[t - 1];
			arr[t - 1] = t;
			swaps++;
			i = 0;
		}
	}
	return swaps;
}

function main(){
	let arr, result;

	arr = [4, 3, 1, 2];
	result = minimumSwaps(arr);
	console.log(result);

	arr = [2, 3, 4, 1, 5];
	result = minimumSwaps(arr);
	console.log(result);

	arr = [1, 3, 5, 2, 4, 6, 7];
	result = minimumSwaps(arr);
	console.log(result);
}

main();