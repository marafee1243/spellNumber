/*
var info = {
			"name":"M A Rafee",
			"twitter":"marafee1243",
			"createdOn":"24-Dec-2010 12:36 AM",
			"license":"OpenSource License",
			"comments":"Use it, Share it, Upgrade it at your own risk. Will extend those number soon. 0-9999",
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

var getTenth = function (m) {
	
	var s = '' + m + '';	
	
	if (m%10 == 0) {
		return tenths[s];
	}
	
	if (m > 10 && m < 20) {
		return teens[s];
	} 
	
	if (countDigits(m) == 2 && m%10 != 0) {
		
		var a = m%10;
		var b = parseInt(m/10) * 10;
		var c = '' + b + '';
		
		var secondDigitWord = tenths[c];
		var firstDigitWord = numbers[a];
		var totalNumberWord = secondDigitWord + ' ' + firstDigitWord;
		
		return totalNumberWord;
	}
	
};

var getHundred = function (o) {
	
	if (o%100 == 0) {
		var oA = o/100;
		return numbers[oA] + ' hundred';
	}
	
	if (o%100 != 0) {
		var oB = parseInt(o/100);
		var oBString = numbers[oB] + ' hundred';
		
		var oC = parseInt(o%100);
		var oCString = '';
		if (oC <= 9) {
			oCString = numbers[oC];
		} else {
			oCString = getTenth(oC);
		}
		
		var oFinalString = oBString + ' ' + oCString;
		return oFinalString;
	}
	
	
};

var getThousand = function (p) {
	
	if (p%1000 == 0) {
		var pA = p/1000;
		return numbers[pA] + ' thousand';
	}
	
	if (p%1000 != 0) {
		var pB = parseInt(p/1000);
		var pBString = numbers[pB] + ' thousand';
		
		var pC = parseInt(p%1000);
		var pCString = '';
		if (countDigits(pC) == 1) {
			pCString = numbers[pC];
		} else if (countDigits(pC) == 2)  {
			pCString = getTenth(pC);
		} else {
			pCString = getHundred(pC);
		}
		
		var pFinalString = pBString + ' ' + pCString;
		return pFinalString;
	}
	
};

var spellNumber = function (cD) {
	
	if (countDigits(cD) == 1) {
		return numbers[cD];
	}
	
	if (countDigits(cD) == 2) {
		return getTenth(cD);
	}
	
	if (countDigits(cD) == 3) {
		return getHundred(cD);
	}
	
	if (countDigits(cD) == 4) {
		return getThousand(cD);
	}
	
};