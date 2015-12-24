var app = angular.module('app', ['ui.router', 'app.models.shows'])
.controller('mainController', ['ShowsModel', function ($scope, $http, ShowsModel) {
	$http.get('/')
		.success(function(data) {
			console.log($scope.shows);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
}]);