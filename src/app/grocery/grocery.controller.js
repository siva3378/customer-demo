//This controller retrieves data from the groceryService and associates it with the $scope
//The $scope is ultimately bound to the customers view
angular.module('app.main').controller('GroceryController', function($scope, groceryService,logger) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.categories = groceryService.getGroceryList();
    }

    $scope.addItem = function(categoryName,item) {
        groceryService.addGroceryItem(categoryName,item);
        $scope.item=[];
        logger.success("Data Saved Successfully");
    }
});
