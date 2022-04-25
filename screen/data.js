export const burger = [
    {
        fName: 'Crispy Chicken Burger',
        price: 14.99,
        calo: '1245 cal',
        description: 'Burger kẹp miếng gà giòn kèm phô mai, không nên ăn khi giảm cân.',
        img: require('../assets/images/crispy-chicken-burger.jpg')
    },
    {
        fName: 'Honey Mustard Chicken Burger',
        price: 15.00,
        calo: '1245 cal',
        description: 'Burger kẹp miếng gà giòn kèm phô mai, không nên ăn khi giảm cân.',
        img: require('../assets/images/honey-mustard-chicken-burger.jpg')
    }

    
]

export const pizza = [
    {
        fName: 'Hawaiian Pizza',
        price: 19.99,
        calo: '2045 cal',
        description: 'The best pizza you can find.',
        img: require('../assets/images/hawaiian-pizza.jpg')
    },
    {
        fName: 'Tomato Pizza',
        price: 15.99,
        calo: '1525 cal',
        description: 'The best pizza you can find.',
        img: require('../assets/images/pizza.jpg')
    }
]

export const restaurant = [
    {
        rName: 'Burgers Story',
        dish: [burger[0],2,3],
        price: 3
    }
]