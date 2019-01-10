/**
 * Created by yano on 9/01/19.
 */

'use strict';


function countSwaps(a) {
	let numSwaps = 0;
	let l = a.length;

	for (let i = 0; i < l; i++) {
		for (let j = 0; j < l - 1; j++) {
			if (a[j] > a[j + 1]) {
				let tmp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = tmp;
				numSwaps++;
			}
		}
	}

	console.log(`Array is sorted in ${numSwaps} swaps`);
	console.log(`First Element: ${a[0]}`);
	console.log(`Last Element: ${a[l - 1]}`);
}

function main() {
	let a, result;

	a = [1, 2, 3];
	result = countSwaps(a);
	console.log(result);

	a = [3, 2, 1];
	result = countSwaps(a);
	console.log(result);

	a = [4, 2, 3, 1];
	result = countSwaps(a);
	console.log(result);

/**/
}

main();