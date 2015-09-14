//Define Angular App and dependencies
var testApp = angular.module('testApp', ['ui.bootstrap']);
//Tabs Controller (using Angular Bootstrap UI)
angular.module('ui.bootstrap').controller('TabsCtrl', function ($scope, $window, $http, $timeout) {	
 $scope.tabs = [
    {title: 'Welcome', content: [], isLoaded:false, active:true},
    {title:'Contact Info', content: [], isLoaded:false},
    {title:'Favorite Music', content:[], isLoaded:false},
    {title: 'Dev Skills', content: [], isLoaded:false},
  ]; 
$scope.getMarkup=function($index){
    if($scope.tabs.isLoaded){
      return
    }
    $timeout(function(){
        //overkill for this, but this could potentially up a timeout function with json data
        //leaving json blank for now
        var data='data.json';
            $http.get(data).then(function(response){
            console.log("response is", response);    
            $scope.tabs.content=response.data[0].info;
            $scope.tabs.isLoaded=true;
        });
    
    },100)
  }
// data for select element's ng-options. Overkill for this mini-test, but... 
// ... lays a foundation for more (or, more realistic) by using an array of objects ...
// ... instead of a simple array or hard-coding your <option> tags: 
$scope.items = [
                {name: 'Rock'},
                {name: 'Blues'},
                {name: 'Jazz'},
                {name: 'Opera'},
                {name: 'Southern-Gothic-Rockabilly!!'}];
$scope.genre={};
$scope.someFunction=function(){
    console.log("this is just a log, but could be a function to do something with the selected data, which is:", $scope.genre.selectedItem);
};
             
});

// little custom directive to set tab content
testApp.directive("info", function() {
    return {
        restrict: "E",
        templateUrl: "info.html"
    };
});

