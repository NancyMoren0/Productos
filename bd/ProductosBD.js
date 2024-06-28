const ConectarBD=require("./ConectarBD");

class ProductoBD extends ConectarBD{
    constructor(){
        super();
    }
    async nuevoProducto(producto1){
        const sql="insert into producto values(null,'"+producto1.nombre+"','"+producto1.cantidad+"','"+producto1.descripcion+"','"+producto1.precio+"')";
        try {
            await this.conectarMySql(); 
            await this.conexion.execute(sql);
        console.log("Crea un nuevo producto");
        await this.cerrarConexion();
    }catch (error) {
        console.log("Error al agregar el producto "+error);
        console.error(sql);    
        }
    }
    async mostrarProducto() {
        const sql="SELECT * FROM producto;";
        try {
            await this.conectarMySql();
            const [ProductoMySql]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            //console.log(ProductoMySql);
            return(ProductoMySql);
        } catch (error) {
            console.error("Error al obtener los datos de los productos" + error);
            console.error(sql);
        }
    }
    async productoId(id){
        const sql="select * from producto where idproducto="+id+";";
        try {
            await this.conectarMySql();
            const [[producto]]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            return producto;
            console.log("Consulta correcta por id");
        } catch (error) {
          console.log("Error al consultar por id"+error);
          console.log(sql);  
        }
    }
    async EditarProducto(producto) {
        const sql="update producto set nombre='"+producto.nombre+"' , cantidad= '"+producto.cantidad+"' ,  descripcion='"+producto.descripcion+"',  precio='"+producto.precio+"' where idproducto='"+producto.idproducto+"' ;";
        const sql2=`update producto set nombre='${producto.nombre}' , cantidad='${producto.cantidad}' ,  descripcion='${producto.descripcion}',  precio='${producto.precio}' ;" ` 
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Actualización de producto exitosa");
        } catch (error) {
            console.error("Error al actualizar los productos" + error);
            console.error(sql);
        }
    }

    async BorrarProducto(idproducto){
        const sql="delete from producto where idproducto="+idproducto+ ";";
    
    try {
        await this.conectarMySql();
        await this.conexion.execute(sql);
        console.log("Producto borrado");
        
    } catch (error) {
        console.log("Error al borrar producto"+error);
        console.log(sql);
    } 
    }
}


module.exports=ProductoBD;