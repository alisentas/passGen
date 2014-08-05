var passGen = function(length,isReadable,hasLetter,hasNumber,hasUpperCase,hasPunctuation) {
    //password
    var password = "";
	//Declaring function parameters as number and boolean values
	var length = length;
	var isReadable = isReadable;
	var hasLetter = hasLetter;
	var hasNumber = hasNumber;
	var hasUpperCase = hasUpperCase;
	var hasPunctuation = hasPunctuation;
	//Declaring characters
	var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","y","z","x","q","w"];
	var consonants_length = consonants.length;
	var vowels = ["a","e","i","o","u"];
	var vowels_length = vowels.length;
	var numbers = [0,1,2,3,4,5,6,7,8,9];
	var numbers_length = numbers.length;
	var punctuation = ["!","+","%","&","(",")","=","?","_","-","*","-","#","$","½","{","[","]","}",",",".","<",">"];
	var punctuation_length = punctuation.length;
	//Generating part
	if(isReadable === true) {
		var isPreviousVowel = false;
		var isPreviousConsonant = false;
		var isPreviousConsonantx2 = false;
		var randNumber = Math.floor(Math.random()*2);
		if(randNumber === 1){
			isPreviousVowel = true;
		}else{
			isPreviousConsonant = true;
		}
		for(var i = 0; i < length; i++){
			//If previous letter is a vowel, add consonant
			if(isPreviousVowel){
				randNumber = Math.floor(Math.random() * consonants_length);
				password += consonants[randNumber];
				isPreviousVowel = false;
				isPreviousConsonant = true;
				isPreviousConsonantx2 = false;
			//if previous letter is a consonant, add consonant or vowel
			}else if(isPreviousConsonant){
				randNumber = Math.floor(Math.random() * 2);
				if(randNumber === 0){
					randNumber = Math.floor(Math.random() * consonants_length);
					password += consonants[randNumber];
					isPreviousVowel = false;
					isPreviousConsonant = false;
					isPreviousConsonantx2 = true;
				}else{
					randNumber = Math.floor(Math.random() * vowels_length);
					password += vowels[randNumber];
					isPreviousVowel = true;
					isPreviousConsonant = false;
					isPreviousConsonantx2 = false;
				}
			//If preious letter is a doubled consonant, add vowel
			}else if(isPreviousConsonantx2){
				randNumber = Math.floor(Math.random() * vowels_length);
				password += vowels[randNumber];
				isPreviousVowel = true;
				isPreviousConsonant = false;
				isPreviousConsonantx2 = false;
			}
		}
		var passNew = password;
		if(hasUpperCase){
			var passlength = passNew.length;
			for(i = 0; i < passlength; i++){
				randNumber = Math.floor(Math.random() * 2);
				if(randNumber === 1){
					passNew[i] = passNew[i].toUpperCase();
				}
			}
		}
	}
	else{
		var chars = [];
		var letters = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","y","z","x","q","w","a","e","i","o","u"];
		var letters_length = letters.length;
		if(hasNumber){
			chars.push(0,1,2,3,4,5,6,7,8,9);
		}
		if(hasPunctuation){
			chars.push("!","+","%","&","(",")","=","?","_","-","*","-","#","$","½","{","[","]","}",",",".","<",">");
		}
		var chars_length = chars.length;
		
		if(!hasLetter && !hasNumber && !hasPunctuation){
			return "Cannot create a password, you should choose at least one password characters";
		}else{
			for(var y = 0; y < length; y++){
				var passchar;
				var randNumber = Math.floor(Math.random() * 2);
				if(hasLetter && !hasNumber && !hasPunctuation){
					randNumber = Math.floor(Math.random() * letters_length);
					passchar = letters[randNumber];
					randNumber = Math.floor(Math.random() * 2);
					if(hasUpperCase && randNumber === 0){
						passchar = passchar.toUpperCase();
					}
					password += passchar;
				}else if(hasLetter && randNumber === 1){
					randNumber = Math.floor(Math.random() * letters_length);
					passchar = letters[randNumber];
					randNumber = Math.floor(Math.random() * 2);
					if(hasUpperCase && randNumber === 0){
						passchar = passchar.toUpperCase();
					}
					password += passchar;
				}else{
					randNumber = Math.floor(Math.random() * chars_length);
					var passchar = chars[randNumber];
					password += passchar;
				}
			}
		}
	}
    return password;
};