angular.module('librosmodule', ['entidadmodulo', 'jsonbookmodulo'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.libros', {
                url: '/libros',
                views: {
                    'content': {
                        templateUrl: 'js/app/libros/libros/libros.html',
                        controller: 'libroscontroller',
                        resolve: {
                            libros: function (libroservicio) {
                                return libroservicio.obtenerlibros();
                            }
                        }
                    }
                }
            })
            .state('app.libroDetalle', {
                url: '/libroDetalle',
                views: {
                    'content': {
                        templateUrl: 'js/app/libros/librodetalle/librodetalle.html',
                        controller: 'LlibroDetalleCtrl'
                    }
                }
            })
    })
        /*.state('app.librodetalle', {
            
            templateUrl: 'js/app/libros/librodetalle/librodetalle.html',
            controller: 'LibroDetalleCtrl'
      url: '/librodetalle/:id',
          views: {
              'content': {
                  templateUrl: 'js/app/libros/librodetalle/librodetalle.html',
                  controller: 'librodetallecontroller',
                  resolve: {
                      libro: function (libroservicio ,$stateProvider) {
                          return libroservicio.obtenerlibro($stateProvider.id);
                      }
                  }
              }
          }*/