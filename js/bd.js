function guardar_bd(table, reg) {
  const bd = JSON.parse(localStorage.getItem("sam_bd"));
  bd[table].push(reg)
  localStorage.setItem("sam_bd", JSON.stringify(bd));
}

function obtener_tabla(table) {
  const bd = JSON.parse(localStorage.getItem("sam_bd"));
  return bd[table]
}

function obtener_registro(table, id) {
  const bd = JSON.parse(localStorage.getItem("sam_bd"));
  return bd[table][id]
}

function eliminar_bd(table, id) {
  const bd = JSON.parse(localStorage.getItem("sam_bd"));
  bd[table].splice(id - 1, 1)
  localStorage.setItem("sam_bd", JSON.stringify(bd));
}