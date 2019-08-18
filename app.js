var app = angular.module("myApp", []);

app.service("userService",['$http', '$rootScope',function($http, $rootScope) {
    this.getUsers = function() {
        return $http.get("https://jsonplaceholder.typicode.com/users")
    }
}])
app.controller("userCtrl",['$scope', 'userService', function($scope, userService){
    userService.getUsers()
    .then((response) => {
        console.log("api response", response);
        $scope.users = response.data;
    })
    .catch((err) => {
        console.log("Api Failed")
    })

    $scope.onSubmit = function() {
        $scope.users = $scope.users.filter((user) => {
            return $scope.name == user.name;
        })
    }
}]);