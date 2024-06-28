const ruta=require("express").Router(); 
const ProductoClase=require("../clases/ProductoClase");
const ProductoBD=require("../bd/ProductosBD")

ruta.get("/Producto", async(req, res)=>{
    const productobd= new ProductoBD();
    const ProductoMySql=await productobd.mostrarProducto();  
    //console.log(ProductoMySql);
    var productosCorrectos=[];
    ProductoMySql.forEach(producto => {
        var producto1= new ProductoClase(producto);
        //console.log(producto1);
        if(producto1.nombre!=undefined && producto1.cantidad!=undefined && producto1.descripcion!=undefined && producto1.precio!=undefined){
            productosCorrectos.push(producto);
        } 
    });
    //console.log(productosCorrectos);
    res.render("mostrarProducto", {productosCorrectos} );
    });
   

ruta.post("/agregarProducto",(req, res)=>{ 
    var producto1=new ProductoClase(req.body);
    if(producto1.nombre!=undefined && producto1.cantidad!=undefined && producto1.descripcion!=undefined && producto1.precio!=undefined){
        const productobd=new ProductoBD();
        productobd.nuevoProducto(producto1.mostrarDatos);
        //console.log(producto1.mostrarDatos);
        res.redirect("/Producto");
    }
    else{
        res.render("error"); 
    }
});

ruta.get("/Producto/agregarProducto",(req,res)=>{
    res.render("formularioProducto");

});



ruta.get("/editarProducto/:idproducto",async(req,res)=>{
    
    try {
        const productobd= new ProductoBD();
        const producto= await productobd.productoId(req.params.idproducto);
        console.log(producto);
        res.render("editarProducto", producto)
    } catch (error) {
        
    }
   

});


ruta.post("/editar",async(req,res)=>{
    try {
        const productobd=new ProductoBD();
        await productobd.EditarProducto(req.body); 
        console.log("Producto editado correctamente");
        res.redirect("/Producto"); 
    } catch (error) {
        console.log("Error al editar el producto");
    }
});

ruta.get("/BorrarProducto/:id",async(req,res)=>{
    try {
        const productobd=new ProductoBD();
         await productobd.BorrarProducto(req.params.id);
         res.redirect("/Producto");
    } catch (error) {
        console.log(error);
    }
});


module.exports=ruta;