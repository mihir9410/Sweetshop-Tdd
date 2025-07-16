const sweetShop = require('../src/SweetShop');

describe('Sweetshop - Adding sweets', () => {
    it('should add a sweet to the shop', () => {
        const sweet = {
            id: 100,
            sweet_name: 'Kaju Katli',
            sweet_category: 'nut-based',
            sweet_price: 50,
            sweet_quantity: 10,
        }

        sweetShop.addSweet(sweet);
        const sweets = sweetShop.getAllSweets();

        expect(sweets.length).toBe(1);
        expect(sweets[0].id).toBe(100);
    });
})