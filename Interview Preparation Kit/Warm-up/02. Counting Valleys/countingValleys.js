/**
 * Created by yano on 30/12/18.
 */

'use strict';

function countingValleys(n, s) {
	let valleys = 0, level = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'U') {
			level++;
		}
		if (s[i] === 'D') {
			level--
		}
		if (s[i] === 'U' && level === 0) {
			valleys++;
		}
	}
	return valleys;
}

function main(){
	let n, s, result;

	n = 8;
	s = "UDDDUDUU";
	result = countingValleys(n, s);

	console.log(result);
}

main();