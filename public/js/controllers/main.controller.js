(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

    //angular uses $ a lot
    MainController.$inject = ['$scope']; //what tools the MainController function needs

    function MainController($scope){ //scope is bridge to the DOM
      console.log('Now main contolling...');
      $scope.person = 'Bob';
      $scope.letters = 'abcdefghijklmonpqrstuvwxyz'.split(''); //easy array trick
      $scope.saySurprise= saySurprise;

      function saySurprise(person){
      alert('Hey' + person + '...there is a clown behind you!');
    }
  }
}());
