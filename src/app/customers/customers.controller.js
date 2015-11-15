//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
angular.module('app.main').controller('CustomersController',
    function($scope, customersService, logger, $uibModal, $timeout) {
        $scope.orderInfo = null;
        //I like to have an init() for controllers that need to perform some initialization. Keeps things in
        //one place...not required though especially in the simple example below
        init();

        function init() {
            $scope.customers = customersService.getCustomers();
        }
        $scope.$on("EVENT.ORDER_PLACED", function(e, orderInfo) {
            $scope.showOrderInfo = true;
            $scope.orderInfo = orderInfo;
            $timeout(function() {
                $scope.showOrderInfo = false;
            }, 3000);
        });
        $scope.insertCustomer = function() {
            var firstName = $scope.newCustomer.firstName;
            var lastName = $scope.newCustomer.lastName;
            var stateName = $scope.newCustomer.stateName;
            customersService.insertCustomer(firstName, lastName, stateName);
            $scope.newCustomer.firstName = '';
            $scope.newCustomer.lastName = '';
            $scope.newCustomer.stateName = '';
            logger.success("Data Saved Successfully");
        };

        $scope.deleteCustomer = function(id) {
            customersService.deleteCustomer(id);
        };

        $scope.getTotalAmount = function(customer) {
            return customersService.calculateTotalOrders(customer);
        }
        $scope.takeOrderInPopup = function(customerObj) {
            $uibModal.open({
                animation: true,
                templateUrl: 'src/app/customers/take-order-modal.html',
                controller: 'TakeOrderModalCtrl',
                size: 'lg',
                resolve: {
                    customer: function() {
                        return customerObj;
                    }
                }
            });
        }

    });
