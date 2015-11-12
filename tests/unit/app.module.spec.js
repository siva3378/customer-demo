describe("The app main module - ", function(){
	beforeEach(module('app.main'));
	
	describe("Dependencies", function(){
		var deps;
		beforeEach(function(){
			deps = angular.module('app.main').value('app.main').requires;
		})
		it("should have core - module", function(){
			expect(deps.indexOf('app.core')).toBeGreaterThan(-1);
		})
	})
	describe("Route Config", function(){
		var appRoutes;

		beforeEach(inject(function($route){
			appRoutes = $route.routes;
		}));
		describe("view - customers", function(){
			var routeLink = "/customers";
			var controller = "CustomersController";
			var templateUrl = 'src/app/customers/customers.html';

			it("should configured customers route", function(){
				expect(appRoutes[routeLink]).toBeDefined();
			})
			it("should configured customers controller", function(){
				expect(appRoutes[routeLink].controller).toBe(controller);
			})
			it("should configured customers templateUrl", function(){
				expect(appRoutes[routeLink].templateUrl).toBe(templateUrl);
			})
		});
	})
});