import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/HeaderComponent';

const HeaderComp = shallow(<Header title1="Title1"
                                   title2="Title2"
                                   description="Description"
                                   referenceLink="Reference" />);

it('should be able to render Header properly', () => {

    expect(HeaderComp.find('.test-header')).toHaveLength(1);
});

it('should have different header tags rendered correctly', () => {

    expect(HeaderComp.find('h3')).toHaveLength(2);
    expect(HeaderComp.find('h4')).toHaveLength(1);
    expect(HeaderComp.find('h6')).toHaveLength(1);
});

it('should check if the text in header tags is correct', () => {

    const h3Header = HeaderComp.find('h3');

    expect(h3Header.at(0).text()).toEqual('Title1');
    expect(h3Header.at(1).text()).toEqual('Title2');
    expect(HeaderComp.find('h4').text()).toEqual('Description');
});