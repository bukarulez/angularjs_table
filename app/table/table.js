'use strict';

angular.module('myApp.table', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/table', {
      templateUrl: 'table/table.html',
      controller: 'TableCtrl'
    });
  }])

  .controller('TableCtrl', ['$scope', function ($scope) {
    $scope.fil = '';
    $scope.reverse = false;
    $scope.sort_by = 'ID';
    $scope.values = [
      {
        "ID": 123,
        "name": "Boris",
        "country": "Russia"
      },
      {
        "ID": 9,
        "name": "Sam",
        "country": "USA"
      },
      {
        "ID": 34,
        "name": "Gzhegozh",
        "country": "Poland"
      },
      {
        "ID": 477,
        "name": "Lumumba",
        "country": "Morocco"
      },
      {
        "ID": 105,
        "name": "Antonio",
        "country": "Brazil"
      }];
    function sort(sort_by) {
      if ($scope.sort_by === sort_by) {
        $scope.reverse = !$scope.reverse;
      } else {
        $scope.sort_by = sort_by;
        $scope.reverse = false;
      }
    }

    $scope.sortID = function () {
      sort('ID')
    };
    $scope.sortName = function () {
      sort('name')
    };
    $scope.sortCountry = function () {
      sort('country')
    };
    $scope.unSort = function(){
      $scope.reverse = false;
      $scope.sort_by = null;
    };
    $scope.localeSensitiveComparator = function (v1, v2) {
      if (v1.type !== 'string' || v2.type !== 'string') {
        return (v1.value < v2.value) ? -1 : 1;
      }
      return v1.value.localeCompare(v2.value);
    };
  }]);