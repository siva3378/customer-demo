//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

angular.module('app.main').service('productWiseService', function(customersService) {
    var chartInfo = {
        options: {
            chart: {
                type: 'discreteBarChart',
                height: 700,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 50
                },
                x: function(d) {
                    return d.itemName;
                },
                y: function(d) {
                    return d.quantity;
                },
                showValues: true,
                valueFormat: function(d) {
                    return d3.format(',.1f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'Products',
                    // tickFormat: function(d) {
                    //     return d3.time.format('%x')(new Date(d))
                    // },
                    rotateLabels: 90,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Quantity',
                    rotateLabels: 90,
                    axisLabelDistance: 35,
                    // tickFormat: function(d) {
                    //     return d3.format(',.1f')(d);
                    // }
                }
            }
        },
        data: [{
            "key": "Quantity",
                            "bar": false,
            "values": []
        }]
    };
    this.get = function() {
        populateChartData();
        return chartInfo;
    }

    function populateChartData() {
        var customers = customersService.getCustomers();
        var temp = {};
        angular.forEach(customers, function(aCust) {
            angular.forEach(aCust.orders, function(anOrder) {
                angular.forEach(anOrder.itemList, function(anItem) {
                    if (Object.keys(temp).indexOf(anItem.name) < 0) {
                        temp[anItem.name] = 0;
                    }
                    temp[anItem.name] += anItem.quantity;
                })
            })
        })
        angular.forEach(temp, function(value, key) {
            chartInfo.data[0].values.push({
                itemName:key,
                quantity:value
            });
        });
    };
});
