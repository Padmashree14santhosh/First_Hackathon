let mainContainer=document.getElementById("maincontainer");
mainContainer.innerHTML+="";
    

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";


  

  async function getData(){
    let users;
    try{
      const data = await fetch(url,{
        method:"GET",
        });

      users=await data.json();
      users.forEach((obj) => {
        if(obj.image_link){
        mainContainer.innerHTML+=`
          <p>Name:${obj.name}</p>
        <p>Brand:${obj.brand}</p>
        <p>Price:${obj.price}${obj.price_sign}</p>
        <p>Description:<a href="${obj.product_link}"</p>
        <img src="${obj.image_link}" alt="makeupimage" width="600" height="600">
        `}
      });
    }catch(error){
      console.log(error);
    }
  }

  getData();

  