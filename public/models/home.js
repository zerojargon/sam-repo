angular.module('app.models.shows', [

])
.service('ShowsModel', function($http, $scope) {
console.log('here.home.js');
	var model = this;
	model.getShows = function() {
		$http.get('/json/showsRequest.json').success(function(data) {
		   $scope.shows = data;
		});
	};
})