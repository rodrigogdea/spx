'use strict';

angular.module('spxApp')
  .controller('OrdenesListCtrl', function ($scope) {
    $scope.ordenes = ordenes;
    $scope.remove = function(id) {
        ordenes.splice(id, 1);
    };
  });

angular.module('spxApp')
  .controller('OrdenesEditCtrl', function ($scope, $routeParams, ngDialog) {
    $scope.formulas = formulas;
    
    if($routeParams.id){
        $scope.orden = ordenes[$routeParams.id];
    }else{
        $scope.orden = { 'fecha': new Date(), 'estado': 'En progreso...' };
    }
    
    $scope.update = function(id) {
        if($routeParams.id){
//            ordenes.splice(id, 1, $scope.orden);
        }else{
            ordenes.push($scope.orden);
        }
    };
    
    $scope.openSelectFormula = function() {
        $scope.selectedFormula = {};
        ngDialog.open({ template: 'selectFormulaDialog', scope: $scope });
        
    };
    
    $scope.selectFormula = function(formulaId){
        $scope.selectedFormula = $scope.formulas[formulaId];
    };
    
    $scope.endSelection = function(){
        $scope.orden.formula = $scope.selectedFormula;
        return true;
    };
    
  });

