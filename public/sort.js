function sort(array) {
	let aCount = new Array(100);
	let bCount = new Array(100);
	for (let i = 0; i < 100; i++) {
		aCount[i] = 0;
		bCount[i] = 0;
	};

	for (let i = 0; i < array.length; i++) {
		if (array[i] >= 0) {
			++aCount[array[i]];
		} else {
			++bCount[-array[i]];
		}
	}
	let index = 0;
	let temp = new Array();
	for (let i = 0; i < 100; i++) {
		for (let j = 0; j < aCount[i]; j++) {
			temp[index] = i;
			index++;
		}
	}
	temp.reverse();
	for (let i = 0; i < 100; i++) {
		for (let j = 0; j < bCount[i]; j++) {
			temp[index] = -i;
			index++;
		}
	}
	console.log(temp)
}

sort([6, 4, -3, 5, -2, -1, 0, 1, -9]);