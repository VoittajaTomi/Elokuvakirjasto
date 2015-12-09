/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


MovieApp.controller("ListMoviesController", function($scope, FirebaseService, OMDBService){
   
   $scope.omdbSearched = false;;
   
    $scope.movies = FirebaseService.getMovies();

    $scope.deleteMovie = function(movie){
        FirebaseService.removeMovie(movie);
    }
    
    $scope.searchOMDB = function(){
        
        $scope.omdbSearched = true;
        
        OMDBService.findMovie($scope.omdbName, $scope.omdbYear).success(function(movies){
            $scope.omdbResults = movies.Search;
            console.log($scope.omdbResults);
        });
        
    }

    
});

MovieApp.controller("AddMovieController", function($scope, $location, FirebaseService){

    $scope.addMovie=function(){
        
        var movie = { name : $scope.movieName, year : $scope.movieYear, director: $scope.movieDirector, description: $scope.movieDescription }
        
        FirebaseService.addMovie(movie);
        $location.path("/movies");
        
    }
    
});

MovieApp.controller("ViewMovieController", function($scope, $location, $routeParams, FirebaseService){
    
    console.log("click");
    
    $scope.params=$routeParams;
    $scope.movies = FirebaseService.getMovies();


    FirebaseService.getMovie($routeParams.key,function(movie){
        $scope.movie = movie;
        console.log("in callback " + movie);
    });

 

})

MovieApp.controller("EditMovieController", function($scope, $location, $routeParams, FirebaseService){

    var currentMovie;
    
    FirebaseService.getMovie($routeParams.key,function(movie){
        currentMovie = movie;
        $scope.movieName = movie.name;
        $scope.movieYear = movie.year;
        $scope.movieDirector = movie.director;
        $scope.movieDescription = movie.description;
        
    });
    
    $scope.saveMovie=function(){
        
        currentMovie.name = $scope.movieName;
        currentMovie.description = $scope.movieDescription;
        currentMovie.director = $scope.movieDirector;
        currentMovie.year = $scope.movieYear;
        
        console.log(currentMovie);
        FirebaseService.saveMovie(currentMovie);
        
        
        $location.path("/movies/"+$routeParams.key);
        
    }
});