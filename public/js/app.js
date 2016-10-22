(function() {

  angular.module('intro', [])
    .controller('MainController', MainController);

//angular uses $ a lot
  MainController.$inject = ['$scope']; //what tools the MainController function needs

  function MainController($scope){ //scope is bridge to the DOM
    console.log('Now main contolling...');
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmonpqrstuvwxyz'.split(''); //easy array trick
  }
}());
