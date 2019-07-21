var slj1996 = function () {
    
    function chunk (array,number) {
        let arr = [];
        for (var i = 0 ; i < number;i++) {
            arr.push(array.shift())
        }
        return [arr,array];
    }

    function compact (array) {
        return array.filter(it => it)
    }





    return {
        chunk,
        compact,
    }













































}      ()