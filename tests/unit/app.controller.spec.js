describe("The app main module - ", function(){
	beforeEach(module('app.main'));
	
	describe("App Controller", function(){
		var appCtrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();

			// appCtrl = $controller('AppCtrl');

			appCtrl = $controller('AppCtrl', {
				$scope:scope
			});
		}));
		it("should be defined", function(){
			expect(appCtrl).toBeDefined();
		});

		it("categories - should be defined", function(){
			expect(scope.categories).toBeDefined();
		})
		it("categories - should be defined", function(){
			expect(scope.categories).toBeDefined();
		})
		describe("addTask method", function(){
			it("should be defined", function(){
				expect(scope.addTask).toBeDefined();
			});
			it("should add a task to categories-work list", function(){
				var aKey = Object.keys(scope.categories)[0];
				var bfrLen = scope.categories[aKey].length;
				var mockInput = [aKey, "Task Name", "Task Description"];
				scope.addTask(mockInput);
				expect(scope.categories[aKey].length>bfrLen).toBeTruthy();
			})

			it("should add a new category", function(){
				var oldKeys = Object.keys(scope.categories);
				var mockInput = ["abc123", "Task Name", "Task Description"];
				scope.addTask(mockInput);
				var newKeys = Object.keys(scope.categories);
				expect(oldKeys.length<newKeys.length).toBeTruthy();
			})
		})
	});

});