import React from 'react';
import { shallow } from 'enzyme';
import MainCard from '../../src/components/MainCard';
import CelebrityData from '../../src/CelebrityData';

const MainCardComp = shallow(<MainCard
    celebData={CelebrityData.celebrityList}
    currencyRates={
        {
            'usDollar': CelebrityData.usDollarValue,
            'ausDollar': CelebrityData.australianDollarValue,
            'euro': CelebrityData.euroValue
        }
    }/>)

const firstRow = MainCardComp.find('.test-select-first-row');
const firstRowSpans = firstRow.find('span');

const secondRow = MainCardComp.find('.test-select-second-row');
const secondRowSpans = secondRow.find('span');

it('should be able to render main card successfully', () => {

    expect(MainCardComp.find('.test-main-card')).toHaveLength(1);
    expect(MainCardComp.find('.test-select-first-row')).toHaveLength(1);
    expect(MainCardComp.find('.test-select-second-row')).toHaveLength(1);
    expect(MainCardComp.find('.test-celeb-list')).toHaveLength(1);
});

it('should check if the first row has correct list of countries and currency', () => {
    expect(firstRowSpans.first().find('b').text()).toEqual('Countries:');
    expect(firstRowSpans.last().find('b').text()).toEqual('Currency:');

    let uniqueArr= ['Show All'];
    CelebrityData.celebrityList.forEach((celebObj) => {
        if(uniqueArr.indexOf(celebObj.country) === -1){
            uniqueArr.push(celebObj.country);
        }
    })

    expect(firstRowSpans.first().find('option').length).toEqual(uniqueArr.length);

    expect(firstRowSpans.last().find('option').length).toEqual(3);

});

it('should be able to simulate change events on the country change select box', () =>{
    let countrySelect = firstRowSpans.first().find('select');
    countrySelect.simulate('change', {target: {
        value: 'Australia'
    }});

    countrySelect.simulate('change', {target: {
        value: 'Show All'
    }});

    const handleCountryChange= jest.fn();
    const countrySelectRenderer = shallow(<countrySelect onChange={handleCountryChange()}/>)
    countrySelectRenderer.simulate('change');
    expect(handleCountryChange).toHaveBeenCalledTimes(1)

});

it('should be able to simulate change events on the currency change select box', () =>{
    let currency = firstRowSpans.last().find('select');
    currency.simulate('change', {target: {
        value: 'Aus Dollar'
    }});

    const handleCurrencyChange= jest.fn();
    const currencySelectRenderer = shallow(<countrySelect onChange={handleCurrencyChange()}/>)
    currencySelectRenderer.simulate('change');
    expect(handleCurrencyChange).toHaveBeenCalledTimes(1)

});

it('should be able to simulate change events on the search box', () =>{
    let search = secondRowSpans.first().find('input');
    search.simulate('change', {target: {
        value: 'john'
    }});

    const handleSearch= jest.fn();
    const searchRenderer = shallow(<search onChange={handleSearch()}/>)
    searchRenderer.simulate('change');
    expect(handleSearch).toHaveBeenCalledTimes(1)

});

it('should be able to simulate change events on the Order By box', () =>{
    let orderByBox = secondRowSpans.last().find('select');
    orderByBox.simulate('change', {target: {
        value: 'name'
    }});

    const handleOrderBy= jest.fn();
    const orderByRenderer = shallow(<orderByBox onChange={handleOrderBy()}/>)
    orderByRenderer.simulate('change');
    expect(handleOrderBy).toHaveBeenCalledTimes(1)

});