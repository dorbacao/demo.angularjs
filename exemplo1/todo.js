function ListaComprasController($scope){

$scope.itens = [
	{produto: 'Leite', quantidade:2, comprado:false},
	{produto: 'Coca-Cola', quantidade:12, comprado:true}
];

$scope.adicionaItem = function(newItem){	
	var prd = {produto:newItem.produto, quantidade:newItem.produto, comprado:false};
	itens.push(prd);
}

}

