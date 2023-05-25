import {shallow} from 'enzyme';

import Footer from './Footer'

describe('Footer Test', () => {
    it("Footer must not crash", (done) => {
	expect(shallow(<Footer />).exists());
	done();
    });
});
