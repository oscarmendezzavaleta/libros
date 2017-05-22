angular.module('librosmodule')

    .controller('libroscontroller', function ($scope,  libros) {


$scope.libros=libros;
        // libroservicio.obtenerlibros().then(function () {

        //     $scope.libros = libroservicio.libros;
        // },
        //     function (error) {
        //         $scope.libros = [];
        //     })



    });
