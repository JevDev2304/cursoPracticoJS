/**
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
R/ Para guardar informacion en memoria para usarla despues en el codigo.

¿Cuál es la diferencia entre declarar e inicializar una variable?
R/Declarar es mencionarla pero aun no se le ha asignado algún valor, en cambio para inicializarla
necesariamente se le necesita asignar un valor.

¿Cuál es la diferencia entre sumar números y concatenar strings?
R/ Para la suma de números se usa la aritmetica basica, cuando se suma string se concatenan los caracteres de manera lineal.

¿Cuál operador me permite sumar o concatenar?
R/ "+"

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre ---> nombre (string)
Apellido----> apellido(String)
Nombre de usuario en Platzi----->platziUser(String)
Edad----> edad(Number)
Correo electrónico----> email(String)
Mayor de edad ------> esMayorEdad(Bool)
Dinero ahorrado-----> dineroAhorrado(Number)
Deudas-------> deudas(Number)

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
*/
var nombre = "Juan Esteban";
var apellido = "Valdés Ospina";
var platziUser = "JevDev2304";
var edad = 19;
var email = "juanes@platzi.com";
var esMayorEdad = false;
var dineroAhorrado= 879;
var deudas = 15;
//4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
var nombreCompleto = nombre + " " + apellido;
var dineroTotal = dineroAhorrado-deudas;
console.log(`El Nombre completo es ${nombreCompleto} y el dinero total es ${dineroTotal}`);

/**
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
R/ Es un bloque de codigo que se define(encapsulación), el cual cumple una utilidad y se puede llamar a través de la codificación. Debe tener valores de entrada ya que si no tiene seria un procedimiento.
¿Cuándo me sirve usar una función en mi código?
R/Cuando el codigo se va utilizar muchas veces, para modalizar y cuando se desea tener un codigo más legible y organizado.
¿Cuál es la diferencia entre parámetros y argumentos de una función?
R/Los paramatros son la palabra o las palabras que  usamos entre los parentesis de la función cuando la definimos. Los argumentos son los valores que le ingresamos a esta función entre los parentesis.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
 */
const name = "Juan David ";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
function presentacion(nombre,apellido,nombreUsuario){
    console.log("Mi nombre es " + nombre + apellido + ", pero prefiero que me digas " + nombreUsuario + ".")    
}
presentacion(name,lastname,nickname);

/**
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
R/ Es una forma de controlar lo que hace el codigo dependiendo de que  se cumpla o no se cumpla un criterio.
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R/ if , else if , else y switch, en el caso que se usa if, si se cumple la condicion se ejecuta el codigo que se encuentra dentro del if , en caso  de que haya otras posibles
soluciones con condicion se usa else if, en caso que ninguna se cumpla se ejecuta el codigo que se encuentra dentro del else. En el caso de switch, se ingresa una variable, se definen multiples casos que en caso que
se cumpla una se ejecuta el  codigo dentro de ese caso  y  se rompe con un break. Se recomienda usar switch cuando pueden existir muchos condicionales para que el codigo sea más legible.
¿Puedo combinar funciones y condicionales?
R/ Si y es demasiado util, ya que asi le podemos sacar mas provecho a la función. Pudiendo retornar unos valores diferentes a través de los condicionales para ahorrar codigo y cumplir la utilidad de manera correcta.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
 */
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
if (tipoDeSuscripcion === "Free"){console.log("Solo puedes tomar los cursos gratis");}
else if (tipoDeSuscripcion === "Basic"){console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");}
else if (tipoDeSuscripcion === "Expert"){console.log("Puedes tomar casi todos los cursos de Platzi durante un año");}
else if (tipoDeSuscripcion === "ExpertPlus"){ console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");}

//3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
//💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
var free = {nombre: "Free", info:"Solo puedes tomar los cursos gratis"}
var basic = {nombre: "Basic", info:"Puedes tomar casi todos los cursos de Platzi durante un mes"}
var expert = {nombre: "Expert", info: "Puedes tomar casi todos los cursos de Platzi durante un año"}
var expertPlus = {nombre: "ExpertPlus", info:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
var listaTipoSub = [free,basic,expert,expertPlus];
var usertipo = "Expert";
for (var tipo of listaTipoSub){
 if (tipo.nombre == usertipo){
    console.log(`El plan que tienes es ${tipo.nombre} y ${tipo.info}`);
 }
}
/**1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
R/ Es una sentencia que se ejecuta repetitivamente hasta que se deje de cumplir una condición.
¿Qué tipos de ciclos existen en JavaScript?
R/While y for, el while es un ciclo que se ejecuta hasta que se deja de cumplir una condición y el for se da un rango o un iterable, y se hace el numero de veces que el programador lo necesite.
¿Qué es un ciclo infinito y por qué es un problema?
R/ Da problemas ya que la potencia de computo es limitada, y pues se consume toda, ademas la mayoria  de ciclos infinitos no son utiles ya que los programas casi siempre son finitos.
¿Puedo mezclar ciclos y condicionales?
R/Si y es muy util para diferenciar que se debe hacer en cada de iteración del ciclo, esto le abre un mundo de posibilidades al programador para hacer un monton de cosas con el codigo.
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
*/
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
var contadorPrimerCiclo = 0;
while (contadorPrimerCiclo != 5){
    console.log("El valor de i es: " + contadorPrimerCiclo);
    contadorPrimerCiclo += 1;
}
var contadorSegundoCiclo = 10;
while (contadorSegundoCiclo != 1){
    console.log("El valor de i es: " + contadorSegundoCiclo);
    contadorSegundoCiclo -= 1;
}
/**
  3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
    💡 Pista: puedes usar la función prompt de JavaScript.
 */
var respuestaUsuario;
while (respuestaUsuario != 4){
    respuestaUsuario= parseInt(prompt("Cuanto es 2 + 2 = ?"));
}
console.log("Lo Lograste :D, Que grande XD");
/**
 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
R/Es un dato de tipo objeto que puede contener desde 0 o mas datos, se organizan de manera secuencial.
¿Qué es un objeto?
R/Es un tipo de dato que  contiene propiedades y metodos las cuales la definen.
¿Cuándo es mejor usar objetos o arrays?
R/ No necesariamente una es mejor que otra, dependiendo del caso de uso se debe usar una u otra.
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R/ Si ,ademas es muy  util cuando se necesita organizar muchos datos.
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
 */
function primerElementoArray(array){
    console.log(array[0]);
}
var fruteria = ["Pera","Manzana", "Banano"];
primerElementoArray(fruteria);
//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimirElementoArray(array){
    for (elemento of array){console.log(elemento);}
    
}
var autos= ["Mercedez","Toyota","Tesla","Subaru"];
imprimirElementoArray(autos);
//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function imprimirObjeto(objeto){
    for (nombreatributo of Object.keys(objeto)){
        console.log(`El nombre de la propiedad es ${nombreatributo} y el valor  es ${objeto[String(nombreatributo)]} `);
    }
}
auto = {
    marca: "Subaru",
    modelo: "Forester",
    annio: 2015,
    propietario: "Liliana"
}
imprimirObjeto(auto);








