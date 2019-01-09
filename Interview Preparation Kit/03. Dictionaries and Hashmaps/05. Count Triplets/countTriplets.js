/**
 * Created by yano on 1/12/19.
 */

'use strict';


function countTriplets(arr, r) {
	let triplets = 0;
	let trackMap = new Map();
	let countMap = new Map();

	arr.forEach( function (v) {
		if (countMap.hasOwnProperty(v)) {
			triplets += countMap[v];
		}
		if (trackMap.hasOwnProperty(v)) {
			countMap[v * r] = (countMap[v * r] += trackMap[v]) || trackMap[v];
		}
		trackMap[v * r] = (trackMap[v * r] += 1) || 1;
	});

	return triplets;
}

function main() {
	let arr, r, result;

	arr = [1, 2, 2, 4];
	r = 2;
	result = countTriplets(arr, r);
	console.log(result);

	arr = [1, 3, 9, 9, 27, 81];
	r = 3;
	result = countTriplets(arr, r);
	console.log(result);

	arr = [1, 5, 5, 25, 125];
	r = 5;
	result = countTriplets(arr, r);
	console.log(result);
}

main();