import {shallow} from 'enzyme';

import Login from './Login';

describe('Login Test', () => {
    it('Login must not crash', (done) => {
	expect(shallow(< Login />).exists());
    });
});
