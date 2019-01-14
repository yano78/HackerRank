/**
 * Created by yano on 10/01/19.
 */

'use strict';


function activityNotifications_timeOut(expenditure, d) {
	let notifications = 0;

	Array.prototype.median = function () {
		// 1 case => [1, 2, 3, 4, 5] => median = 3
		// 2 case => [1, 2, 3, 4] => median = (2+3)/2 = 2.5

		let arr = this.map( a => a).sort( (a, b) => a - b );
		let l = arr.length;

		if (l % 2 == 1) {
			return arr[Math.ceil(l / 2) - 1];
		}
		else {
			return (arr[(l / 2) - 1] + arr[(l / 2)]) / 2;
		}
	};

	for (let i = 0; i < expenditure.length - d; i++) {
		let m = expenditure.slice(i, i + d).median();
		if (expenditure[i + d] >= m * 2) {
			notifications++;
		}
	}

	return notifications;
}

function activityNotifications(expenditure, d) {
	let notifications = 0;
	let l = expenditure.length;

	let x1 = Math.floor((d - 1) / 2);
	let x2 = Math.ceil((d - 1) / 2);

	let median;

	let freq = new Array(201);
	freq.fill(0);

	for (let i = 0; i < d; i++) {
		freq[expenditure[i]]++;
	}

	let findMid = function(x) {
		let mid;

		for (let j = 0, k = 0; k <= x; k += freq[j], j++) {
			mid = j;
		}

		return mid;
	};

	for (let i = d; i < l; i++) {
		median = (findMid(x1) + findMid(x2)) / 2;

		if (expenditure[i] >= median * 2) {
			notifications++;
		}

		freq[expenditure[i - d]]--;
		freq[expenditure[i]]++;
	}

	return notifications;
}

function main() {
	let expenditure, d, result;


	expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
	d = 5;
	result = activityNotifications(expenditure, d);
	console.log(result);

	expenditure = [1, 2, 3, 4, 4];
	d = 4;
	result = activityNotifications(expenditure, d);
	console.log(result);

	expenditure = [10, 20, 30, 40, 50];
	d = 3;
	result = activityNotifications(expenditure, d);
	console.log(result);

	/**/
}

main();