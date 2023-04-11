// Yêu cầu: quản lý xe trucks cho logistic

// Hàm lấy xe theo trọng tải

// Lv0
const serviceLogistics = (cargoVolume) => {
    switch (cargoVolume) {
        case '10': return ({
            name: 'Truck 10',
            doors: 6,
            price: '100.000 VND'
        });
        case '20': return ({
            name: 'Truck 20',
            doors: 16,
            price: '200.000 VND'
        })
    }
}

console.log(serviceLogistics('20'));

// Level xxx
class ServiceLogistics {
    constructor(name, doors, price) {
        this.name = name;
        this.doors = doors;
        this.price = price;
    }

    static getTransport(cargoVolume) {
        switch (cargoVolume) {
            case '10': return new ServiceLogistics('Truck 10', 6, '100.000 VND');
            case '20': return new ServiceLogistics('Truck 20', 16, '200.000 VND');
        }
    }
}

console.log(ServiceLogistics.getTransport('20'));