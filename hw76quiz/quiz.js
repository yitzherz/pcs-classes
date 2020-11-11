(function () {
    'use strict';
    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customerName, customerAddress, items) {
            this.customerName = customerName;
            this.customerAddress = customerAddress;
            this.items = items;
        }

        get total() {
            let totalPrice = 0;
            this.items.forEach(item => totalPrice += (item.price * item.quantity));
            return totalPrice;
        }
    }

    const i1 = new Item('joe', 50, 6);
    const i2 = new Item('joe', 30, 2);
    const orderElem = document.getElementById('orders');
    //const order = new Order('jack', 9878, [i1, i2]);
    // console.log(order);
    // console.log(order.total);
    const orderForm = [];
    fetch('orders.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(orders => {
            let str = '';
            orders.forEach(order => {
                const itemForm = [];
                
                order.items.forEach(item => {
                    itemForm.push(new Item(item.item, item.total / item.quantity, item.quantity));
                    console.log(new Item(item.item, item.total / item.quantity, item.quantity));
                });
                const ordered = new Order(order.customer, order.address, itemForm);
                orderForm.push(ordered);
                str += `\r\n ${order.customer} ${order.address} ordered for a total of ${ordered.total} : `;
                itemForm.forEach(item => str += `${item.quantity} ${item.name} for ${item.price} a piece `);
                console.log(orderForm,ordered.total);
            });
            orderElem.innerText = str;
        });
}());