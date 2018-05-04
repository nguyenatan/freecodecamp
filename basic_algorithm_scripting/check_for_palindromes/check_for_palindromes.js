function isPalindrome(str) {
	let left = 0;
  	let right = str.length - 1;
  
  	while (left < right) {
    		while (str[left].match(/[\W_]/)) {
      			++left;
      			continue;
    		}
    
    		while (str[right].match(/[\W_]/)) {
      			--right;
      			continue;
   		}
    
    		if (str[left].toLowerCase() !== str[right].toLowerCase())
      			return false;
    
    	++left;
    	--right;
	}
  
  	return true;
}

var result = isPalindrome("n!a@t#a%n_");
console.log(result);
