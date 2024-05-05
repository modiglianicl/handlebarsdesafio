import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';

const PORT = 3000;
const app = express();
const __dirname = path.resolve();

// Seteando contenido estatico

app.use(express.static('assets'))

// Seteando handlebars

app.set('view engine','hbs')

app.engine('hbs',exphbs.engine({
    layoutsDir: __dirname + '/views',
    extname:'.hbs'
}))

// Middlewares
app.use(
    '/bootstrap',
    express.static(__dirname + '/node_modules/bootstrap/dist/css')
);
app.use(
    '/jquery',
    express.static(__dirname + '/node_modules/jquery/dist')
);

// Productos, creé un JSON con el nombre,descripcion y su ruta que son renderizados en el partial Dashboard.hbs

const productos = [
    {
      "nombre": "Bananas",
      "descripcion": "La banana es una fruta tropical con una cáscara amarilla fácil de pelar. Es una excelente fuente de potasio y energía.",
      "imagen": "/img/banana.png"
    },
    {
      "nombre": "Cebollas",
      "descripcion": "La cebolla es un vegetal aromático y sabroso que se utiliza en una variedad de platos. Puede ser consumida cruda o cocida.",
      "imagen": "/img/cebollas.png"
    },
    {
      "nombre": "Lechugas",
      "descripcion": "La lechuga es una verdura de hojas verdes ampliamente utilizada en ensaladas y sándwiches. Es baja en calorías y rica en nutrientes.",
      "imagen": "/img/lechuga.png"
    },
    {
      "nombre": "Papas",
      "descripcion": "Las papas son tubérculos versátiles y deliciosos que se pueden cocinar de muchas maneras diferentes, como hervidas, asadas o fritas.",
      "imagen": "/img/papas.png"
    },
    {
      "nombre": "Pimentónes",
      "descripcion": "El pimentón es una hortaliza de sabor dulce y jugoso, que puede ser de color rojo, verde o amarillo. Se utiliza en muchas recetas culinarias.",
      "imagen": "/img/pimenton.png"
    },
    {
      "nombre": "Tomates",
      "descripcion": "El tomate es una fruta roja y jugosa que se utiliza comúnmente en ensaladas, salsas y como ingrediente en una variedad de platos.",
      "imagen": "/img/tomate.png"
    }
  ]
  


// Rutas

app.get('/', (req,res) => {
    res.render('main',{
        layout : 'main',
        productos,
    })
});


// Listen
app.listen(PORT,()=> {
    console.log(`Server UP on http://localhost:${PORT}`)
});