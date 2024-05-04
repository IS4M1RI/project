function cargar_lista() {
  const productos = obtener_tabla("productos")
  const lista = document.getElementById("lista").getElementsByTagName("tbody")[0];
  lista.innerHTML = ""

  productos.forEach((val, ind) => {
    const lst = `<tr><td>${ind + 1}</td><td>${val.codigo}</td><td>${val.nombre}</td><td>${val.iva}%</td><td><a href="#" onClick="abrir_modal(${ind})">editar</a></td><td><a href="#" onClick="eliminar_producto(${ind})" >eliminar</a></td></tr>`
    const newRow = lista.insertRow(lista.rows.length);
    newRow.innerHTML = lst;
  });
}

function abrir_modal(id) {
  if (id >= 0) {
    const reg = obtener_registro("productos", id)
    document.forms["form_producto"]["codigo"].value = reg.codigo;
    document.forms["form_producto"]["nombre"].value = reg.nombre;
    document.forms["form_producto"]["iva"].value = reg.iva;
    const btnguardar = document.getElementById("btnguardar");
    btnguardar.onclick = function () { editar_producto(id) }
  }

  const form = document.getElementById("div_form");
  const btnAdd = document.getElementById("btnAdd");
  btnAdd.style.display = "none";
  form.style.display = "block";
}

function cerrar_modal() {
  const form = document.getElementById("div_form");
  const btnAdd = document.getElementById("btnAdd");
  reset_form();
  form.style.display = "none";
  btnAdd.style.display = "block";
}

function guardar_producto() {
  const form = document.getElementById("form_producto");
  const data = Object.fromEntries(new FormData(form).entries());
  guardar_bd("productos", data)
  const lista = document.getElementById("lista").getElementsByTagName("tbody")[0];
  const lst = `<tr><td>${lista.rows.length}</td><td>${data.codigo}</td><td>${data.nombre}</td><td>${data.iva}%</td><td><a href="#" onClick="abrir_modal(${lista.rows.length - 1})">editar</a></td><td><a href="#" onClick="eliminar_producto(${lista.rows.length - 1})" >eliminar</a></td></tr>`
  const newRow = lista.insertRow(lista.rows.length);
  newRow.innerHTML = lst;
}

function eliminar_producto(id) {
  eliminar_bd("productos", id)
  cargar_lista()
}

function editar_producto(id) {
  const form = document.getElementById("form_producto");
  const data = Object.fromEntries(new FormData(form).entries());
  actualizar_bd("productos", id, data)
  cargar_lista()
  cerrar_modal()
}

function actualizar_bd(table, id, reg) {
  const bd = JSON.parse(localStorage.getItem("sam_bd"));
  bd[table][id] = reg
  localStorage.setItem("sam_bd", JSON.stringify(bd));
}

function reset_form() {
  const form = document.getElementById("form_producto");
  form.reset();
}
