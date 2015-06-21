'use strict';

/**
 * @ngdoc overview
 * @name spxApp
 * @description
 * # spxApp
 *
 * Main module of the application.
 */
angular
  .module('spxApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/formulas', {
        templateUrl: 'views/formulas/formulasList.html',
        controller: 'FormulasListCtrl'
      })
      .when('/formulas/edit/:id', {
        templateUrl: 'views/formulas/formulasEdit.html',
        controller: 'FormulasEditCtrl'
      })
      .when('/formulas/new', {
        templateUrl: 'views/formulas/formulasEdit.html',
        controller: 'FormulasEditCtrl'
      })
      .when('/fases', {
        templateUrl: 'views/fases/fasesList.html',
        controller: 'FasesListCtrl'
      })
      .when('/fases/edit/:id', {
        templateUrl: 'views/fases/fasesEdit.html',
        controller: 'FasesEditCtrl'
      })
      .when('/fases/new', {
        templateUrl: 'views/fases/fasesEdit.html',
        controller: 'FasesEditCtrl'
      })
      .when('/ordenes', {
        templateUrl: 'views/ordenes/ordenesList.html',
        controller: 'OrdenesListCtrl'
      })
      .when('/ordenes/edit/:id', {
        templateUrl: 'views/ordenes/ordenesEdit.html',
        controller: 'OrdenesEditCtrl'
      })
      .when('/ordenes/new', {
        templateUrl: 'views/ordenes/ordenesEdit.html',
        controller: 'OrdenesEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
