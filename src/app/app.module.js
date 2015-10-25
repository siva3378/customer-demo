(function() {
    angular.module('app.main', ['app.core'])
        //This configures the routes and associates each route with a view and a controller
        .config(function($routeProvider) {
            $routeProvider
                .when('/customers', {
                    controller: 'CustomersController',
                    templateUrl: 'src/app/customers/customers.html'
                })
                //Define a route that has a route parameter in it (:customerID)
                .when('/customerorders/:customerID', {
                    controller: 'CustomerOrdersController',
                    templateUrl: 'src/app/orders/customerOrders.html'
                })
                .when('/takeorder/:customerID', {
                    controller: 'TakeOrdersController',
                    templateUrl: 'src/app/orders/takeOrder.html'
                })
                //Define a route that has a route parameter in it (:customerID)
                .when('/orders', {
                    controller: 'OrdersController',
                    templateUrl: 'src/app/orders/orders.html'
                })
                //Define a route 
                .when('/groceries', {
                    controller: 'GroceryController',
                    templateUrl: 'src/app/grocery/groceries.html'
                })
                .when('/dashboard', {
                    controller: 'DashboardController',
                    templateUrl: 'src/app/dashboard/dashboard.html'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });
        });

})();
