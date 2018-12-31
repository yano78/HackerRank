/**
 * Created by yano on 30/12/18.
 */

'use strict';

function rotLeft1(a, d) {
	while (d-- !== 0) {
		a.push(a.shift());
	}
	return a;
}

function rotLeft(a, d) {
	return a.concat(a.splice(0, d));
}

function main(){
	let a, d, result;

	a = [1, 2, 3, 4, 5];
	d = 4;
	result = rotLeft(a, d);
	console.log(result);

}

main();