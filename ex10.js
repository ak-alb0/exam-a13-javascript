function longueursMots(mots) {
	return mots.map(mot => mot.length);
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]