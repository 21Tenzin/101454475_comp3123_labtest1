function lowerCaseWords(arr) {
    var promise = new Promise((resolve, reject) => {
        if (arr && arr.length >0) {
            const result = arr.filter(item => typeof item === 'string')
                              .map(item => item.toLowerCase());
            resolve(result);
        } else {
            reject('Error: Invalid input');  
        }
    });
    return promise;
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})