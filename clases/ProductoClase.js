class Productos{
    constructor(producto1){
        //console.log(producto1);
        this.id=producto1.idproducto,
        this.nombre=producto1.nombre;
        this.cantidad=producto1.cantidad;
        this.descripcion=producto1.descripcion;
        this.precio=producto1.precio
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){ 
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexNombre.test(nombre)){
            this._nombre=nombre;
        }
        
    }
    set cantidad(cantidad){ 
        console.log(cantidad);
        var regexCantidad = /^\d+$/;
    
        if(regexCantidad.test(cantidad)){
            this._cantidad=cantidad;
        }
        
    }
    set descripcion(descripcion){ 
        var regexDescripcion = /^[a-zA-Z0-9 ]+$/;
        if(regexDescripcion.test(descripcion)){
            this._descripcion=descripcion;
        }
        
    }
    set precio(precio){ 
        var regexPrecio = /^\d+$/;
        if(regexPrecio.test(precio)){
            this._precio=precio;
        }
    }
    get id(){
        return this._id;
    }
    get nombre(){ 
        return this._nombre;
    }
    get cantidad(){ 
        return this._cantidad;
    }
    get descripcion(){ 
        return this._descripcion;
    }
    get precio(){ 
        return this._precio;
    }
    get mostrarDatos(){  
        return{
            id:this.id,
            nombre:this.nombre,
            cantidad:this.cantidad,
            descripcion:this.descripcion,
            precio:this.precio
        }
    }
}

module.exports=Productos;