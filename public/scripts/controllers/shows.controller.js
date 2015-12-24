angular.module('app.controllers.shows', [
	'app.models.shows',
])
    .controller('ShowsController', function ShowsController($scope, $rootScope, ShowsModel) {
        var shows = this;

        console.log('getting to the controller');

        ShowsModel.getShows();
})
;