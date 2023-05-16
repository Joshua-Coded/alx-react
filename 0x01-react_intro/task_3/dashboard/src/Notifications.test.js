import React from 'react';
import {swallow} from 'enzyme';
import Notifications from './Notifications';


describe('Notification component tests', () => {
    it('renders Notifications component without crashing', () => {
        const notifications = swallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('renders ul', () => {
        const notifications = swallow(<Notifications />);
        expect(notifications.find('ul')).toBeDefined()
    });

    it('renders three list items', () =>{
        const notifications = swallow(<Notifications />);
        expect(notifications.find('li')).toBeDefined();
    });

    it('renders correct text', () => {
        const notifications = swallow(<Notifications />);
        expect(notifications.find('p').text()).toBe('Here is the list of notifications')
    })
})