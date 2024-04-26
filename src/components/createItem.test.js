/**
 * @jest-environment jsdom
 */

import createMenuItem from './createItem.js';

describe('createMenuItem function', () => {
    it('should create a menu item component with correct content', () => {
        const menuItem = {
            id: 1,
            title: 'Buttermilk pancakes',
            category: 'breakfast',
            price: 15.99,
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbuttermilk-pancakes&psig=AOvVaw32BgVipPHv1ghybHgEsxla&ust=1714206002910000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiCn5a534UDFQAAAAAdAAAAABAE',
            desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
        };
        const menuItemComponent = createMenuItem(menuItem);
        expect(menuItemComponent.classList.contains('menu-item')).toBe(true);
        expect(menuItemComponent.classList.contains(menuItem.category)).toBe(true);
        const img = menuItemComponent.querySelector('.photo');
        expect(img.src).toBe('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbuttermilk-pancakes&psig=AOvVaw32BgVipPHv1ghybHgEsxla&ust=1714206002910000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiCn5a534UDFQAAAAAdAAAAABAE');
        expect(img.alt).toBe(menuItem.title);
        const title = menuItemComponent.querySelector('h4');
        expect(title.innerText).toBe(menuItem.title);
        const price = menuItemComponent.querySelector('.price');
        expect(price.innerText).toBe(`$${menuItem.price}`);
        const desc = menuItemComponent.querySelector('.item-text');
        expect(desc.innerText).toBe(menuItem.desc);
    });
});