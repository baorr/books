const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('./datasets/pullover.dat');

let datas = [];
let datas2 = [];
let datas4 = [];
let datas8 = [];

lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	if(line){
		let l = line.trim().replace(/(\r\n|\n|\r|)/g,"").replace(/(\s+)/g,",").split(',');
		datas.push(l[0]);
		datas2.push(l[1]);
		datas4.push(l[3]);
		l[7] && datas8.push(l[7]);
	}
});

lr.on('end', function () {
	console.log(`[${datas.join(',')}]`);
	console.log(`[${datas2.join(',')}]`);
	console.log(`[${datas4.join(',')}]`);
	console.log(`[${datas8.join(',')}]`);
});