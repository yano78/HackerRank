/**
 * Created by yano on 20/01/19.
 */

'use strict';


function countInversions(arr) {
	let inversions = 0;

	const mergeSort = function(arr) {
		if (arr.length === 1) {
			return arr;
		}
		const mid = Math.floor(arr.length / 2);
		const left = arr.slice(0, mid);
		const right = arr.slice(mid);

		return merge(mergeSort(left), mergeSort(right));
	};

	const merge = function(left, right) {
		let result = [];
		let iLeft = 0;
		let iRight = 0;

		while (iLeft < left.length && iRight < right.length) {
			if (left[iLeft] > right[iRight]) {
				result.push(right[iRight]);
				iRight++;
				inversions += left.length - iLeft;
			}
			else {
				result.push(left[iLeft]);
				iLeft++;
			}
		}

		return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
	};

	let result = mergeSort(arr);
	return inversions;
}

function main() {
	let arr, result;

	arr = [1,1,1,2,2];
	result = countInversions(arr);
	console.log(result);

	// [ 1, 1, 1, 2, 2 ]
	// [ 2, 1, 3, 1, 2 ]
	arr = [2, 3, 4, 2, 3, 6, 8, 4, 5];
	result = countInversions(arr);
	console.log(result);

	// [ 1, 5, 3, 7 ]
	// [ 7, 5, 3, 1 ]
	arr = [1, 2, 3, 4, 4];
	result = countInversions(arr);
	console.log(result);

	// [ 1, 3, 5, 7 ]
	// [ 3, 2, 1 ]
	arr = [10, 20, 30, 40, 50];
	result = countInversions(arr);
	console.log(result);

	/**/
}

main();