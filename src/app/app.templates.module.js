(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/customers/customers.html',
    '<header class=\'row customers view\'>\n' +
    '    <legend class="col-md-12 text-info">\n' +
    '     <i class=\'fa fa-fw fa-users fa-2x\'></i>\n' +
    '     Customers \n' +
    '     <form class="form-inline pull-right">\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" data-ng-model="newCustomer.firstName" placeholder="First Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" data-ng-model="newCustomer.lastName" placeholder="Last Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" data-ng-model="newCustomer.stateName" placeholder="Customer City">\n' +
    '            </div>\n' +
    '             <div class="form-group">\n' +
    '                 <button id="submitCustomer" class="btn btn-primary" type="button" data-ng-disabled="!newCustomer.firstName || !newCustomer.lastName || !newCustomer.stateName" data-ng-click="insertCustomer()">Add Customer</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </legend>\n' +
    '</header>\n' +
    '<br />\n' +
    '<br />\n' +
    '<div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-3" data-ng-repeat="customer in customers | orderBy:\'firstName\' | filter:searchText">\n' +
    '            <div class="panel panel-default">\n' +
    '                <div class="panel-heading">\n' +
    '                    {{customer.firstName + \' \' + customer.lastName | titlecase}}\n' +
    '                    <!-- <button class="btn close" data-ng-click="deleteCustomer(customer.id)">&times;</button> -->\n' +
    '                </div>\n' +
    '                <div class="panel-body">\n' +
    '                    <span class="fa-2x">\n' +
    '                    <i class="fa fa-fw fa-rupee"></i>\n' +
    '                        {{getTotalAmount(customer)| number:2}}\n' +
    '                    </span>\n' +
    '                    <br>\n' +
    '                    <a href="#/takeorder/{{customer.id}}" class="cardBody btn-link">\n' +
    '                    Take an Order</a> | \n' +
    '                    <a href="#/customerorders/{{customer.id}}" class="cardBody btn-link">\n' +
    '                    View {{ customer.orders.length }} Orders</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<br />\n' +
    '<br /><br />\n' +
    '<br /><br />\n' +
    '<br />');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/dashboard/dashboard.html',
    '<div class="col-md-3">\n' +
    '        <div class="alert alert-info text-center">\n' +
    '            <span class="fa-3x">\n' +
    '			<i class="fa fa-users"></i> {{totalCustomers |number:0}}\n' +
    '		</span>\n' +
    '            <br> Total Customers\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '        <div class="alert alert-info text-center">\n' +
    '            <span class="fa-3x">\n' +
    '			<i class="fa fa-map-marker"></i> {{stateWiseOrders.data.length |number:0}}\n' +
    '		</span>\n' +
    '            <br> Total States\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '        <div class="alert alert-success text-center">\n' +
    '            <span class="fa-3x">\n' +
    '			<i class="fa fa-rupee"></i> {{totalOrders |number}}\n' +
    '		</span>\n' +
    '            <br> Total Orders\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '        <div class="alert alert-warning text-center">\n' +
    '            <span class="fa-3x">\n' +
    '			<i class="fa fa-tree"></i> {{totalGroceryItems |number}}\n' +
    '		</span>\n' +
    '            <br> Total Grocery Products\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '<div class="row">\n' +
    '    <section class="col-md-6">\n' +
    '        <div class="panel panel-primary">\n' +
    '            <div class="panel-heading">\n' +
    '                State wise Orders\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <nvd3 options="stateWiseOrders.options" data="stateWiseOrders.data"></nvd3>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '    <section class="col-md-6">\n' +
    '        <div class="panel panel-primary">\n' +
    '            <div class="panel-heading">\n' +
    '                State wise Customers\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <nvd3 options="stateWiseCustomers.options" data="stateWiseCustomers.data"></nvd3>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '    \n' +
    ' <section class="col-md-12">\n' +
    '        <div class="panel panel-primary">\n' +
    '            <div class="panel-heading">\n' +
    '                Products orders\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <nvd3 options="productWise.options" data="productWise.data"></nvd3>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/grocery/groceries.html',
    '<header class=\'row customers view\'>\n' +
    '    <legend class="col-md-12 text-info">\n' +
    '        <span class="col-md-6">\n' +
    '             <i class=\'fa fa-fw fa-tree fa-2x\'></i>\n' +
    '     Products \n' +
    '        </span>\n' +
    '        <form class="form-inline  col-md-6 text-right">\n' +
    '        <div class="form-group">\n' +
    '                <input type="text" ng-model=\'categoryName\' class=\'form-control\' placeholder="Category Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" ng-model=\'itemName\' class=\'form-control\' placeholder="Product Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button class="btn btn-primary" type="button" data-ng-disabled="!categoryName || !itemName" ng-click="addItem(categoryName,itemName)">Add Product</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </legend>\n' +
    '</header>\n' +
    '<br />\n' +
    '<br>\n' +
    '<div class="row">\n' +
    '    <div class="col-md-3" ng-repeat="aCategory in categories | filter:searchText" ng-show="filteredItems.length>0">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-heading">\n' +
    '                {{aCategory.category | titlecase}}\n' +
    '                <small class="badge pull-right">{{filteredItems.length}}</small>\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <ul class="nav nav-pills nav-stacked">\n' +
    '                    <li ng-repeat="item in filteredItems = (aCategory.items | filter:searchText)">\n' +
    '                        {{item | titlecase}}\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/orders/customerOrders.html',
    '<header class=\'row customer-orders view\'>\n' +
    '    <legend class="col-md-12 text-info">\n' +
    '     <i class="fa fa-fw fa-user fa-2x"></i>\n' +
    '     Customer orders\n' +
    '     <!-- <form class="form-inline pull-right">\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" data-ng-model="newCustomer.firstName" placeholder="First Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" data-ng-model="newCustomer.lastName" placeholder="Last Name">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" data-ng-model="newCustomer.stateName" placeholder="Customer City">\n' +
    '            </div>\n' +
    '             <div class="form-group">\n' +
    '                 <button id="submitCustomer" class="btn btn-primary" type="button" data-ng-disabled="!newCustomer.firstName || !newCustomer.lastName || !newCustomer.stateName" data-ng-click="insertCustomer()">Add Customer</button>\n' +
    '            </div>\n' +
    '        </form> -->\n' +
    '    </legend>\n' +
    '</header>\n' +
    '<br />\n' +
    '<p class="well row">\n' +
    '        <span class="col-md-6 fa-2x">\n' +
    '            {{customer.firstName + \' \' + customer.lastName | titlecase}}<br>{{customer.stateName | titlecase}}\n' +
    '        </span>\n' +
    '        <span class="col-md-6 text-right fa-3x">\n' +
    '            <i class="fa fa-fw fa-rupee"></i> {{customer.totalOrders}}\n' +
    '        </span>\n' +
    '    </p>\n' +
    '<div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div data-ng-include="\'src/app/orders/ordersTable.html\'"/>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/orders/orders.html',
    '<header class=\'row customer-orders view\'>\n' +
    '    <legend class="col-md-12 text-info">\n' +
    '        <i class="fa fa-fw fa-bar-chart fa-2x"></i> All Customer Orders\n' +
    '        <span class="fa-2x pull-right">\n' +
    '            <i class="fa fa-fw fa-rupee"></i>\n' +
    '            {{getOverAllSale() | number:2}}\n' +
    '        </span>\n' +
    '    </legend>\n' +
    '</header>\n' +
    '<div>\n' +
    '    <div class="row">\n' +
    '        <div class="span12" data-ng-repeat="customer in customers  | orderBy:\'lastName\' | filter:searchText">\n' +
    '            <div class="indent">\n' +
    '                <h4><a href="#/customerorders/{{customer.id}}">{{ customer.firstName + \' \' + customer.lastName }}</a></h4>\n' +
    '            </div>\n' +
    '            <div data-ng-include="\'src/app/orders/ordersTable.html\'" />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/orders/ordersTable.html',
    '<div data-ng-controller="OrderChildController">\n' +
    '    <table class="table table-striped table-condensed table-bordered">\n' +
    '        <thead>\n' +
    '            <tr>\n' +
    '                <th data-ng-click="setOrder(\'id\')">Order Id</th>\n' +
    '                <th data-ng-click="setOrder(\'d\')">Order Date</th>\n' +
    '                <th data-ng-click="setOrder(\'d\')">Perticulars</th>\n' +
    '                <th data-ng-click="setOrder(\'quantity\')" class="text-right">Order Amount</th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '            <tr data-ng-hide="customer.orders || customer.orders.length > 0" class="">\n' +
    '                <td colspan="4">\n' +
    '                    <div class="text-center"><strong>No orders found</strong></div>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            <tr ng-repeat="order in customer.orders | orderBy:orderby:reverse">\n' +
    '                <td>{{order.id}}</td>\n' +
    '                <td>{{order.d | date}}</td>\n' +
    '                <td>\n' +
    '                    <div data-ng-include="\'src/app/orders/productItemsTable.html\'"/>\n' +
    '                </td>\n' +
    '                <td class="text-right">\n' +
    '                <i class="fa fa-fw fa-rupee"></i>\n' +
    '                {{order.total | number:2}}\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/orders/productItemsTable.html',
    '<table class="table table-striped table-condensed table-bordered">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>Item</th>\n' +
    '            <th class="text-right">Quantity</th>\n' +
    '            <th class="text-right">Unit Price</th>\n' +
    '            <th class="text-right">Total</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="anItem in order.itemList">\n' +
    '            <td>{{anItem.name}}</td>\n' +
    '            <td class="text-right">{{anItem.quantity}}</td>\n' +
    '            <td class="text-right">{{anItem.rate | number:2}}</td>\n' +
    '            <td class="text-right">\n' +
    '                <i class="fa fa-fw fa-rupee"></i> {{anItem.quantity*anItem.rate | number:2}}</td>\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/orders/takeOrder.html',
    '<header class=\'row customers view\'>\n' +
    '    <legend class="col-md-12 text-info">\n' +
    '        <i class=\'fa fa-fw fa-users fa-2x\'></i> Take Order for {{customer.firstName + \' \' + customer.lastName | titlecase}}\n' +
    '    </legend>\n' +
    '</header>\n' +
    '<br />\n' +
    '<div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '        <form>\n' +
    '            <div class="form-group">\n' +
    '                <label>Item Name</label>\n' +
    '                <input type="text" class="form-control" data-ng-model="newItem.name" \n' +
    '                placeholder="Item Name"\n' +
    '                typeahead="itemName for itemName in itemList | filter:$viewValue | limitTo:20"\n' +
    '                >\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label>Quantity</label>\n' +
    '                <input type="number" class="form-control" data-ng-model="newItem.quantity" placeholder="Quantity">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label>Unit price</label>\n' +
    '                <input type="number" class="form-control" data-ng-model="newItem.rate" placeholder="Unit price">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <span class="fa-2x pull-left">\n' +
    '                <i class="fa fa-fw fa-rupee"></i>\n' +
    '                 {{newItem.quantity * newItem.rate | number:2}}\n' +
    '             </span>\n' +
    '            </div>\n' +
    '            <div class="form-group text-right">\n' +
    '                <button class="btn btn-danger" type="button" data-ng-click="newItem=resetItem()">Clear</button>\n' +
    '\n' +
    '                <button class="btn btn-primary" type="button" data-ng-disabled="!newItem.name || !newItem.quantity || !newItem.rate" data-ng-click="addItem(newItem)">Add Item</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '        <label class="pull-right">Placing this order on {{order.d|date}}</label><br>\n' +
    '        <div data-ng-include="\'src/app/orders/productItemsTable.html\'" />\n' +
    '        <div class="form-group">\n' +
    '                <span class="fa-2x pull-left">\n' +
    '                <i class="fa fa-fw fa-rupee"></i>\n' +
    '                 {{newItem.quantity * newItem.rate | number:2}}\n' +
    '             </span>\n' +
    '        <div class="form-group text-right">\n' +
    '                <button class="btn btn-danger" type="button" data-ng-click="order=resetOrder()">Clear</button>\n' +
    '\n' +
    '                <button class="btn btn-primary" type="button" data-ng-disabled="order.itemList.length<1" data-ng-click="addOrder()">Place Order</button>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<br />\n' +
    '<br />\n' +
    '<br />\n' +
    '<br />\n' +
    '<br />\n' +
    '<br />\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/components/navbar/navbar.html',
    '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n' +
    '    <div class="container">\n' +
    '        <a class="navbar-brand" href="#/">\n' +
    '            {{vm.appName}}</a>\n' +
    '        <ul class="nav navbar-nav">\n' +
    '            <li ng-repeat="item in vm.menu" ng-class="{\'active\':vm.getClass(item.link)}">\n' +
    '                <a ng-href="{{item.link}}">\n' +
    '                     {{item.name}}\n' +
    '                </a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <form class="nav navbar-nav pull-right navbar-form" role="search">\n' +
    '            <div class="form-group has-feedback">\n' +
    '                <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term"\n' +
    '                ng-model="$root.searchText">\n' +
    '                <span class="glyphicon glyphicon-search form-control-feedback"></span>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/app/components/footer/footer.html',
    '<div class="navbar navbar-fixed-bottom navbar-inverse">\n' +
    '    <div class="navbar-inner">\n' +
    '        <div class="container">\n' +
    '            <footer>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-12 navbar-text">\n' +
    '                        Created by Siva Kumar @ skumar244@sapient.com\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </footer>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
