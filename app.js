
//We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.1----------------------------------------------------------------
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
   this.name = this.firstName + ' ' + this.lastName;}

//    2---------------------------------------------------------------- I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.Can you help me fix the function?

function addFive(num) {
    var total = num + 5
    return total
  }
// // 3----------------------------------------------------------------write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
    let result = ''; 
    for (let i = 0; i < size; i++) {
        result += i % 2 === 0 ? '1' : '0';
    }
    return result;
}



// 4---------------------------------------------------------------- Ikkita argumentni oladigan va berilgan bo'linuvchiga bo'linadigan barcha raqamlarni qaytaradigan funktsiyani bajaring. Birinchi argument bir qator numbersva ikkinchi divisor.

// Misol (Input1, Input2 -- > Chiqish)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        arr.push(numbers[i]);
      }
    }
    return arr; 
  }
//   // 5---------------------------------------------------------------- Ism familiyasi bilan almashtirilgan qatorni qaytaradigan funktsiyani yozing.

// Misol (Kirish - > Chiqish)

// "john McClane" --> "McClane john"
function nameShuffler(str){
    let reverse = str.split(' ').reverse().join(' ');
    return reverse;
  }
  // 6---------------------------------------------------------------- Ushbu kod to'g'ri bajarilmaydi. Sababini tushunishga harakat qiling.
  function multiply(a, b){
    return a * b
  }

  // 7---------------------------------------------------------------- Bizga ko'plik kerak yoki kerak emasligini aniqlaydigan oddiy funktsiya kerak. Bu raqamni olishi kerak va agar ko'plik shu raqam bilan ishlatilishi kerak bo'lsa, true yoki false ni qaytarishi kerak. Bu , , yoki kabi qatorni chop etishda foydali bo'ladi 5 minutes14 apples1 sun.

// Siz faqat bu kata uchun ingliz tili grammatikasi qoidalari haqida qayg'urishingiz kerak, bu erda birlik bo'lmagan narsa (bir narsadan biri), u ko'plik (bir narsadan biri emas).

// Barcha qiymatlar ijobiy butun sonlar yoki suzuvchi yoki nol bo'ladi.

function plural(n) {
    return n !== 1;
}

// 8---------------------------------------------------------------- Voza-dagi rivojlanish guruhidan ilhomlanib, quyidagi funktsiyani yozingdasturchi nomini qabul qiladi va
// o'sha shaxsga tegishli chiroqlar sonini qaytaradi.
// Aytgancha, chiroqlarga ega bo'lgan yagona odam Zak. U egalik 18, qaysi lightsabers bir ajoyib soni. Kimki boshqa egalik 0.

// Eslatma: sizning funktsiyangiz standart parametrga ega bo'lishi kerak.

// Masalan (kirish - > chiqish):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
    if(name === "Zach"){
      return 18
  }else{
    return 0;
  }
    }
    // 9---------------------------------------------------------------- An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    var myset = new Set();
    for (let i = 0; i < str.split("").length; i++) {
      myset.add(str[i].toLowerCase());
    }
    if (myset.size != str.split("").length) {
      return false;
    } else {
      return true;
    }
  }

//   10------------------------------------------------------------
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }




  //------------------------------------------------ 5 ta masala ---------------------------------------------------------------//

//   1----------------------
function musbat(son){
    let arr = [];
    for(let i=0; i < son.length; i++){
        if(son[i] > 0){
            arr.push(son[i]);
        }
    }
    return arr;
}
let son = [1, -2, -3, 4, 5, 6];
console.log(musbat(son));

//   2----------------------
function str (suz){
    let arr = suz.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return arr;
}
let suz = ['hello', 'world', 'how', 'are', 'you'];
console.log(str(suz));

//   3----------------------
function teskariSon(son2) {
    let sonString = son2.toString();  
    let teskari = sonString.split('').reverse().join('');  
    return teskari;  
}

let son2 = 12345;
console.log(teskariSon(son2));  

//   4----------------------
function boll(son3){
    let arr =[];
    for(let i = 0; i < son3.length; i++){
        if(son3[i] === false){
            arr.push(son3[i]);
        }
}
return arr;
}

let son3 = [true, false, true, false, false, true];
console.log(boll(son3));

//   5----------------------
function musbat(son4){
    let arr = 0;
    for(let i=0; i < son.length; i++){
        if(son[i] > 0){
            arr += son4[i];
        }
    }
    return arr;
}
let  son4 = [1, -2, -3, 4, 5, 6];
console.log(musbat(son4));