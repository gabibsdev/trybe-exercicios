let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 270];
let menor = numbers[0];

for(i = 0; i < numbers.length; i+=1){
   if(numbers[i] < menor){
      menor = numbers[i];
   }
}

console.log(`O menor número é ${menor}`);