//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
angular
    .module('app.main')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $routeParams, stateWiseService, customersService, logger, STORAGE_KEY,groceryService,productWiseService) {

    $scope.stateWiseOrders = stateWiseService.getOrders();
    $scope.stateWiseCustomers = stateWiseService.getCustomers();
    $scope.productWise = productWiseService.get();
    
    $scope.totalOrders = customersService.calculateAllOrders();
    $scope.totalCustomers = customersService.getCustomers().length;
    $scope.totalGroceryItems = groceryService.getAllInArray().length;
}
