class SweetShop{
    constructor(){
        this.sweets = [];
    }
    addSweet(sweet){
        if(!sweet || !sweet.id || !sweet.sweet_name || !sweet.sweet_category || !sweet.sweet_price || !sweet.sweet_quantity){
            throw new Error('Invalid sweet object');
        }
        if(sweet.sweet_price < 0 || sweet.sweet_quantity < 0){
            throw new Error('Sweet price and quantity must be non-negative');
        }
        if(this.sweets.some((s) => (s.id === sweet.id) && (s.sweet_name === sweet.sweet_name) && (s.sweet_category === sweet.sweet_category) && (s.sweet_price === sweet.sweet_price))){
            this.sweets.find((s) => s.id === sweet.id).sweet_quantity += sweet.sweet_quantity;
            return; // If sweet already exists, just increase the quantity
        }
        if(this.sweets.some((s) => s.id === sweet.id)){
            throw new Error('Sweet with this ID already exists');
        }
        this.sweets.push(sweet);
    }
    getAllSweets(){
        return this.sweets;
    }
}

module.exports = new SweetShop();