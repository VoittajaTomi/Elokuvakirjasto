/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


MovieApp.service("FirebaseService", function($firebaseArray){
   
   var firebaseRef = new Firebase(FIREBASE_URL + "/movies");
   
   var movies = $firebaseArray(firebaseRef);
   
   this.getMovies= function(){
       return movies;
   }
   
   this.addMovie=function(movie){
       movies.$add(movie);
   }
   
   
   this.getMovie=function(key,done){
       console.log("getMovie");
       movies.$loaded(function(){
           console.log("hello from $loaded, key\""+key+"\"");
           done(movies.$getRecord(key));
       });
   }
   

    this.saveMovie = function(movie){
        
        movies.$save(movie);
        
    }
    
    this.removeMovie = function(movie){
        movies.$remove(movie);
    }


    
});

MovieApp.service("OMDBService", function($http){

   this.findMovie = function(name, year){

	return $http.get("http://www.omdbapi.com", { params: { s: name, y: year }});
	} 


});