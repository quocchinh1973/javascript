function SangSoNguyenTo(N) {
	var check = [];

	for(i=2; i<=N; i++)
		check[i] = true ;

	for(i=2; i<=N; i++ ) 
		if (check[i]) {
			for(j=2*i; j<=N; j+=i)
				if (check[j]) check[j] = false;
						
	}	

	var result = ""
	
	for(i=1; i<=N; i++)
		if (check[i]) {
			result += String(i);
			result += " ";
			}

	return result;		

}

console.log(SangSoNguyenTo(1000));