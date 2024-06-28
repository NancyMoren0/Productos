
const express=require("express");
const path=require("path"); 
const productoRutas=require("./routes/productoRutas");


const app=express();
app.use("/",express.static(path.join(__dirname,"web")));
app.set("view engine","ejs"); 
app.use(express.urlencoded({extended:true})); 
app.use("/",productoRutas);  

const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en http://127.0.0.1:" + port);
    
});


const expresss=require("express");
const paath=require("path"); 
const usuariosRutas=require("./routes/usuariosRutas");


const aapp=expresss();
app.use("/",expresss.static(path.join(__dirname,"web")));
app.set("view engine","ejs"); 
app.use(expresss.urlencoded({extended:true})); 
app.use("/",usuariosRutas);  

    
;

