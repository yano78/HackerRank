/**
 * Created by yano on 30/12/18.
 */

'use strict';

function hourglassSum(arr) {
	let maxSum = -Infinity,
		tmpSum;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			if (i + 2 < 6 && j + 2 < 6) {
				tmpSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
				if (tmpSum > maxSum) {
					maxSum = tmpSum;
				}
			}
		}
	}
	return maxSum;
}

function main(){
	let arr, result;

	arr = [[1, 1, 1, 0, 0, 0],
		[0, 1, 0, 0, 0, 0],
		[1, 1, 1, 0, 0, 0],
		[0, 0, 2, 4, 4, 0],
		[0, 0, 0, 2, 0, 0],
		[0, 0, 1, 2, 4, 0]];
	result = hourglassSum(arr);
	console.log(result);

	arr = [[1, 1, 1, 0, 0, 0],
		[0, 1, 0, 0, 0, 0],
		[1, 1, 1, 0, 0, 0],
		[0, 9, 2, -4, -4, 0],
		[0, 0, 0, -2, 0, 0],
		[0, 0, -1, -2, -4, 0]];
	result = hourglassSum(arr);
	console.log(result);

	arr = [[-9, -9, -9, 1, 1, 1],
		[0, -9, 0, 4, 3, 2],
		[-9, -9, -9, 1, 2, 3],
		[0, 0, 8, 6, 6, 0],
		[0, 0, 0, -2, 0, 0],
		[0, 0, 1, 2, 4, 0 ]];
	result = hourglassSum(arr);
	console.log(result);
}

main();