const floor = Math.floor;
const ceil = Math.ceil;

/*private function*/
let genRatio = (lens, ratio) => {

	let temp = lens * ratio;
	let results = [];

	if(floor(temp) === ceil(temp)){
		results = [ceil(temp)];
	}else{
		results = [ceil(temp), floor(temp)];
	}

	return results;
};

let computedRatio = (arr, position) => {
	var lens = position.length;
	var res = 0;
	for(let i = 0;i < lens;i++){
		let flag = position[i];
		res += arr[flag];
	}

	return lens ? (res/lens) : 0;
};


/*export function*/
let mean = function(arr){
	let lens = arr.length;
	let sum = 0;
	for(let i = 0;i < lens;i++){
		sum += arr[i];
	}
	return lens ? sum/lens : 0;
};

let dataPosition = function(arr){
	let lens = arr.length - 1;
	let median = genRatio(lens, 0.5);
	let quarter = genRatio(lens, 0.25);
	let threeQuarter = genRatio(lens, 0.75);

	return {
		quarter: quarter,
		median: median,
		threeQuarter: threeQuarter
	}
}; 

let quarterify = function(arr){
	let positions = dataPosition(arr);

	let quarter = computedRatio(arr, positions.quarter);
	let median = computedRatio(arr, positions.median);
	let threeQuarter = computedRatio(arr, positions.threeQuarter);

	return {
		quarter: quarter,
		median: median,
		threeQuarter: threeQuarter
	};
};

let boxplot = function(arr){
	let m = mean(arr);
	let sets = quarterify(arr);

	let quarter = sets.quarter;
	let median = sets.median;
	let threeQuarter = sets.threeQuarter;

	let df = 1.5*(threeQuarter - quarter);
	return {
		mean: m,
		quarter: quarter,
		median: median,
		threeQuarter: threeQuarter,
		FL: quarter - df,
		FU: threeQuarter + df
	}
};


let arr = [778,355,248,200,167,94,94,88,76,75,74,74,70,68,63];
arr.sort((a, b) => {
	return a - b;
});

console.log(boxplot(arr));

module.exports = {
	boxplot: boxplot
};