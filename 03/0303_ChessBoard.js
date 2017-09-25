
let height = 64;
let width = 64;


let tempString = "";

for(i=1; i<=height; i++) {
	if(i%2===0) {
		tempString="#";

	// console.log("Iteration: ", i, tempString);


		for(j=2; j<=width; j++) {
			if(j%2===0) {tempString+=" "}
			if(j%2!==0) {tempString+="#"}
		// console.log(j, tempString);
		};
	}

	else if(i%2!==0) {
		tempString=" ";
		for(j=2; j<=width; j++) {
			if(j%2===0) {tempString+="#"}
			if(j%2!==0) {tempString+=" "}

		};
	};
	
	console.log(tempString);
};







//Second Way

// let k=1;
// let evenOdd = "";

// while(k<height) {
// 	switch()
// }
