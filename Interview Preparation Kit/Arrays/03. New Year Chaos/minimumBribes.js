/**
 * Created by yano on 30/12/18.
 */

'use strict';


function minimumBribes(q) {
	let swaps = 0;

	for (let i = q.length - 1; i >= 0; i--) {
		if (q[i] - (i + 1) > 2) {
			return 'Too chaotic';
		}

		for (let j = Math.max(0, q[i] - 2); j < i; j++) {
			if (q[j] > q[i]) {
				swaps++;
			}
		}
	}

	return swaps;
}

function main(){
	let q, result;

	q = [2, 1, 5, 3, 4];
	result = minimumBribes(q);
	console.log(result);

	q = [2, 5, 1, 3, 4];
	result = minimumBribes(q)
	console.log(result);
}

main();


function _minimumBribes(q) {
	let swaps = 0;
	let min = q.length;
	for (var i = q.length - 1; i >= 0; i--){
		if (q[i] - i > 3){
			return `Too chaotic`;
		}
		if (q[i] > i+1){
			swaps += (q[i]-(i+1));
		} else {
			if (min > q[i]){
				min = q[i];
			} else if (q[i] != min){
				swaps++;
			}
		}
	}

	return swaps;
}