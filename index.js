// Accept an array of dwarves and return the string with the numbered dwarves

var dwarfNames = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
  var numberedDwarves = [];
	var numberedDwarvesAsString;
	for (var i = 0; i < dwarves.length; i++) {
	  numberedDwarves.push(`${i + 1}. ${dwarves[i]} `);
		numberedDwarvesAsString = String(numberedDwarves);
	}
	return numberedDwarvesAsString.replace(/,/g,"");
}


// Accept an array of planeteer calls and then convert each element to uppercase and add an exclamation point at the end of every element

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function summonCaptainPlanet(planeteerCalls) {
  var planeteerCallsWithEmphasis = [];
	for (var i = 0; i < planeteerCalls.length; i++) {
		planeteerCallsWithEmphasis.push(`${planeteerCalls[i].toUpperCase()}!`);
	}
	return planeteerCallsWithEmphasis;
}


// Accept an array of calls, where the function returns true if any calls are longer than 4 characters. The function returns false if no calls are longer than 4 characters

var shortWords = ["wind", "fire"]
var assortedWords = ["earth", "wind", "heart", "fire"]

function longPlaneteerCalls(words) {
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > 4) {
		return true;
		}
	}
	return false;
}


// Accept an array of foods and return the first string that is a type of cheese that can be either cheddar, gouda or camembert. If the array of foods does not contain a type of cheese, it should return'no cheese'

snacks = ["crackers", "gouda", "thyme"]
soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"]
ingredients = ["garlic", "rosemary", "bread"]

function findTheCheese (foods) {
	for (var i = 0; i < foods.length; i++) {
		if (foods[i] === "cheddar") {
		return "cheddar";
		} else if (foods[i] === "gouda") {
		return "gouda";
		} else if (foods[i] === "camembert") {
		return "camembert";
		}
	}
	return "no cheese!";
}

// Function that should return an array of words from a word array that start with the letter 'b'

var words = ["blue", "black"]

function wordsWithB(wordArr) {
  var res = [];
  
  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i].charAt(0).toLowerCase() === "b") {
      res.push(wordArr[i]);
    }
  }
  return res;
}

