//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

angular.module('app.main').service('customersService', function(STORAGE_KEY, $localStorage) {
    var customers = $localStorage[STORAGE_KEY.CUSTOMERS];

    this.getCustomers = function() {
        return customers;
    };

    this.insertCustomer = function(firstName, lastName, stateName) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            stateName: stateName,
            orders:[]
        });
        $localStorage[STORAGE_KEY.CUSTOMERS] = customers;
    };

    this.deleteCustomer = function(id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
        $localStorage[STORAGE_KEY.CUSTOMERS] = customers;
    };

    this.getCustomer = function(id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    this.addOrder = function(customer, order) {
        customer.orders.push(order);
        $localStorage[STORAGE_KEY.CUSTOMERS] = customers;
    }

    this.calculateTotalOrders = calculateTotalOrders;

    function calculateTotalOrders(aCustomer) {
        var totalOrders = 0.00;
        if (aCustomer && aCustomer.orders) {
            var totalOrders = 0;
            for (var i = 0; i < aCustomer.orders.length; i++) {
                var order = aCustomer.orders[i];
                var orderTotal = 0.00;
                for (var j = 0; j < order.itemList.length; j++) {
                    var anItem = order.itemList[j];
                    orderTotal += (anItem.quantity * anItem.rate);
                }
                totalOrders += orderTotal;
            }

        }
        return totalOrders
    }

    this.calculateAllOrders = function() {
        var total = 0;
        for (var i = 0; i < customers.length; i++) {
            total += calculateTotalOrders(customers[i]);
        }
        return total;
    }
});
