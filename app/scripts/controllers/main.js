'use strict';

/**
 * @ngdoc function
 * @name spxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spxApp
 */
angular.module('spxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
