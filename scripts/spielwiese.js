function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

function remainingOrders(timeLeft, orders) {
    let remainingOrders = [];
    orders.forEach(juice => {
        if (timeLeft > 0) {
            timeLeft -= timeToMixJuice(juice);
        } else {
            remainingOrders.push(juice);
        }
    });

    return remainingOrders;

}


const orders = [
    'Energizer',
    'Green Garden',
    'Ruby Glow',
    'Pure Strawberry Joy',
    'Tropical Island',
    'Limetime',
  ];

console.log(remainingOrders(12, orders));
