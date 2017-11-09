(function() {
    'use strict';

    angular.module('app', [
        "ui.bootstrap"
        // Angular modules

        // Custom modules

        // 3rd Party Modules

    ]);
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController)

    MainController.$inject = [];

    function MainController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() {
            vm.selectFaIndex = 0;
            vm.list1 = [];
            vm.list2 = [];

            vm.list = [{
                    id: 0,
                    name: 'prashant biradar'
                }, {
                    id: 1,
                    name: 'amol aswar'
                }, {
                    id: 2,
                    name: 'monika chauvan'
                },
                {
                    id: 3,
                    name: 'rohit bhosale'
                }, {
                    id: 4,
                    name: 'Narun s'
                }
            ];

            angular.copy(vm.list, vm.list1);


        };
        vm.moveRight = () => {
            //move selected.
            if (vm.selectedList1Index !== undefined && vm.selectedList1Index !== null) {
                vm.list2.push(vm.list1[vm.selectedList1Index]);
                vm.list1.splice(vm.selectedList1Index, 1);
            }
        };

        vm.moveLeft = () => {
            //move selected.
            if (vm.selectedList2Index !== undefined && vm.selectedList2Index !== null) {
                vm.list1.push(vm.list2[vm.selectedList2Index]);
                vm.list2.splice(vm.selectedList2Index, 1);
            }
        };
        vm.onSelect = (item, model, label) => {
            for (let i = 0; i < vm.list1.length; i++) {
                if (item.id === vm.list1[i]['id']) {
                    vm.selectedList1Index = i;
                    vm.moveRight();
                }
            }
        }
    }
})();