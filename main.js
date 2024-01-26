// # Exercices d'algorithme

// ## Exercice 1.

// Écrivez une fonction qui prend un parametre qui vérifie si ce parametre est un nombre qui retourne vrai si c'est un nombre et faux dans le cas contraire. Vous devez utiliser [isNaN()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN) au sein de cette fonction.

// function f(num) {
//     return !isNaN(num)
// }

// console.log(f(2));
// console.log(f("test"));




// ## Exercice 2.

// Écrivez une fonction qui prend un parametre qui vérifie si ce parametre est un booleen qui retourne vrai si c'est un booleen et faux dans le cas contraire. Vous devez utiliser `typeof` au sein de cette fonction;

// function f(a){
//     if(typeof(a) == "boolean") {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(f(true));



// ## Exercice 3.

// Corriger la fonction suivante pour qu'elle retourne false.
// Droit qu'à modifier l'opérateur d'égalité

// function checkEqual(a,b){
//     return a === b;
// }

// checkEqual(5,"5");




// ## Exercice 4.

// Corriger la fonction suivante pour qu'elle retourne true

// function checkAge(a){
//     return a > 10;
// }

// checkAge(12);





// ## Exercice 5

// Completez la fonction suivante pour qu'elle retourne false. Vous devez utilisez un opérateur de négation

// function isNotAdmin(a){
//     if(a !== false) {
//         return false;
//     }
// }
// isNotAdmin(true);




// ## Exercice 6

// Écrivez une fonction JavaScript appelée `sommeChiffres` qui prend un tablau de nombres entier en entrée et retourne la somme de ses chiffres. Par exemple, si l'entrée est `[1, 2, 3]`, la fonction devrait retourner 6 (car 1 + 2 + 3 = 6).

// Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.

// function sommeTableau(chiffres) {
//     let temp = chiffres[0];
//     for(let i = 1; i<chiffres.length; i++) {
//         temp += chiffres[i];
//     }
//     return temp;
// }

// sommeTableau([1, 2, 3])




// ## Exercice 7 

// Écrivez une fonction JavaScript appelée `plusGrand` qui prend un tableau de nombres en entrée et retourne le plus grand nombre du tableau.

// Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.

// function plusGrand(tableau) {
//     let temp = tableau[0];
//     for(let i = 1; i<tableau.length; i++) {
//         if(tableau[i] > temp) {
//             temp = tableau[i];
//         }
//     }
//     return temp;
// }

// plusGrand([3, 2, 6, 1, 4])



// ## Exercice 8

// Écrivez une fonction JavaScript appelée `trouverPlusLongMot` qui prend une chaîne de caractères (une phrase) en entrée et retourne le mot le plus long dans la phrase. Un mot est défini comme une série de caractères séparés par des espaces.

// Vous devez utiliser des boucles `for`.

// function trouverPlusLongMot(phrase) {
//     let newArr = phrase.split(' ');
//     let temp = newArr[0]
//     for(let i = 1; i<newArr.length; i++){
//         if(temp.length < newArr[i].length) {
//             temp = newArr[i]
//         }
//     }
//     return temp;
// }

// trouverPlusLongMot("Ceci est une super phrase de test") // Retourne phrase


// ## Exercice 9

// Écrivez une fonction JavaScript appelée triCroissant qui prend un tableau de nombres en entrée et retourne le tableau trié par ordre croissant.

// Vous devez utiliser des boucles `for`.

// function triCroissant(tableau) {
//     let tab = tableau[0].split(",")
//     let newArr = [];

//     for(let i = tab.length; i != 0; i--) {
//         let temp = tab[0];
//         for(let j = 1;j<tab.length;j++){
//             if(parseInt(tab[j]) < parseInt(temp)){
//                 temp = tab[j]
//             }
//         }
//         let index = tab.indexOf(temp)
//         tab.splice(index,1)
//         newArr.push(temp)
//     }
//     console.log(newArr);
// }

// triCroissant(["3, 2, 5, 6, 1"]) // retourne [1, 2, 3, 5, 6]


// ## Exercice 10

// Écrivez une fonction JavaScript appelée `inverserTableau` qui prend un tableau en entrée et retourne un nouveau tableau contenant les éléments du tableau d'origine dans l'ordre inverse. Par exemple, si le tableau d'entrée est [1, 2, 3], la fonction devrait retourner [3, 2, 1].

// Vous devez utiliser des boucles `for`.


// function inverserTableau(tableau) {
//     let newArr = []
//     for(let i = tableau.length - 1; i>=0; i--) {
//         newArr.push(tableau[i])
//     }
//     return newArr;
// }

// inverserTableau([1, 2, 3]) // retourne [3, 2, 1]



// ## Exercice 11

// Écrivez une fonction JavaScript appelée `aDesDoublons` qui prend un tableau de mots en entrée et retourne `true` si le tableau contient des éléments en double (doublons), sinon retourne `false`.

// Vous devez utiliser des boucles `for`.

// function aDesDoublons(tableau) {
//     for(let i = 0; i<tableau.length; i++){
//         let wordCounter = 0;
//         let word = tableau[i];
//         for(let j = 0; j<tableau.length; j++) {
//             if(word == tableau[j]) {
//                 wordCounter++;
//                 if(wordCounter >= 2) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }

// aDesDoublons(["mot", "stylo", "phrase", "mot", "jogging"]) // retourne true

// aDesDoublons(["mot", "stylo", "phrase", "jogging"]) // retourne false




// ## Exercice 12

// Écrivez une fonction JavaScript appelée `produitTableau` qui prend un tableau de nombres en entrée et retourne le produit de tous les éléments du tableau.

// Vous devez utiliser des boucles `for`.


// function produitTableau(tableau) {
//     let temp = tableau[0]
//     for(let i = 1; i< tableau.length; i++) {
//         temp = temp * tableau[i]
//     }
//     return temp;
// }

// produitTableau([2, 3, 6]) // retourne 36




// ## Exercice 13

// Écrivez une fonction JavaScript appelée `rechercherElement` qui prend un tableau et un élément en entrée, puis retourne true si l'élément est présent dans le tableau, sinon retourne false.

// Vous devez utiliser des boucles `for`.

// function rechercherElement(arr,word) {
//     return arr.includes(word);
// }

// rechercherElement(["chaise", "table", "vase"], "table") // retourne true
// rechercherElement(["chaise", "table", "vase"], "plateau") // retourne false


// ## Exercice 14

// Écrivez une fonction JavaScript appelée `fusionnerTableaux` qui prend deux tableaux en entrée et retourne un nouveau tableau qui est la fusion des deux tableaux d'origine.

// Vous devez utiliser des boucles `for`.

// function fusionnerTableaux(tableau1, tableau2) {
//     let newArr = []
//     for(let i = 0; i<tableau1.length;i++) {
//         newArr.push(tableau1[i])
//     }
//     for(let i = 0; i<tableau2.length;i++) {
//         newArr.push(tableau2[i])
//     }
//     return newArr;
// }

// fusionnerTableaux([2, 3, 4], [1, 2, 5]) // retourne [2, 3, 4, 1, 2, 5]