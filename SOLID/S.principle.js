class Order {
    constructor(userId) {
        this.userId = userId;
        this.orderTime = Date.now();
        this.products = [];
    }
}

class OrderManager {
    constructor() {
        this.order = null;
    }

    createOrder(userId) {
        this.order = new Order(userId);
        return this.order;
    }

    addProduct(product) {
        this.order.products.push(product);
    }

    getOrder() {
        return this.order;
    }

    isValidOrder() {
        return !!this.order.products.length;
    }

    // send mail, sai nguyên tắc Single Principle
    // ta cần tách ra class đảm nhiệm send mail, mọi xử lý, config về send mail 
    // sẽ được class đó đảm nhận, mỗi lần thay đổi, mở rộng sẽ dễ hơn
    // sendOrderMail() {
    //     if (this.isValidOrder) {
    //         console.log("Order has been sent to your email address: abc@gmail.com", order);
    //         return true;
    //     }
    //     return false;
    // }

    // Việc gửi mail cho order nằm trong order manager, nhưng gửi ra sao, xử lý ra sao, 
    // thì ta đã tách sang class SendMail
    sendOrderMail() {
        if (this.isValidOrder) {
            this.orderSendMail = new SendMail();
            return this.orderSendMail.sendOrderMail(this.order)
        }
    }
}

class SendMail {
    sendOrderMail(order) {
        console.log("Order has been sent to your email address: abc@gmail.com", order);
        return true;
    }
}

// const newOrder=  new Order('user-10001');
const orderManager = new OrderManager();
orderManager.createOrder('user-10001');
orderManager.addProduct({ productId: 'product-10001', price: 1000, currency: 'VND', quantity: 2 });
console.log(orderManager.getOrder());
console.log(orderManager.sendOrderMail());