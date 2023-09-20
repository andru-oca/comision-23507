let marcos = "Marc0s"

let respuesta =` 
<header>
    <h1 class='hacker'>  ${marcos} </h1>
</header>
`

let userName = prompt("INGRESE SU NOMBRE: ")
let customClass = prompt("INGRESE SU CUSTOMIZACION (validas: hacker, smooth): ")
let edad = prompt("INGRESE SU EDAD")

let edadReal = Number(edad) + 5

respuesta = ` 
<header>
    <center>
    <h1 class="${customClass}"> HOLA!!!  ${userName} </h1>
    <hr>
    
    <h2> La edad declara es: ${edad}</h2>
    <hr>
    <h2 class="${customClass}"> La edad real es: ${edadReal}</h2>  
    </center>

</header>
`



edadReal >= 18 ? 

document.write(
    respuesta
)
:
alert("GUARDA que es menor de edad!!!")

