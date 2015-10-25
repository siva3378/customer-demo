//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

angular.module('app.main').service('groceryService', function(STORAGE_KEY, $localStorage) {
    var groceries = $localStorage[STORAGE_KEY.GROCERY_LIST];

    this.getGroceryList = function() {
        return groceries;
    };
    this.getAllInArray = function(){
        var list = [];
        groceries.map(function(aCategory){
            aCategory.items.map(function(item){
                list.push(item)
            })
        })
        return list;
    }
    this.addGroceryItem = function(categoryName, itemName){
        var isCategoryFound=false;
        for(var i=0;i<groceries.length;i++){
            aCategory = groceries[i];
            if(aCategory.category.toLowerCase().trim()===categoryName.toLowerCase().trim()){
                isCategoryFound = true;
                aCategory.items.push(itemName);
                break;
            }
        }
        if (!isCategoryFound) {
            //create a new category in category list
            groceries.push({
                category:categoryName,
                items:[itemName]
            })
        }
        $localStorage[STORAGE_KEY.GROCERY_LIST] = groceries;
    }
});
