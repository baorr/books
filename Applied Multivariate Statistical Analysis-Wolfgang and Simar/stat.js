const sqrt = Math.sqrt;
const log = Math.log;
const exp = Math.exp;

const tanh = function(w){
	return (exp(w) - 1) / (exp(w) + 1);
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

let convariance = function(arrX, arrY){
	let lens = arrX.length;
	let mx = mean(arrX);
	let my = mean(arrY);
	let sum = 0;
	for(let i = 0;i < lens;i++){
		sum += (arrX[i] - mx) * (arrY[i] - my);
	}
	return lens ? sum/lens : 0;
};

let correlation = function(arrX, arrY){
	let vx = convariance(arrX, arrX);
	let vy = convariance(arrY, arrY);
	let cxy = convariance(arrX, arrY);
	
	return cxy/sqrt(vx * vy);
};

let fisherZtransformation = function(r){
	return log((1 + r)/(1 - r)) * 0.5;
};

let hotellingTransform = function(r, lens){
	let w = fisherZtransformation(r);
	let n = lens - 1;
	return w - (3 * w + tanh(w))/(4 * n);
};

let x = [230, 181, 165, 150, 97, 192, 181, 189, 172, 170];
let y = [125, 99, 97, 115, 120, 100, 80, 90, 95, 125];
let z = [109, 107, 98, 71, 82, 103, 111, 93, 86, 78];

console.log(convariance(x, y));
console.log(correlation(x, y));

let r14 = correlation(x, z);
console.log(r14);

x = [22,17,22,17,23,25,20,15,18,26,20,16,19,14,14,21,29,16,22,22,24,19,23,35,24,21,30,18,16,17,21,28,21,25,28,12,12,14,30,22,14,14,15,18,20,21,19,19,18,19,24,16,14,28,34,25,26,18,18,18,19,19,19,24,26,35,18,31,18,25,41,25,23,17];
y = [2930,3350,2640,2830,2070,2650,3250,4080,3670,2230,3280,3880,3400,4330,3900,4290,2110,3690,3180,3220,2750,3430,2370,2020,2280,2750,2120,3600,3870,3740,2130,1800,2650,2240,1760,4840,4720,3830,1980,2580,4060,4130,3720,3370,2830,4060,3300,3310,3690,3370,2720,4030,3420,2360,1800,2200,2520,3330,3700,3470,3210,3200,3420,2690,1830,2050,2410,2200,2670,1930,2040,1990,2160,3170];


let r28 = correlation(x, y);
console.log(r28);

console.log(fisherZtransformation(r28));

console.log(hotellingTransform(r28, 74));


