/*
var info = {
			"name":"M A Rafee",
			"twitter":"marafee1243",
			"createdOn":"24-Dec-2010 12:36 AM",
			"license":"OpenSource License",
			"comments":"Use it, Share it, Upgrade it at your own risk. Will extend those number soon",
			"usage":"just call spellNumber(43) function and get results as forty three"
		};
*/
var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = {
				'11':'eleven', 
				'12':'twelve', 
				'13':'thirteen', 
				'14':'fourteen', 
				'15':'fifteen', 
				'16':'sixteen', 
				'17':'seventeen', 
				'18':'eighteen', 
				'19':'nineteen'
			};
			
var tenths = {
				'0':'',
				'10':'ten', 
				'20':'twenty', 
				'30':'thirty', 
				'40':'forty', 
				'50':'fifty', 
				'60':'sixty', 
				'70':'seventy', 
				'80':'eighty', 
				'90':'ninety'
			};

var countDigits = function (n) {
	var c = '' + n + '';	// help : converting to string type
	return c.length;
};

var spellNumber = function (cD) {
	
	if (countDigits(cD) == 1) {
		return numbers[cD];
	}
	
	var s = '' + cD + '';	
	if (cD > 10 && cD < 20) {
		return teens[s];
	} 
	
	if (cD%10 == 0) {
		return tenths[s];
	}
	
	if(cD%10 != 0 && countDigits(cD) == 2) {
		
		var a = cD%10;
		var b = parseInt(cD/10) * 10;
		var c = '' + b + '';
		
		var secondDigitWord = tenths[c];
		var firstDigitWord = numbers[a];
		var totalNumberWord = secondDigitWord + ' ' + firstDigitWord;
		
		return totalNumberWord;
	}
	
};
