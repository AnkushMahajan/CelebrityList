import { convertCurrency, filterArr } from '../src/util';
import CelebrityData from '../src/CelebrityData';

it('should be able to correctly convert from one currency to another', () => {
    expect( convertCurrency(10, 1, 0.78)).toEqual(7.800000000000001);

    expect( convertCurrency(7.800000000000001, 0.78, 1)).toEqual(10);
});

it('should filter the array by country name or search item', () => {

    let arrayReturned = filterArr(CelebrityData.celebrityList, 'Australia', '');
    expect(arrayReturned.length).toEqual(3);

    let filterAustraliaArr = filterArr(arrayReturned, 'Australia', '84');
    expect(filterAustraliaArr.length).toEqual(1);
});