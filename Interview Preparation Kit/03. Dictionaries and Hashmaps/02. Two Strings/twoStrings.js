/**
 * Created by yano on 1/12/19.
 */

'use strict';


function twoStrings(s1, s2) {
	let chars = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let result = false;
	for (let i of chars) {
		if (s1.indexOf(i) > -1 && s2.indexOf(i) > -1) {
			result = true;
			break;
		}
	}
	return (result ? 'Yes' : 'No');
}

function main() {
	let s1, s2, result;

	s1 = 'hello world';
	s2 = 'hi world';
	result = twoStrings(s1, s2);
	console.log(result);
}

main();