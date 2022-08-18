/*consulta*/
class Contacto{
    constructor(nombre,apellido,email,telefono,mensaje){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.telefono=telefono;
    this.mensaje=mensaje;
    }
}
const consultas =JSON.parse(localStorage.getItem("consultas")) ??[]//Operador

const formContacto=document.getElementById("formContacto");
const botonConsulta=document.getElementById("mostrarConsulta")
const divConsultas=document.getElementById("divConsultas")
formContacto.addEventListener("submit",(e)=>{
    e.preventDefault()
    const datosForm= new FormData(e.target)
    const objContaco=new Contacto (datosForm.get("nombre"), datosForm.get("apellido"), datosForm.get("email"), datosForm.get("telefono"), datosForm.get("mensaje"))
    consultas.push(objContaco)
    localStorage.setItem("consultas",JSON.stringify(consultas))
    Toastify({
        text: "Pregunta Enviada",
        duration: 1000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #232526, #414345)",
        },
        onClick: function(){} 
      }).showToast();
    formContacto.reset()
})
botonConsulta.addEventListener('click',()=>{
    const consultaStorage=JSON.parse(localStorage.getItem("consultas"))
 divConsultas.innerHTML=""
    consultaStorage.forEach((consultas,indice) => {
     divConsultas.innerHTML +=`
        <div class="card" id=consulta${indice} style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Nombre: ${consultas.nombre}</h5>
    <p class="card-text">Apellido: ${consultas.apellido}.</p>
    <p class="card-text">Email: ${consultas.email}.</p>
    <p class="card-text">Telefono: ${consultas.telefono}.</p>
    <p class="card-text">Mensaje: ${consultas.mensaje}.</p>
    <button class="btn btn-danger">Eliminar</button>
  </div>
</div>
        `
    })
    consultaStorage.forEach((consulta,indice)=>{
         document.getElementById(`consulta${indice}`).children[0].children[5].
         addEventListener('click',()=>{
            document.getElementById(`consulta${indice}`).remove()
            consultas.splice(indice,1)
            localStorage.setItem("consultas",JSON.stringify(consultas))
         })
        })
    })
