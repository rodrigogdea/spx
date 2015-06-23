'use strict';

angular.module('spxApp')
  .controller('FormulasListCtrl', function ($scope) {
    $scope.formulas = formulas;
    $scope.remove = function(id) {
        formulas.splice(id, 1);
    };
  });

angular.module('spxApp')
  .controller('FormulasEditCtrl', function ($scope, $routeParams, ngDialog) {
    $scope.fases = fases;
    
    if($routeParams.id){
        $scope.formula = formulas[$routeParams.id];
    }else{
        $scope.formula = {};
    }
    
    $scope.update = function(id) {
        if($routeParams.id){
//            formulas.splice(id, 1, $scope.formula);
        }else{
            formulas.push($scope.formula);
        }
    };
    
    $scope.removeFase = function(id) {
        $scope.formula.fases.splice(id, 1);
    };
    
    $scope.openAddFase = function() {
        $scope.selectedFase = null;
        ngDialog.open({ template: 'addFaseDialog', scope: $scope });
        
    };
    
    $scope.selectFase = function(faseId){
        
        $scope.selectedFase = $scope.fases[faseId];
    };
    
    $scope.endSelection = function(){
        if($scope.selectedFase != null){
            $scope.formula.fases.push($scope.selectedFase);
        }
        return true;
    };
    
  });

