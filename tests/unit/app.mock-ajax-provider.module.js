(function () {

    'use strict';
    angular.module('mock-ajax', [])
            .value('TodoService', {
                getList: function () {
                    return {
                        then: function (callback) {
                            jasmine.getJSONFixtures().fixturesPath = 'base/tests/mocks';
                            return callback({data:getJSONFixture('todo-list.json')});
                        }
                    };
                }
            })
})();
