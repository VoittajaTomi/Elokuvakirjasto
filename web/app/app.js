// Toteuta moduulisi tänne

var MovieApp = angular.module("MovieApp", ["firebase", "ngRoute"]);


MovieApp.config(function($routeProvider){
  
    $routeProvider.when("/", {controller: "ListMoviesController", templateUrl: "app/list.html"});
    $routeProvider.when("/movies", {controller: "ListMoviesController", templateUrl: "app/list.html"});
    $routeProvider.when("/movies/new", {controller: "AddMovieController", templateUrl: "app/new.html"});
    $routeProvider.otherwise({redirectTo: "/"});
    
});