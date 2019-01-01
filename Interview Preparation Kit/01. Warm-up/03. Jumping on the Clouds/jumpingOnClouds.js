/**
 * Created by yano on 30/12/18.
 */

'use strict';

function jumpingOnClouds(c) {
	let jumps = -1;
	for (let i = 0; i < c.length; i++, jumps++) {
		if (c[i + 2] == 0) {
			i++;
		}
	}

	return jumps;
}

function main(){
	let c, result;

	c = [0, 0, 1, 0, 0, 1, 0];
	result = jumpingOnClouds(c);

	console.log(result);
}

main();