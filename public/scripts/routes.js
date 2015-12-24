angular.module('app')
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state('default', {
		  url: "/",
		  templateUrl: "/views/test2.tpl.html"
		})
		.state('shows', {
			controller: 'ShowsController as showsCtrl',
		  url: "/shows",
		  templateUrl: "/views/test.tpl.html"
		});
	});