const cos = Math.cos;
const sin = Math.sin;
const SQRT2 = Math.sqrt(2);

const genAndrewsCurves = function(x){
	let lens = x.length;
	const constant = x[0]/SQRT2;    

	return function(t){
        let sum = constant + x[1] * sin(t) + x[2] * cos(t);
        let temp = null;
		for(let i = 3;i < lens;i++){
            temp = i + 1;
            if(temp % 2){
               temp = x[i] * cos(i/2 * t);
            }else{
               temp = x[i] * sin(temp/2 * t);
            }
            sum += temp;
        }
	    return sum;
	};

};


let r = genAndrewsCurves([215.6,129.9,129.9,9.0,9.5,141.7]);
console.log(r(Math.PI/4));