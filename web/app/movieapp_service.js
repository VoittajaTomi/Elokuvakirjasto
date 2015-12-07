/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


MovieApp.service("FirebaseService", function($firebaseArray){
   
   var firebaseRef = new Firebase("https://scorching-fire-2758.firebaseio.com/movies");
   
   var movies = $firebaseArray(firebaseRef);
   
   this.getMovies= function(){
       return movies;
   }
   
   this.addMovie=function(movie){
       movies.$add(movie);
   }
   
    
    
    
});