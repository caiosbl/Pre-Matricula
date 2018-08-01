angular.module('app')
  .controller('MatriculaController', function ($scope,$rootScope, $location, AuthService, $localStorage,UserService,CourseService) {

    $rootScope.activetab = $location.path();

    $scope.isMatriculaValida = false;
    $scope.numero_creditos = 0;
    $scope.Disciplines = CourseService.getDisciplines();
    $scope.Disciplines_Added = [];
    $scope.search = "";

    $scope.addDiscipline = function(discipline){
      if(!$scope.Disciplines_Added.includes(discipline))
         $scope.Disciplines_Added.push(discipline);
         updateCreditos();
    }

    $scope.removeDiscipline = function(discipline){
     index = $scope.Disciplines_Added.indexOf(discipline);
     if(index >= 0) $scope.Disciplines_Added.splice(index);
     updateCreditos();
    }

    function update_matricula_valida(){
      if($scope.numero_creditos > 24 || $scope.numero_creditos < 12) 
      $scope.isMatriculaValida = false; 
      else 
      $scope.isMatriculaValida = true;
    }

    $scope.isAdded = function(discipline){
      return $scope.Disciplines_Added.includes(discipline);
    }


    $scope.submitMatricula = function(){

      preMatricula = 
      {
        "email" : UserService.getMatricula(),
          "disciplina" :  $scope.Disciplines_Added }  
    }

    function updateCreditos(){
      creditos = 0;

      for(i = 0; i < $scope.Disciplines_Added.length; i++ )
       creditos += $scope.Disciplines_Added[i].creditos;

       $scope.numero_creditos = creditos;
       update_matricula_valida();
      

    }
});



