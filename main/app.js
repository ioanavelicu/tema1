const distance = (a, b) => {
	//TODO: implementați funcția
	// TODO: implement the function

	if (Object.prototype.toString.apply(a).replace(/\[object (.+)\]/i, '$1').toLowerCase() != "string" ||
		Object.prototype.toString.apply(b).replace(/\[object (.+)\]/i, '$1').toLowerCase() != "string") {
			throw new Error ("InvalidType")
	} else {
		if (a.length == 0) {
			return b.length
		}
	
		if (b.length == 0) {
			return a.length
		}

		const mat = []
		
		for (let i = 0; i <= b.length; i += 1) {
			mat[i] = [i];
		}
		for (let j = 0; j <= a.length; j += 1) {
			mat[0][j] = j;
		 }

		 for (let i = 1; i <= b.length; i++) {
			for (let j = 1; j<= a.length; j++) {
				if (b.charAt(i - 1) == a.charAt(j - 1)) {
					mat[i][j] = mat[i-1][j-1]
				} else {
					mat[i][j] = Math.min(mat[i - 1][j -1] + 1, Math.min(mat[i][j - 1] + 1, mat[i - 1][j] + 1))
				}
			}
		}

		return mat[b.length][a.length]
	}
}


module.exports.distance = distance