
function setTheme(){
	setInterval(function(){

	var body = document.getElementById("body");
	var whiteBackground = document.getElementById("radio-1");
	var blackBackground = document.getElementById("radio-2");

	var firstPattern = document.getElementById("radio-1-pattern");
	var secondPattern = document.getElementById("radio-2-pattern");
	var thirdPattern = document.getElementById("radio-3-pattern");
	var fourthPattern = document.getElementById("radio-4-pattern");

	var red = document.getElementById("red-radio");
	var blue = document.getElementById("blue-radio");
	var black = document.getElementById("black-radio");
	var orange = document.getElementById("orange-radio");
	var green = document.getElementById("green-radio");
	var coral = document.getElementById("coral-radio");
	var purple = document.getElementById("purple-radio");

	if(red.checked == true){
		if(whiteBackground.checked == true){
			body.className = "red white-background";
		}else if(blackBackground.checked == true){
			body.className = "red black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "red first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "red second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "red third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "red fourth-pattern";
		}
	}else if(blue.checked == true){
		if(whiteBackground.checked == true){
			body.className = "blue white-background";
		}else if(blackBackground.checked == true){
			body.className = "blue black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "blue first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "blue second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "blue third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "blue fourth-pattern";
		}
	}else if(black.checked == true){
		if(whiteBackground.checked == true){
			body.className = "black white-background";
		}else if(blackBackground.checked == true){
			body.className = "black black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "black first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "black second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "black third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "black fourth-pattern";
		}
	}else if(orange.checked == true){
		if(whiteBackground.checked == true){
			body.className = "orange white-background";
		}else if(blackBackground.checked == true){
			body.className = "orange black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "orange first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "orange second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "orange third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "orange fourth-pattern";
		}
	}else if(green.checked == true){
		if(whiteBackground.checked == true){
			body.className = "green white-background";
		}else if(blackBackground.checked == true){
			body.className = "green black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "green first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "green second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "green third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "green fourth-pattern";
		}
	}else if(coral.checked == true){
		if(whiteBackground.checked == true){
			body.className = "coral white-background";
		}else if(blackBackground.checked == true){
			body.className = "coral black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "coral first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "coral second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "coral third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "coral fourth-pattern";
		}
	}else if(purple.checked == true){
		if(whiteBackground.checked == true){
			body.className = "purple white-background";
		}else if(blackBackground.checked == true){
			body.className = "purple black-background";
		}else if(firstPattern.checked ==  true){
			body.className = "purple first-pattern";
		}else if(secondPattern.checked ==  true){
			body.className = "purple second-pattern";
		}else if(thirdPattern.checked ==  true){
			body.className = "purple third-pattern";
		}else if(fourthPattern.checked ==  true){
			body.className = "purple fourth-pattern";
		}
	}
},1000);
}

