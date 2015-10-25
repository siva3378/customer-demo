(function () {
    'use strict';

    var main = angular.module('app.main');

    var config = {
        appTitle: 'Customers Management App',
        copyRightText: 'Copy Right Text will be here',
    };
    var views = [
    {
            name: "Dashboard",
            link: "#/dashboard"
        },
        {
            name: "Customers",
            link: "#/customers"
        },
        {
            name: "Orders",
            link: "#/orders"
        },
        {
            name: "Products",
            link: "#/groceries"
        }
    ]
    main.value('config', config);
    main.value('views', views);
})();
