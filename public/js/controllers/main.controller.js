

(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

    //angular uses $ a lot
    MainController.$inject = ['$scope', 'TodoService']; //what tools the MainController function needs

    function MainController($scope, TodoService){ //scope is bridge to the DOM
      $scope.todos = TodoService.get();
      $scope.createTodo = createTodo;
      $scope.deleteTodo = deleteTodo;
      $scope.editTodo = editTodo;
      $scope.saveTodo = saveTodo;

      function createTodo(newTodo){
        TodoService.create(newTodo);
        $scope.newTodo = '';
      }
      function deleteTodo(index){
        TodoService.delete(index);
      }
      function editTodo(todo){
        todo.isBeingEdited = true;
      }
      function saveTodo(index, todo){
        TodoService.update(index, todo.desc);
        todo.isBeingEdited = false;
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
