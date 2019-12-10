const jb = { 'A': 1, 'B.A': 2, 'B.B': 3, 'CC.D.E': 4, 'CC.D.F': 5 };
let keysArr = [];
let tempArr = [];
for (var key in jb) {

	// alert(key); //json对象的key  
	let tempArr = key.split('.')
	// alert(jb[key]); //json对象的值  
	keysArr.push(tempArr)
}
console.log(keysArr);
keysArr.map((a, index) => {
	if (index === 0)tempArr.push(a)
	for(let i=0; i<a.length;i++){
		if(a[i] === keysArr[i[i]]){

		}
	}
})
console.log(tempArr);
let a = {
	'A': 1,
	'B': {
		'A': 2,
		'B': 3
	},
	'CC': {
		'D': {
			'E': 4,
			'F': 5,
		},
	},
}
