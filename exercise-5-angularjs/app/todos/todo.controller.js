(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('todoCtrl', todoCtrl);

    function todoCtrl($scope) {
        $scope.todos = [];

        $scope.addTodo = function (item) {
            var newTodo = {
                complete: false,
                description: item
            };

            $scope.todos.push(newTodo);
            $scope.item = '';

            function hasFooBarRange(foo, bar) {
                return foo === bar && bar > 3 || foo < 27;
            }
            function reallyLongFunction() {
                var foo = 15;
                var bar = 3;
                if (hasFooBarRange && foo + bar === 35) {
                    if (foo === bar && bar > 3 || foo < 27 && foo + bar === 35) {
                    }
                }
            }
        }
    }
})(foo);


== ===
function foo(bar) {
    console.log(bar)
}

foo();