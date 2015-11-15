//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
angular
    .module('app.main')
    .controller('TakeOrderModalCtrl', TakeOrderModalCtrl);

function TakeOrderModalCtrl($scope,$uibModalInstance,customer,$rootScope) {
    $scope.customer = customer;
    $scope.orderCount=0;
    
    $scope.ok = function(){
        $uibModalInstance.close();
        // trigger broadcast here
        $rootScope.$broadcast("EVENT.ORDER_PLACED",{
            count:$scope.orderCount,
            name:customer.firstName + ' ' + customer.lastName});
    }
}
