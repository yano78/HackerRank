/**
 * Created by yano on 9/01/19.
 */

'use strict';


function maximumToys(prices, k) {
	let maxToys = 0;
	let sum = 0;

	prices.sort( (a, b) => a > b ? 1 : -1 );

	for (let i = 0; i < prices.length; i++) {
		if (sum + prices[i] <= k) {
			sum = sum + prices[i];
			maxToys++;
		}
	}

	return maxToys;
}

function main() {
	let prices, k, result;

	prices = [1, 12, 5, 111, 200, 1000, 10];
	k = 50;
	result = maximumToys(prices, k);
	console.log(result);

	prices = [1, 2, 3, 4];
	k = 7;
	result = maximumToys(prices, k);
	console.log(result);

	prices = [3, 7, 2, 9, 4];
	k = 15;
	result = maximumToys(prices, k);
	console.log(result);

	/**/
}

main();