var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');
var $colorPersonalizado = $('#color-personalizado');
var $indicadorDeColor = $('#indicador-de-color');
var $borrar = $("#borrar");
var $superHeroes = $(".imgs li img");
var $guardar = $("#guardar");

//funcion para generar la paleta de colores.
function generarPaletaColores(){
  for(var i = 0; i < nombreColores.length; i++){
    var $div = $("<div></div>");
    $div.css("background-color", nombreColores[i]);
    $div.addClass("color-paleta");
    $paleta.append($div);
  }
}
generarPaletaColores();

//funcion para crear la grilla de pixeles
function crearGrilla(cantPixeles){
  for(var i = 0; i < cantPixeles; i++){
    var $div = $("<div></div>");
    $grillaPixeles.append($div);
  }
}
crearGrilla(1749);

//funciones para seleccionar un color y mostrarlo en el indicador de color.
function cambiarColorIndicador(color){
  $indicadorDeColor.css("background-color", color);
}

$(".color-paleta").click(function(){
  var color = $(this).css("background-color");
  cambiarColorIndicador(color);
});

$colorPersonalizado.change(function(){
  var color = $(this).val();  
  cambiarColorIndicador(color);
});

//funciones pintar y manejo de eventos del mouse con la grilla.
function pintar(pixel){
  var color = $indicadorDeColor.css("background-color");
  $(pixel).css("background-color", color);
}

var mousePresionado = false;
var $pixel = $("#grilla-pixeles div");

$pixel.click(function() {
  pintar(this);
});

$pixel.mousedown(function(e){
  e.preventDefault();
  mousePresionado = true;
});

$pixel.mouseover(function(){  
  if(mousePresionado){     
    pintar(this);
  }
});

$pixel.mouseup(function(){
  mousePresionado = false;
});

$grillaPixeles.mouseleave(function(){
  mousePresionado = false;
});

//borrar la pantalla con animacion
$borrar.click(function(){
  $pixel.animate({"background-color" : "white"}, 600);
});

//carga de superheroes a la grilla
var superhero = {
  "batman" : batman,
  "wonder" : wonder,
  "flash" : flash,
  "invisible" : invisible
}
$superHeroes.click(function(){
  var hero = $(this).attr("id");
  cargarSuperheroe(superhero[hero]);
});

//guardar pixel-art
$guardar.click(function(){
  guardarPixelArt();
});

