export function convertCurrency(amount, from, to){
    if( from > to){
        amount *= to;
    }else if( from < to) {
        amount = (amount * to / from);
    }

    return amount;
}

export function filterArr(arr, country, search){
    let newCelebData = [];
    if ((!country.length || country === 'Show All') && !search.length) {
        return arr;
    } else {
        if(country.length || country !== 'Show All'){
            newCelebData = arr.filter((celebObj) => {
                return celebObj.country === country
            });
        }


        if( search.length) {
            newCelebData = newCelebData.length ? newCelebData : arr;
            newCelebData = newCelebData.filter((celebObj) => {

                let celebKeys = Object.keys(celebObj);
                let celebKeysLength = celebKeys.length;
                let match = false;

                for(let i=0; i< celebKeysLength; i++){
                    if(celebObj[celebKeys[i]].toString().toLowerCase().indexOf(search.toLowerCase()) > -1){
                        match = true;
                        break;
                    }
                }

                return match;

            });
        }

        return newCelebData;
    }


}