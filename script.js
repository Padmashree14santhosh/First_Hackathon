const url="http://makeup-api.herokuapp.com/api/v1/products.json";
let userdiv=document.getElementById("users");
userdiv.innerHTML="Loading....";

async function getData(){
   await fetch(url,{
       method:'GET',
   })
   .then(result=> result.json())
   .then((data)=>{
       renderData(data);
       console.log(data);
   });
}

getData();

function renderData(data){
    userdiv.innerHTML="";
    let count=0;
    for(let result of data){
        userdiv.innerHTML+=`
        <div class="flex" style="margin:2rem; border:2px solid red; width:500px; height:auto; text-align:center;">
            <h4>${result.name}</h4>
            <h5>${result.brand}</h5>
            <img src="${result.image_link}" alt="makeup" style="width:auto; height:300px; border:2px solid pink; margin:1rem;">
            <h5>${result.price}${result.price_sign}</h5>
            <h6><a href="${result.product_link}">INFO</a>
        </div>`;
        count++;
        if(count===20)break;
    }
}
