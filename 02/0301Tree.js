


for(i=0; i<8; i++) {
	// console.log("I:", i);
	for(j=0; j<i; j++) {
		// console.log("J:", j);
		// console.log("#");
		process.stdout.write("#");
	};
	console.log();
};




for(i=0; i<8; i++) {
	let tempString = "";
	for(j=0; j<i; j++) {
		tempString = tempString + "#"
	};
	console.log(tempString);
};


