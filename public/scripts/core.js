var app = angular.module('app', ['ui.router', 'app.models.shows']);
function mainController($scope, $http) {
	$http.get('/')
		.success(function(data) {
			console.log($scope);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
}