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

describe('Sweetshop - Edge cases', () => {
    it('should throw an error when adding an invalid sweet', () => {
        const invalidSweet = {
            id: 103,
            sweet_name: '',
            sweet_category: 'unknown',
            sweet_price: -10, // Invalid price
            sweet_quantity: 5,
        }

        expect(() => SweetShop.addSweet(invalidSweet)).toThrow('Invalid sweet object');
    });

    it('should throw an error when adding a sweet with missing properties', () => {
        const incompleteSweet = {
            id: 104,
            sweet_name: 'Incomplete Sweet',
            // Missing category, price, and quantity
        }

        expect(() => SweetShop.addSweet(incompleteSweet)).toThrow('Invalid sweet object');
    });

    it('should not allow adding a sweet with an existing ID', () => {
        const duplicateSweet = {
            id: 100, // Same ID as the first sweet
            sweet_name: 'Duplicate Kaju Katli',
            sweet_category: 'nut-based',
            sweet_price: 60,
            sweet_quantity: 5,
        }

        expect(() => SweetShop.addSweet(duplicateSweet)).toThrow('Sweet with this ID already exists');
    });
});

describe('Sweetshop - Quantity Update', () => {
    it('should increase quantity of an existing sweet', () => {
        const sweet = {
            id: 100,
            sweet_name: 'Kaju Katli',
            sweet_category: 'nut-based',
            sweet_price: 50,
            sweet_quantity: 5, // Adding more quantity
        }

        SweetShop.addSweet(sweet);
        const sweets = SweetShop.getAllSweets();

        expect(sweets.length).toBe(3); // Should still be 3 sweets
        expect(sweets[0].sweet_quantity).toBe(15); // Original quantity was 10, now should be 15
    });
});