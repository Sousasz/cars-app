const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();

/************************************** */
app.use(bodyParser.json());
/***************************************/

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const models=require('./models');

app.get('/',(req,res)=>{
    res.send('Servidor backend já está rodando!');
});

/* Instanciando modelos de Banco */
let user=models.User;
let tracking=models.Tracking;
let product=models.Product;

app.get('/create',async (req,res)=>{
    let create=await user.create({
        name: "messias.v",
        password: "4321",
        createdAt: new Date(),
        updatedAt: new Date()
    });
});
   app.get('/read', async (req,res)=>{
        let read=await user.findAll({
            raw:true,
        });
        console.log(read);
    });

app.get('/update', async (req,res)=> {
    let update=await user.findByPk(4).then((response)=>{
            response.name="Flavio";
            response.save();
    });
    console.log(update);
});
       app.get('/delete', async (req,res)=> {
        user.destroy({
            where: {id:2}
        });
    });
    
    app.post('/login',async (req,res)=>{
        let response=await user.findOne({
            where:{name:req.body.name, password: req.body.password}
            
        });
        if(response === null){
            res.send(JSON.stringify('error'));
        }else{
            res.send(response);
        }
    });
    
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
