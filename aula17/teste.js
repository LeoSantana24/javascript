let num =[7,3,4,5]

let menor= num[0]

for(let j = 1; j< num.length; j++){
    if(menor > num[j]){
        menor =num [j]

    }
    
}
console.log(`menor numero é ${menor}`)
