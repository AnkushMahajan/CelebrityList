import React from 'react';
import { shallow } from 'enzyme';
import CelebrityCard from '../../src/components/CelebrityCard';

const celebrityData = {
        rank: 1,
        name: "John Walton",
        netWorth: 21000000000,
        age: "68",
        country: "United States"
    }


it('should be able to render Celebrity card properly', () => {

    let CelebrityCardTree = shallow(<CelebrityCard celebrity={celebrityData} currency="Euro"/>);
    let cardData = CelebrityCardTree.find('.test-card-data');
    expect(CelebrityCardTree.find('.test-card')).toHaveLength(1);
    expect(cardData.find('p')).toHaveLength(4);
    expect(cardData.find('p').at(0).text()).toEqual('Name: John Walton');
    expect(cardData.find('p').at(1).text()).toEqual('Net Worth: € 21000000000');
});

it('should be able to change currency to USD for default value', () => {
    let CelebrityCardTree = shallow(<CelebrityCard celebrity={celebrityData} />);
    let cardData = CelebrityCardTree.find('.test-card-data');
    expect(CelebrityCardTree.find('.test-card-empty')).toHaveLength(0);
    expect(cardData.find('p').at(0).text()).toEqual('Name: John Walton');
    expect(cardData.find('p').at(1).text()).toEqual('Net Worth: $USD 21000000000');
})

it('should be able to render Empty Celebrity card properly', () => {

    const CelebrityCardTree = shallow(<CelebrityCard currency="Aus Dollar"/>);

    expect(CelebrityCardTree.find('.test-card-empty')).toHaveLength(1);
    expect(CelebrityCardTree.find('.test-card')).toHaveLength(0);
});