var app = angular.module("MyFirstApp",[]);

app.controller("FirtsController", ["$scope",function(j){
    j.nombre = "Juan";
    j.nuevoComentario = {};
    j.comentarios =[
        {
            comentario:"Lleve lo suyo",
            username:"juanserna"
        },
        {
            comentario:"Lleve lo suyo1",
            username:"juanserna1"
        }
    ];
    j.agregarComentario = function(){
        j.comentarios.push(j.nuevoComentario);
        j.nuevoComentario = {};
    };

}]);