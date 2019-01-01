/**
 * Created by yano on 30/12/18.
 */

'use strict';

function arrayManipulation(n, queries) {
	let zeroArr = new Array(n + 1).fill(0);

	for (let i = 0; i < queries.length; i++) {
		zeroArr[queries[i][0] - 1] += queries[i][2];
		zeroArr[queries[i][1]] -= queries[i][2];
	}

	let max = 0, tmpMax = 0;

	for (let i = 0; i < zeroArr.length; i++) {
		tmpMax += zeroArr[i];
		max = Math.max(max, tmpMax);
	}

	return max;
}

function main(){
	let n, queries, result;

	n = 5;
	queries = [[ 1, 2, 100], [2, 5, 100], [3, 4, 100]];
	result = arrayManipulation(n, queries);
	console.log(result);

	n = 10;
	queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];
	result = arrayManipulation(n, queries);
	console.log(result);

	n = 10;
	queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
	result = arrayManipulation(n, queries);
	console.log(result);
}

main();