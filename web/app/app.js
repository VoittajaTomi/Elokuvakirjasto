// Toteuta moduulisi tänne

var MovieApp = angular.module("MovieApp", ["firebase", "ngRoute"]);


MovieApp.config(function($routeProvider){
  
    $routeProvider.when("/", {controller: "ListMoviesController", templateUrl: "app/list.html"});
    $routeProvider.when("/movies", {controller: "ListMoviesController", templateUrl: "app/list.html"});
    $routeProvider.when("/movies/new", {controller: "AddMovieController", templateUrl: "app/new.html"});
    $routeProvider.when("/movies/:key", {controller:"ViewMovieController", templateUrl: "app/view.html"});
    $routeProvider.when("/movies/:key/edit", {controller:"EditMovieController", templateUrl: "app/edit.html"});
    $routeProvider.when("/movies/:key/remove", {controller:"ListMovieController", templateUrl: "app/edit.html"});
    $routeProvider.otherwise({redirectTo: "/"});
    
});

MovieApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);