import {shallow} from 'enzyme';
import App from './App';

describe('Test for App', () => {
    it('App does not crash', (done) => {
	expect(shallow(<App />).exists());
	done();
    });
});

