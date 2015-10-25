//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
angular
    .module('app.main')
    .controller('TakeOrdersController', TakeOrdersController);

function TakeOrdersController($scope, $routeParams, customersService,$localStorage,logger,STORAGE_KEY,groceryService) {
    $scope.customer = {};
    $scope.itemList = [];
    $scope.order = resetOrder();
    $scope.newItem = resetItem();
    $scope.resetItem = resetItem;
    $scope.resetOrder = resetOrder;
    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab customerID off of the route        
        var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
        if (customerID > 0) {
            $scope.customer = customersService.getCustomer(customerID);
        }

        $scope.itemList = groceryService.getAllInArray();
        
    }
    $scope.addItem = function(newItem) {
        $scope.order.itemList.push(newItem);
        $scope.newItem = resetItem();
        logger.info("Added an item to your list");
    }
    $scope.addOrder = function() {
        $scope.order.id = $localStorage.orderCounter++;
        customersService.addOrder($scope.customer, $scope.order);
        $scope.order = resetOrder();
        logger.success("Order Placed Successfully");
    }
    
    function resetItem() {
        return {
            name: "",
            quantity: 0,
            rate: 0
        }
    }
    function resetOrder() {
        return {
        itemList: [],
        d: new Date().getTime(),
    }
    }

}
