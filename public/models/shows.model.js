angular.module('app.models.shows', [

])
.service('ShowsModel', function ShowsModel($http, $q, $rootScope){
	var model = this;
	model.getShows = function() {
		$http.get('/json/showsRequest.json').success(function(data) {
		   console.log(data);
		});
	};
})
;