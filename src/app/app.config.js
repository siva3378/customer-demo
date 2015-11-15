(function () {
    'use strict';

    var main = angular.module('app.main');

    var config = {
        appTitle: 'Customers Management App',
        copyRightText: 'Copy Right Text will be here',
        author:{
            name:'Siva Kumar',
            email:'skumar244@sapient.com'
        }
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
        },
        {
            name: "TODO",
            link: "#/todo"
        }
    ]
    main.value('config', config);
    main.value('views', views);
})();
