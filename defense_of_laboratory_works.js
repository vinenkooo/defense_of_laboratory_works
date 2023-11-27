var word = prompt('Введите буквы зашифрованного слова через пробел, где а = 00, я = 102 ');
word = word.split(' ');
console.log(word)

var word_length = word.length;
var word_array = [];
var word_result = [];

var alphabet = [
    ["а", "б", "в"],
    ["г", "д", "е"],
    ["ё", "ж", "з"],
    ["и", "й", "к"],
    ["л", "м", "н"],
    ["о", "п", "р"],
    ["с", "т", "у"],
    ["ф", "х", "ц"],
    ["ч", "ш", "щ"],
    ["ъ", "ы", "ь"],
    ["э", "ю", "я"],
];

for(let i = 0; i < word_length; i++) {
    let time_variable = word[i];
    console.log(time_variable)
    word_array.push(time_variable)
}
console.log("word array",word_array);

for(let k = 0; k < word_array.length; k++) {
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 11; j++){
            let time_variable_1 = String(j)+String(i);
            if(word_array[k] == time_variable_1){
                word_result.push(alphabet[j][i]);
            }

        }
    }
}
console.log(word_result);

word_result_length = word_result.length;
var word_result_string = '';
for(let i = 0; i < word_result_length; i++){
    word_result_string += word_result[i];    
}
console.log('Зашифрованное слово:', word_result_string)


