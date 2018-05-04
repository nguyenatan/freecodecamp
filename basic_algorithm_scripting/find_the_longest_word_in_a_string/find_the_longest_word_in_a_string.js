var myName = "Nguyen A Tan";

function findLongestWord(str) {
  	str = str.split(' ');
  
  	if (str.length == 1)
    		return str[0].length;
  
  	if (str[0].length >= str[1].length) {
    		str.splice(1, 1);
    		return findLongestWord(str.join(' '));
  	}
  
  	if (str[0].length < str[1].length) {
    		return findLogestWord(str.slice(1, str.length).join(' '));
  	}
}

console.log(findLongestWord(myName));

/*
var heroes = "Meepo,Juggernaut.Slark_Luna<Rubick>Invoker";

function findLongestWord(str) {
	return str.split(/[,._<>]/)
		.reduce((a, b) => Math.max(a, b.length), 0);
}

console.log(findLongestWord(heroes));
*/
