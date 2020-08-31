(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.outputMessage="";

  $scope.checkIt = function () {

    var words = $scope.lunchList.split(",");
    if ($scope.lunchList.length > 0)
    {
      if (words.length<=3)
      {
        $scope.outputMessage="Enjoy!";
      }
      else {
        $scope.outputMessage="Too much!";
      }
    }
    else {
      $scope.outputMessage="Please enter data first";
    }
  }
};


})();
