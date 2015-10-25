//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

angular.module('app.main').service('stateWiseService', function(customersService) {
    var stateWiseCustomers, stateWiseOrders;

    stateWiseOrders = getTemplate();
    stateWiseCustomers = getTemplate();
    init();

    this.getOrders = function() {
        return stateWiseOrders;
    }
    this.getCustomers = function() {
        return stateWiseCustomers;
    }

    function init() {
        var customers = customersService.getCustomers();
        var tempOrders = {};
        var tempCustomers = {};

        angular.forEach(customers, function(aCust) {
            if (Object.keys(tempOrders).indexOf(aCust.stateName) < 0) {
                tempOrders[aCust.stateName] = 0;
                tempCustomers[aCust.stateName] = 0;
            }
            tempOrders[aCust.stateName] += customersService.calculateTotalOrders(aCust);
            tempCustomers[aCust.stateName]++;
        })
        angular.forEach(tempOrders, function(value, key) {
            stateWiseOrders.data.push({
                stateName: key,
                value: value
            })
        });
        angular.forEach(tempCustomers, function(value, key) {
            stateWiseCustomers.data.push({
                stateName: key,
                value: value
            })
        });
    };

    function getTemplate() {
        return {
            options: {
                chart: {
                    type: 'pieChart',
                    height: 500,
                    x: function(d) {
                        return d.stateName;
                    },
                    y: function(d) {
                        return d.value;
                    },
                    showLabels: false,
                    showValues: true,
                    valueFormat: function(d) {
                        return d3.format(',.1f')(d);
                    },
                    yAxis: {
                        axisLabel: 'Y Axis',
                        axisLabelDistance: 30
                    },
                    transitionDuration: 500,
                    labelThreshold: 0.01,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            },
            data: []
        };
    }
});
