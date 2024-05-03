const bd=localStorage.getItem("sam_bd");
const estruct_bd= { 
    productos:[],
    inventario:[],
    facturas:[],
};

if (!bd) {
    localStorage.setItem("sam_bd",JSON.stringify(estruct_bd));
}