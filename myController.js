app.controller('MyController', function($scope, Data) {
    $scope.groups = Data.groups;
    $scope.ungroupedItems = Data.ungroupedItems;
    
    $scope.selectedGroupIndex = 0;
    $scope.selectedGroup = $scope.groups[0];

    $scope.moveRight = function(){
        var selectedGroup = $scope.selectedGroup;
        if(!selectedGroup){
            alert("Please select some group");
            return;
        }

        var selectedItems = $scope.ungroupedItems.filter(function(item){
            return item.isSelected;
        });

        if(selectedItems.length === 0){
            alert("Please select atleast one item");
            return;
        }

        $scope.ungroupedItems = $scope.ungroupedItems.filter(function(item){
            return !item.isSelected;
        })

        selectedItems.forEach(function(item){
            item.isSelected = false;
        });

        selectedGroup.items = selectedGroup.items.concat(selectedItems);
    }

    $scope.moveLeft = function(){
        var selectedGroup = $scope.selectedGroup;
        if(!selectedGroup){
            alert("Please select some group");
            return;
        }
        var selectedItems = selectedGroup.items.filter(function(item){
            return item.isSelected;
        });

        if(selectedItems.length === 0){
            alert("Please select atleast one item");
            return;
        }

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
            alert("Group with name " + $scope.newGroupName  + " already exists")
            return;
        }

        $scope.groups.push({
            name: $scope.newGroupName,
            items: []
        });
    }

    $scope.toggleIsActive= function($scope){
        $scope.isActive = $scope.isActive ? false: true;
    }

});
