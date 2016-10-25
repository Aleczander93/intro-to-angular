

(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

    //angular uses $ a lot
    MainController.$inject = ['$scope', 'TodoService']; //what tools the MainController function needs

    function MainController($scope, TodoService){ //scope is bridge to the DOM
      $scope.todos = TodoService.get();
      $scope.createTodo = createTodo;
      $scope.deleteTodo = deleteTodo;

      function createTodo(newTodo){
        TodoService.create(newTodo);
        $scope.newTodo = '';
      }
      function deleteTodo(index){
        TodoService.delete(index);
      }
  }
}());

// console.log(TodoService.get());
// TodoService.create('make more todos');
// console.log(TodoService.get());
// TodoService.update(0, 'buy some ramen');
// console.log(TodoService.get());
// TodoService.delete(2);
// console.log(TodoService.get());
