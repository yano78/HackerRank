/**
 * Created by yano on 9/01/19.
 */

'use strict';


function maximumToys(prices, k) {

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