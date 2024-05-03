cargar_lista()
function cargar_lista(){
    const productos=obtener_tabla("productos")
    const lista = document.getElementById("lista").getElementsByTagName("tbody")[0];
    


productos.forEach((val, ind)=>{
   const lst=`<tr><td>${ind+1}</td><td>${val.codigo}</td><td>${val.nombre}</td><td>${val.iva}%</td><td><a href="#" onClick="abrir_modal(${ind})">editar</a></td><td><a href="#" onClick="eliminar_producto(${ind})" >eliminar</a></td></tr>`
    
    
    const newRow = lista.insertRow(lista.rows.length);
    
    newRow.innerHTML = lst;

    console.log(`iteración ${ind}: ${val.codigo}`);
});

}

function abrir_modal(id) {
    console.log("Esto abre Modal");
    const form = document.getElementById("div_form");
    const btnAdd = document.getElementById("btnAdd");
    btnAdd.style.display = "none";
    form.style.display="block";

}

function cerrar_modal(){
    console.log("esto cierra modal");
    const form = document.getElementById("div_form");
    const btnAdd = document.getElementById("btnAdd");
    reset_form();
    form.style.display = "none";
    btnAdd.style.display = "block";
}

function guardar_producto(){
    const form = document.getElementById("form_producto");
  const data = Object.fromEntries(new FormData(form).entries());
     guardar_bd ("productos",data)
    console.log("Se Guardó", data)
    
}

function reset_form(){
    const form = document.getElementById("form_producto");
    form.reset();
}

function guardar_bd(table,reg){
  const bd = JSON.parse (localStorage.getItem("sam_bd"));
  bd[table].push(reg)
  localStorage.setItem("sam_bd",JSON.stringify(bd));
}

function obtener_tabla(table){
    const bd = JSON.parse (localStorage.getItem("sam_bd"));
    return bd[table]

}

