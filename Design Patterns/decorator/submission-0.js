class Coffee {
    /**
     * @returns {number}
     */
    getCost() {
        throw new Error('Method getCost() must be implemented.');
    }
}

class SimpleCoffee extends Coffee {
    /**
     * @returns {number}
     */
    getCost() {
        return 1.1;
    }
}

class CoffeeDecorator extends Coffee {
    /**
     * @param {Coffee} coffee
     */
    constructor(coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    /**
     * @returns {number}
     */
    getCost() {
        return this.decoratedCoffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    // Implement the Milk decorator
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return super.getCost() + 0.5;
    }
}

class SugarDecorator extends CoffeeDecorator {
    // Implement the Sugar decorator
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return super.getCost() + 0.2;
    }        
}

class CreamDecorator extends CoffeeDecorator {
    // Implement the Cream decorator
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return super.getCost() + 0.7;
    }        
}
