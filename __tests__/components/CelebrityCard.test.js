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

    const CelebrityCardTree = shallow(<CelebrityCard celebrity={celebrityData}/>);

    expect(CelebrityCardTree.find('.test-card')).toHaveLength(1);
    expect(CelebrityCardTree.find('.test-card-empty')).toHaveLength(0);
});

it('should be able to render Empty Celebrity card properly', () => {

    const CelebrityCardTree = shallow(<CelebrityCard />);

    expect(CelebrityCardTree.find('.test-card-empty')).toHaveLength(1);
    expect(CelebrityCardTree.find('.test-card')).toHaveLength(0);
});