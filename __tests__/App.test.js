import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

// snapshot of the app component
it('renders without crashing', () => {
    const appTree = shallow(<App />);
    expect(appTree.find('.App')).toHaveLength(1);
});