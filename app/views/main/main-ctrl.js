'use strict';

/**
 * @ngdoc function
 * @name ngScaffoldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngScaffoldApp
 */
angular.module('ngScaffoldApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
