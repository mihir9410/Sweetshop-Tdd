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

describe('Sweetshop - Retrieving sweets', () => {
    it('should retrieve all sweets from the shop', () => {
        const sweet1 = {
            id: 101,
            sweet_name: 'Gulab Jamun',
            sweet_category: 'milk-based',
            sweet_price: 30,
            sweet_quantity: 20,
        }

        const sweet2 = {
            id: 102,
            sweet_name: 'Ladoo',
            sweet_category: 'flour-based',
            sweet_price: 25,
            sweet_quantity: 15,
        }

        SweetShop.addSweet(sweet1);
        SweetShop.addSweet(sweet2);
        const sweets = SweetShop.getAllSweets();

        expect(sweets.length).toBe(3); // 1 from previous test + 2 new
        expect(sweets[1].id).toBe(101);
        expect(sweets[2].id).toBe(102);
    });
})