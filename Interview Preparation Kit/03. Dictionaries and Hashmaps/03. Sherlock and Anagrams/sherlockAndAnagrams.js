/**
 * Created by yano on 1/12/19.
 */

'use strict';


function sherlockAndAnagrams(s) {
	let pairs = 0;
	let substrMap = new Map();
	let tmpStr;

	let l = s.length;
	for (let i = 0; i < l; i++) {
		for (let j = i; j < l; j++) {
			tmpStr = s.substring(i, j + 1).split('').sort().join('');
			substrMap[tmpStr] = (substrMap[tmpStr] || 0) + 1;
		}
	}
	for (let i in substrMap) {
		if (substrMap[i] > 1) {
			pairs = pairs + (substrMap[i] * (substrMap[i] - 1)) / 2;
		}
	}

	return pairs;
}

function main() {
	let s, result;

	s = 'abba';
	result = sherlockAndAnagrams(s);
	console.log(result);

	s = 'abcd';
	result = sherlockAndAnagrams(s);
	console.log(result);

	s = 'ifailuhkqq';
	result = sherlockAndAnagrams(s);
	console.log(result);

	s = 'kkkk';
	result = sherlockAndAnagrams(s);
	console.log(result);

	s = 'cdcd';
	result = sherlockAndAnagrams(s);
	console.log(result);
/* */
}

main();