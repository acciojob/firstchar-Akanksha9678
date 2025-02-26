function firstChar(text) {
  // your code here
	let firstcharacter=text.trim();
	if(firstcharacter!==" "){
		return firstcharacter[0];
	}
	else{
		return 0;
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
