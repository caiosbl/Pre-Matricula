angular.module('app')
  .factory('UserService', function($rootScope,AuthService) {
   const service = {};

  
   service.isRegistered = function (){
    return true;
  }

  service.isCordinator = function (){
    return true;
  }

  service.getMatricula = function(){
      return 123;
  }

  service.getCurso = function(){
      return "PPC 08/2017 - Curso Novo";
  }



  service.isCCC = function(){
    email = $localStorage.UserDetails.email.split("@");
    return email[1] == "ccc.ufcg.edu.br";

  }



    return service;
  
});