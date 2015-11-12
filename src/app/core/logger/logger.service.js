
(function () {
    'use strict';

    angular
        .module('core.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr','AppMsgs'];
    /* @ngInject */
    function logger($log, toastr,AppMsgs) {
        var service = {
            showToasts: true,
            error: error,
            info: info,
            success: success,
            warning: warning,
            exception:exception,
            getMessageFromKeys:getMessageFromKeys,
            clearToastr: clearToastr,

            // straight to console; bypass toastr
            log: $log.log
        };
        var clientLevel = "ClientLogger : ";
        return service;
        /////////////////////
        /**
        * Send keys specified in mesages.constant.js file
        * ":" is the default separator
        * @param  {[type]} keys
        * @return {[type]}
        * @ngInject
        */
        function getMessageFromKeys(keys){
            var seperator = ":";
            var keyList = keys.split(seperator);
            var messageList = keyList.map(function(aKey){
                return AppMsgs[aKey] || aKey;
            });
            return messageList.join(seperator);
        }
        function error(keys, data, title) {
            var message=getMessageFromKeys(keys);
            //Notification message
            toastr.error(message, title);
            //Console logger
            $log.error(clientLevel + message, data);
        }
        function exception(message, data, title){
            //Console logger
            $log.error(clientLevel + message, data);
        }
        function info(keys, data, title) {
            var message=getMessageFromKeys(keys);
            //Notification message
            toastr.info(message, title);
            //Console logger
            $log.info(clientLevel + message, data);
        }

        function success(keys, data, title) {
            var message=getMessageFromKeys(keys);
            //Notification message
            toastr.success(message, title);
            //Console logger
            $log.info(clientLevel + message, data);

        }

        function warning(keys, data, title) {
            var message=getMessageFromKeys(keys);
            //Notification message
            toastr.warning(message, title);
            //Console logger
            $log.warn(clientLevel + message, data);
        }

        function clearToastr() {
            toastr.clear();
        }
    }
}());