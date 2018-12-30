var app = angular.module('myApp', []);

app.service('Data', function(){
    var groups =  [
        {
            name: "group1",
            items: [
                {
                    name:  "item1",
                },
                {
                    name:  "item2",
                },
                {
                    name:  "item3",
                },
            ],
        },
        {
            name: "group2",
            items: [
                {
                    name:  "item4",
                },
                {
                    name:  "item5",
                },
                {
                    name:  "item6",
                },
                {
                    name:  "item7",
                },
            ],
        }, 
    ];

    var ungroupedItems = [
        {
            name:  "item8",
        },
        {
            name:  "item9",
        },
        {
            name:  "item10",
        },
    ]

    return {
        groups: groups,
        ungroupedItems: ungroupedItems,
    }
});

app.controller('MyController', function($scope, Data) {
    $scope.groups = Data.groups;
    $scope.ungroupedItems = Data.ungroupedItems;
    
    $scope.selectedGroupIndex = 0;

    $scope.moveRight = function(){
        var selectedGroup = $scope.groups[$scope.selectedGroupIndex]
        var selectedItems = $scope.ungroupedItems.filter(function(item){
            return item.isSelected;
        });

        $scope.ungroupedItems = $scope.ungroupedItems.filter(function(item){
            return !item.isSelected;
        })

        selectedItems.forEach(function(item){
            item.isSelected = false;
        });

        selectedGroup.items = selectedGroup.items.concat(selectedItems);
    }

    $scope.moveLeft = function(){
        var selectedGroup = $scope.groups[$scope.selectedGroupIndex]
        var selectedItems = selectedGroup.items.filter(function(item){
            return item.isSelected;
        });

        selectedGroup.items = selectedGroup.items.filter(function(item){
            return !item.isSelected;
        });

        selectedItems.forEach(function(item){
            item.isSelected = false;
        });

        $scope.ungroupedItems = $scope.ungroupedItems.concat(selectedItems);
    }

    var findIndex = function(arr, key, val){
        for(var i=0; i<arr.length; i++){
            if(arr[i][key] === val){
                return i;
            }
        }
        return -1;
    }

    $scope.createGroup = function(){
        if(findIndex($scope.groups, 'name', $scope.newGroupName) >= 0){
            console.log("name already exists")
            return;
        }

        $scope.groups.push({
            name: $scope.newGroupName,
            items: []
        });
    }

});
