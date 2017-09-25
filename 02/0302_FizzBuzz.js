for(i=1; i<=100; i++) {
	if((i%3===0) && (i%5===0)){
		console.log("FizzBuzz");
	}
	else if(i%3===0) {
		console.log("Fizz");
	}
	else if(i%5===0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	};
};




let j=1;

while(j<=100) {
	let setFB = 0;

	if(j%3===0) {setFB = 1};
	if(j%5===0) {setFB = 2};
	if((j%3===0) && (j%5===0)) {setFB=3};

	// console.log(setFB);
	switch(setFB) {
		case 1:
			console.log("Fizz");
			j++;
			break;
		case 2:
			console.log("Buzz");
			j++;
			break;
		case 3:
			console.log("FizzBuzz");
			j++;
			break;
		default:
			console.log(j);
			j++;
			break;
	};
};