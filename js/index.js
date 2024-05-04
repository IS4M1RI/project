const bd = localStorage.getItem("sam_bd");
const estruct_bd = {
  clientes: [],
  facturas: [],
  inventario: [],
  productos: [],
};

if (!bd) {
  localStorage.setItem("sam_bd", JSON.stringify(estruct_bd));
}