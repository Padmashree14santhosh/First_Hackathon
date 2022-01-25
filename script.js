let mainContainer=document.getElementById("maincontainer");
    

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";


  async function getUser() {
    let users;
    try {
      const data = await fetch(
        url
      );
      users =await data.json();
      console.log(users);
      mainContainer.innerHTML="";
      users.forEach(obj => {
        mainContainer.innerHTML+=`
        <p>Name:${obj.name}</p>
        <p>Brand:${obj.brand}</p>
        <img src="${obj.image_link}" alt="makeupimage" width="600" height="600">
        <p>Price:${obj.price}${obj.price_sign}</p>
        <p>Description:${obj.product_link}</p>`;
      });
    } catch (error) {
      console.log(error);
    }
    return users;
  }

  getUser();