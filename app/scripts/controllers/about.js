'use strict';

/**
 * @ngdoc function
 * @name jobBoardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobBoardApp
 */
angular.module('jobBoardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
