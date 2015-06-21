'use strict';

angular.module('spxApp')
  .controller('FasesListCtrl', function ($scope) {
    $scope.fases = fases;
    $scope.remove = function(id) {
        fases.splice(id, 1);
    };
  });

angular.module('spxApp')
  .controller('FasesEditCtrl', function ($scope, $routeParams, ngDialog) {
    $scope.fases = fases;
    
    if($routeParams.id){
        $scope.fase = fases[$routeParams.id];
    }else{
        $scope.fase = {};
    }
    
    $scope.update = function(id) {
        if($routeParams.id){
//            fases.splice(id, 1, $scope.formula);
        }else{
            fases.push($scope.formula);
        }
    };
        
  });

