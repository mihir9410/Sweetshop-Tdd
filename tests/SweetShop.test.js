const SweetShop = require('../src/SweetShop.js');

describe('Sweetshop - Adding sweets', () => {
    it('should add a sweet to the shop', () => {
        const sweet = {
            id: 100,
            sweet_name: 'Kaju Katli',
            sweet_category: 'nut-based',
            sweet_price: 50,
            sweet_quantity: 10,
        }

        SweetShop.addSweet(sweet);
        const sweets = SweetShop.getAllSweets();

        expect(sweets.length).toBe(1);
        expect(sweets[0].id).toBe(100);
    });
})