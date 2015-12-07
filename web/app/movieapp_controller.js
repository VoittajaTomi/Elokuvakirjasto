/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


MovieApp.controller("ListMoviesController", function($scope, FirebaseService){
   
    $scope.movies = FirebaseService.getMovies();

    

    
});

MovieApp.controller("AddMovieController", function($scope, $location, FirebaseService){
   
    $scope.addMovie=function(){
        
        var movie = { name : $scope.movieName, year : $scope.movieYear, director: $scope.movieDirector, description: $scope.movieDescription }
        
        FirebaseService.addMovie(movie);
        $location.path("/movies");
        
    }
    
});