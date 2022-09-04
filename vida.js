var lado1;
var lado2;
var area;
var perimetro;

lado1 = parseFloat(prompt("Digite a medida do lado 1:"))
lado2 = parseFloat(prompt("Digite a medida do lado 2:"))

area = (lado1 * lado2)
perimetro = (lado1 + lado2 + lado1 + lado2)

alert("A área do seu retângulo é: " + area)
alert("O perímetro do seu retângulo é: " + perimetro)
