// tasacion
class Tasacion{
    constructor(nombre,apellido,direPropiedad,email,telefono,descPropiedad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.direPropiedad=direPropiedad;
    this.email=email;
    this.telefono=telefono;
    this.descPropiedad=descPropiedad;
    }
}
// const tasaciones =JSON.parse(localStorage.getItem("tasaciones")) ??[]

let tasaciones=[];
if(localStorage.getItem("tasaciones")){
    tasaciones=JSON.parse(localStorage.getItem("tasaciones"))
}
else{
    localStorage.setItem("tasaciones",JSON.stringify(tasaciones))
}
const formTasacion=document.getElementById("formTasacion");
const botonTasacion=document.getElementById("mostrarTasacion")
const divTasacion=document.getElementById("divTasacion")
formTasacion.addEventListener("submit",(e)=>{
    e.preventDefault()
    const datosTasac= new FormData(e.target)
    const objtTasc=new Tasacion (datosTasac.get("nombre"), datosTasac.get("apellido"),datosTasac.get("direPropiedad"), datosTasac.get("email"), datosTasac.get("telefono"), datosTasac.get("descPropiedad"))
    tasaciones.push(objtTasc)
    localStorage.setItem("tasaciones",JSON.stringify(tasaciones))
    formTasacion.reset()
})
botonTasacion.addEventListener('click',()=>{
    const consultaStorage=JSON.parse(localStorage.getItem("tasaciones"))
 divTasacion.innerHTML=""
    consultaStorage.forEach((tasaciones,indice) => {
     divTasacion.innerHTML +=`
        <div class="card" id=tasacion${indice} style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Nombre: ${tasaciones.nombre}</h5>
    <p class="card-text">Apellido: ${tasaciones.apellido}.</p>
    <p class="card-text">Direccion de la Propiedad: ${tasaciones.direPropiedad}.</p>
    <p class="card-text">Email: ${tasaciones.email}.</p>
    <p class="card-text">Telefono: ${tasaciones.telefono}.</p>
    <p class="card-text">descPropiedad: ${tasaciones.descPropiedad}.</p>
    <button class="btn btn-danger">Eliminar</button>
  </div>
</div>
        `
    })
    consultaStorage.forEach((tasacion,indice)=>{
         document.getElementById(`tasacion${indice}`).children[0].children[6].
         addEventListener('click',()=>{
            document.getElementById(`tasacion${indice}`).remove()
            tasaciones.splice(indice,1)
            localStorage.setItem("tasaciones",JSON.stringify(tasaciones))
         })
        })
    }) 