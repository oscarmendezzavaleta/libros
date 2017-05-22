angular.module('librosmodule')

    .controller('librodetallecontroller', function ($scope,  libro) {


$scope.libro=libro;
        // libroservicio.obtenerlibros().then(function () {

        //     $scope.libros = libroservicio.libros;
        // },
        //     function (error) {
        //         $scope.libros = [];
        //     })



    });
