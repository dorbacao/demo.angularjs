var todo = angular.module('todo',[]).config(function($routeProvider){

	$routeProvider.when('/login',{
			templateUrl:'Login.html',
			controller:'LoginController'
	});

	$routeProvider.when('/home',{
			templateUrl:'Home.html',
			controller:'HomeController'
	});

	$routeProvider.otherwise({redirectTo:'/login'});

});

todo.controller('LoginController', function($scope, $location){
	
	$scope.credencial = {login:'', senha:''};

	$scope.logar = function ()
	{
		var login = $scope.credencial.login;
		var senha = $scope.credencial.senha;

		if(login == 'dorba' && senha == '845756'){
			$location.path('/home');
		}

		else{alert('Usuário e/ou Senha Inválido')}
	};
});

todo.controller('HomeController', function($scope, $location){

	$scope.tarefa = {nome:'', data:''};
	$scope.tarefas = [];

	$scope.adicionar = function (){
		var valNome = $scope.tarefa.nome;
		var valData = $scope.tarefa.data;

		$scope.tarefas.push({nome:valNome, data:valData});
	};

	$scope.excluir = function ($index){
		
		$scope.tarefas.splice($index, 1 );
	};
});




