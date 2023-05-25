import {shallow} from 'enzyme';
import Header from './Header';

describe('Header Test', () => {
    it('Ensure the header does not fail', (done) => {
	expect(shallow(<Header />).exists());
	done();
    });
});
