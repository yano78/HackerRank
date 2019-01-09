/**
 * Created by yano on 1/12/19.
 */

'use strict';


function freqQuery(queries) {
	let count = new Map();
	let freq = new Map();
	let result = [];
	let opr, num, prevNum, currNum;

	queries.forEach(function (arr) {
		opr = arr[0];
		num = arr[1];

		const countFreq = function (opr, num) {
			if (opr === 1 && !count[num]) {
				count[num] = 0;
			}
			if (opr === 2 && !count[num]) {
				return;
			}
			prevNum = count[num];
			switch(opr) {
				case 1:
					count[num]++;
					break;
				case 2:
					count[num]--;
					break;
			}
			currNum = count[num];
			if (freq[prevNum]) {
				freq[prevNum]--;
			}
			if (currNum > 0) {
				freq[currNum] = (freq[currNum] || 0) + 1;
			}
		};

		if (opr !== 3) {
			countFreq(opr, num)
		}
		else {
			result.push(freq[num] > 0 ? 1 : 0);
		}

/*		switch(opr) {
			case 1:
				prevNum = count[num];
				currNum = (count[num] || 0) + 1;
				count[num] = currNum;
				freq[prevNum] = (freq[prevNum] || 0) - 1;
				freq[currNum] = (freq[currNum] || 0) + 1;
				break;
			case 2:
				if (count[num]) {
					prevNum = count[num];
					currNum = count[num] - 1;
					count[num] = currNum;
					freq[prevNum] = (freq[prevNum] || 0) - 1;
					freq[currNum] = (freq[currNum] || 0) + 1;
				}
				break;
			case 3:
				result.push(freq[num] > 0 ? 1 : 0);
		}
*/	});
	return result;
}

function freqQuery1(queries) {
	const data = [];
	const resultArray = [];
	const frequency = {};
	for (let i = 0; i < queries.length; i++) {
		const operation = queries[i][0];
		const number = queries[i][1];
		if (operation === 1) { // insert
			const prevNumber = data[number];
			const currentNumber = (data[number] || 0) + 1;
			data[number] = currentNumber;
			frequency[prevNumber] = (frequency[prevNumber] || 0) - 1;
			frequency[currentNumber] = (frequency[currentNumber] || 0) + 1;
		} else if (operation === 2 && data[number]) { // delete
			const prevNumber = data[number];
			const currentNumber = (data[number] - 1);
			data[number] = currentNumber;
			frequency[prevNumber] = (frequency[prevNumber] || 0) - 1;
			frequency[currentNumber] = (frequency[currentNumber] || 0) + 1;
		} else if (operation === 3) { // check
			if (frequency[number] > 0) {
				resultArray.push(1);
			} else {
				resultArray.push(0);
			}
		}
	}
	return resultArray;
}

function main() {
	let queries, result;

	queries = [[1, 5],[1, 6],[3, 2],[1, 10],[1, 10],[1, 6],[2, 5],[3, 2]];
	result = freqQuery(queries);
	console.log(result);

	queries = [[3, 4],[2, 1003],[1, 16],[3, 1]];
	result = freqQuery(queries);
	console.log(result);

	queries = [[1, 3],[2, 3],[3, 2],[1, 4],[1, 5],[1, 5],[1, 4],[3, 2],[2, 4],[3, 2]];
	result = freqQuery(queries);
	console.log(result);

/**/
}

main();