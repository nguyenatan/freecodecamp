function factorialize(num) {
	for (fact = 1; num > 0; --num)
		fact *= num;
  
  	return fact;
}

var result = factorialize(5);
console.log(result);
