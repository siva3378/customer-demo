//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
angular
    .module('app.main').controller('OrderChildController', function($scope) {
        $scope.orderby = 'item';
        $scope.reverse = false;
        $scope.ordersTotal = 0.00;

        init();

        function init() {
            //Calculate grand total
            //Handled at this level so we don't duplicate it across parent controllers
            if ($scope.customer && $scope.customer.orders) {
                $scope.customer.totalOrders = 0.00;
                var totalOrders = 0;
                for (var i = 0; i < $scope.customer.orders.length; i++) {
                    var order = $scope.customer.orders[i];
                    var orderTotal = 0.00;
                    for (var j = 0; j < order.itemList.length; j++) {
                        var anItem = order.itemList[j];
                        orderTotal += (anItem.quantity * anItem.rate);
                    }
                    order.total = orderTotal;
                    totalOrders += orderTotal;
                }
                $scope.customer.totalOrders = totalOrders;
            }
        }

        $scope.setOrder = function(orderby) {
            if (orderby === $scope.orderby) {
                $scope.reverse = !$scope.reverse;
            }
            $scope.orderby = orderby;
        };

    });
