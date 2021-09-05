async function getProduct() {
    let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1132"
    const resp = await fetch(url);
    const product = await resp.json();
    await cargarDatos(product);
}

async function cargarDatos(pro){
    let products = document.getElementById("products");
for (let i = 1; i < 20; i++) {
var titulo = pro.results[i].title
var contenedor = document.createElement("div");
contenedor.setAttribute("id", "p" + i);
var imagen = document.createElement("img");
imagen.setAttribute("id","imagen"+i);
imagen.setAttribute("src", pro.results[i].thumbnail);
let producto = `
<div class="card" style="width: 18rem; margin-top: 20px;">
<img src="`+pro.results[i].thumbnail+`" class="card-img-top">
<div class="card-body">
    <h5 class="card-title" id="titulo"+i>`+pro.results[i].title+`</h5>
    <p class="card-text">$`+pro.results[i].price+`</p>
    <a href="#" class="btn btn-primary"> <i class="fas fa-cart-plus"></i></a>
</div>
</div>`;

contenedor.innerHTML += producto

products.appendChild(contenedor)   
}  
}

async function getTrendsProduct() {
    let url = "https://api.mercadolibre.com/trends/MLM/MLM1132"
    const resp = await fetch(url);
    const productT = await resp.json();
    await cargarDatosT(productT);
}

async function cargarDatosT(pro){
     var tbody = document.querySelector('#prductosT tbody');
         tbody.innerHTML=''
         
         for (var i=1; i<7;i++){
            console.log(pro[i]);
             /*
             var row = tbody.insertRow(i);

             var nameCell = row.insertCell(0), 
             urlCell = row.insertCell(1);
             nameCell.innerHTML=pro[i].keyword;
             urlCell.innerHTML=pro[i].url;

             //document.querySelector("#link"+i).href=pro[i].url;
            
             tbody.appendChild(row);*/
         }

        
      }

//getProduct();
getTrendsProduct();
/*
function hola(){
    console.log("hola git");
    console.log("hola git 2");
    
} 
*/