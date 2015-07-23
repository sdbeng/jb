'use strict';

/**
 * @ngdoc function
 * @name jobBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobBoardApp
 */
angular.module('jobBoardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
