/**
 * Created by yano on 30/12/18.
 */

'use strict';

function sockMerchant(n, ar) {
	let pairs = 0;
	let count = ar.reduce(function (acc, curr) {
		if (typeof acc[curr] == 'undefined') {
			acc[curr] = 1;
		} else {
			acc[curr] += 1;
		}
		return acc;
	}, {});

	console.log(count);
	for (const key in count) {
		pairs += (count[key] - (count[key] % 2)) / 2;
	}
	return pairs;
}

function main(){
	let n, ar, result;

	n = 9;
	ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
	result = sockMerchant(n, ar);

	console.log(result);
}

main();