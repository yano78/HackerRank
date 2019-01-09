/**
 * Created by yano on 1/12/19.
 */

'use strict';


function checkMagazine(magazine, note) {
	let map = {};
	let result = true;

	for (let k of magazine) {
		map[k] = (map[k] || 0) + 1;
	}

	for (let k of note) {
		map[k] = (map[k] || 0) - 1;
	}

	for (let k in map) {
		if (map[k] < 0) {
			result = false;
			break;
		}
	}
	return(result ? 'Yes' : 'No');
}

function main() {
	let magazine, note, result;

	magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
	note = ['give', 'one', 'grand', 'today'];
	result =  checkMagazine(magazine, note);
	console.log(result);

	magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
	note = ['two', 'times', 'two', 'is', 'four'];
	result =  checkMagazine(magazine, note);
	console.log(result);

	magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
	note = ['ive', 'got', 'some', 'coconuts'];
	result =  checkMagazine(magazine, note);
	console.log(result);
}

main();