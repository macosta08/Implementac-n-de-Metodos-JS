// Arreglo global de ejemplo para pruebas
var array = [23, 13, 9 , 2];
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

//Implementación del método myForEach iterativo.
Array.prototype.myForEach = function(callback){
    
     for(let i = 0; i< this.length; i++) {
        
        callback(this[i], i);
    }
}

// usando myForEach()
let forEachValue = [];
array.myForEach(element => forEachValue.push(element +1));
console.log(`arreglo original: [${array}]. Arreglo myForEach: [${forEachValue}]`); 

//Implementación del método myFilter declarativo
Array.prototype.myFilter = function(callback){
    
    let newArray = [];
    
    this.myForEach(element => callback(element) ? newArray.push(element) : null)
  
    return newArray;
}

// usando myFilter()
let filterValue = array.myFilter(element => element >= 9 & element < 20);
console.log(`arreglo original: [${array}]. Arreglo myFilter: [${filterValue}]`); 

// Implementación del metodo myMap declarativo.
Array.prototype.myMap = function(callback){
    
    let newArray = [];
    
    this.myForEach(element => newArray.push(callback(element)));
    
    return newArray;
}

// usando myMap()
let mapValue = array.myMap(element => element - 1);
console.log(`arreglo original: [${array}]. Arreglo myMap: [${mapValue}]`); 

//Implementación del método myFind iterativo.
Array.prototype.myFind = function(callback){
    
    for(let i = 0; i< this.length; i++){

        if (callback(this[i])) {
            return this[i]; 
        }
    }
}

// usando myFind()
let findValue = array.myFind(elem => elem > 20);
console.log(`arreglo original: [${array}]. myFind(elem => elem > 20): ${findValue}`); 

//Implementación del método myFindIndex iterativo.
Array.prototype.myFindIndex = function(callback){
    
    for(let i = 0; i< this.length; i++){

        if (callback(this[i])) {
            return i; 
        }
    } 
    return -1;
}

// usando myFindIndex()
const findIndexValue = array.myFindIndex(elem => elem < 1);
console.log(`arreglo original: [${array}]. myFindIndex(elem => elem < 1): ${findIndexValue}`); 

// Implementación del metodo myContains declarativo.
Array.prototype.myContains = function(element){    
    
    return (this.indexOf(element) === -1) ? false : true;
}

// usando myContains()
const myContainsValue = array.myContains(13333);
console.log(`arreglo original: [${array}]. myContains(13333): ${myContainsValue}`); 

// Implementación del metodo myPluck declarativo.
Array.prototype.myPLuck = function(property){    
    
    return this.myMap(elem => elem[property]);
     
}

const myPluckValue = stooges.myPLuck('name');
console.log(`arreglo original: [${stooges}]. Arreglo myPLuck: [${myPluckValue}]`); 

// Implementación del metodo myWithout declarativo.

Array.prototype.myWithout = function(...theArgs) {    
    
    var copy = this.slice(); 
  
    theArgs.myForEach(elem => {         
        // Repito mientras encuentre un indice con el valor del elem.   
        while(copy.indexOf(elem) != -1){
            //como encontre el elem, lo borro.
            copy.splice(copy.indexOf(elem), 1);
        }        
    })
    return copy;
}

// usando myWithout()
let myWithoutValue = array.myWithout(13,9,8,2);
console.log(`arreglo original: [${array}]. Arreglo myWithout(13,9,8,2): [${myWithoutValue}]`); 