// Password Generator Algorithm by alisentas

var passGen = function(opts){
	/**
	 * opts object's structure:
		opts = {
	    	length: 	 int  (required),
			readable: 	 bool (default=false),
			letter: 	 bool (default=true),
			number: 	 bool (default=true),
			upperCase: 	 bool (default=true),
			specialChar: bool (default=true)
		}
		*/
	// Decleare every required variables
	var password = "",
	passwordSplit,
	length = opts.length,
	readable = opts.readable || false,
	letter = opts.letter == undefined ? true : opts.letter,
	number = opts.number == undefined ? true : opts.number,
	upperCase = opts.upperCase == undefined ? true : opts.upperCase,
	specialChar = opts.specialChar == undefined ? true : opts.specialChar,
	letters = {
		// letter object, contains both consonants and vowels
		// consonants and vowels are seperated because of the readability option
		consonants: "bcdfghjklmnpqrstvwxyz",
		vowels: "aeiou",
	},
	numbers = [0,1,2,3,4,5,6,7,8,9],
	specialChars = ["!","+","%","&","(",")","=","?","_","-","*","-","#","$","�","{","[","]","}",",",".","<",">"],
	prevVowel = false, prevConso = false, prevConsox2 = false,// these variables are for readability part
	i, chars;

	if(readable){
		// What we do here is this, if the password ends with a vowel, we can add a consonant,
		// if the password ends with a consonant, we can add a vowel or a consonant,
		// if the password ends with double consonant, we should add a vowel
		if(Math.floor(Math.random() * 2)){
			prevVowel = true;
		}else{
			prevConso = true;
		}
		for (i = 0; i < length; i++) {
			if(prevVowel){
				password += letters.consonants[Math.floor(Math.random() * letters.consonants.length)];
				prevVowel = false;
				prevConso = true;
				prevConsox2 = false;
			}else if(prevConso){
				if(Math.floor(Math.random) * 2){
					password += letters.vowels[Math.floor(Math.random() * letters.vowels.length)];
					prevVowel = true;
					prevConso = false;
					prevConsox2 = false;
				}else{
					password += letters.consonants[Math.floor(Math.random() * letters.consonants.length)];
					prevVowel = false;
					prevConso = false;
					prevConsox2 = true;
				}
			}else{
				password += letters.vowels[Math.floor(Math.random() * letters.vowels.length)];
				prevVowel = true;
				prevConso = false;
				prevConsox2 = false;
			}
		}
		if(upperCase){
			passwordSplit = password.split("");
			for(i in passwordSplit){
				if(Math.floor(Math.random() * 2)){
					passwordSplit[i] = passwordSplit[i].toUpperCase();
				}
			}
			password = passwordSplit.join("");
		}
	}else{
		chars = []; // character holder array for our passwords
		if(letter) chars = chars.concat(letters.consonants.split(""), letters.vowels.split(""));
		if(number) chars = chars.concat(numbers);
		if(specialChar) chars = chars.concat(specialChars);
		for (i = 0; i < length; i++) {
			password += chars[Math.floor(Math.random() * chars.length)];
		}
		if(upperCase){
			passwordSplit = password.split("");
			for(i in passwordSplit){
				if(Math.floor(Math.random() * 2)){
					passwordSplit[i] = passwordSplit[i].toUpperCase();
				}
			}
			password = passwordSplit.join("");
		}
	}

	return password;
};
