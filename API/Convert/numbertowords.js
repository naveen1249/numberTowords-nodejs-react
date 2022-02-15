module.exports.getWordsFromNuber = function (number){
    if(number.length === 0) return [];
    const finalList =[];
    const keyboard = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    }
    const getallcombinations = (i,number,wordList)=>{
        if(number[i] <= 1) return;
        if(i === number.length){
            finalList.push(wordList.join(''));
            return;
        } 

        let chars = keyboard[number[i]];
        for(let char of chars){
            wordList.push(char);
            getallcombinations(i+1,number,wordList);
            wordList.pop();
        }
    }
    getallcombinations(0,number,[]);
    return finalList;
};
