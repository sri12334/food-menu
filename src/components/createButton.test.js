/**
 * @jest-environment jsdom
 */

import createButton from './createButton.js';

describe('createButton function', () => {
    it('should create a button component with correct content', () => {
        const buttonData = { id: 'all', text: 'All' };
        const buttonComponent = createButton(buttonData);
        expect(buttonComponent.tagName).toBe('BUTTON');
        expect(buttonComponent.classList.contains('filter-btn')).toBe(true);
        expect(buttonComponent.id).toBe('all');
        expect(buttonComponent.innerText).toBe('All');
    });
});