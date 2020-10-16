import React from 'react';
import { shallow } from 'enzyme/build';
import App from './App';

// eslint-disable-next-line no-undef
it('mounts without crashing', () => {
    const wrapper = shallow(<App />);
    wrapper.unmount()
});
