/**
 * Created by yano on 30/12/18.
 */

'use strict';

function repeatedString(s, n) {
	const count = (str) => str.split('').filter( char => char === 'a').length;

	const s1 = Math.floor(n / s.length);
	const s2 = n - (s.length * s1);

	return s1 * count(s) + count(s.substr(0, s2));
}

function main(){
	let s, n, result;

	s = 'aba';
	n = 10;
	result = repeatedString(s, n);
	console.log(result);

	s = 'a';
	n = 1000000000000;
	result = repeatedString(s, n);
	console.log(result);
}

main();