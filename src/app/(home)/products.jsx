import React from 'react';


async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const Products = async () => {
  const data = await getData()
  console.log(data)




  return (
    <section className="products flex">

    {data.map((item) => {

      return(
        <article title={item.title} key={item.productImg} className="card">
        <a href="/pages/product-details.html">
          {/* <img width={266} src={item.image} alt=""  /> */}
        </a>
        <div style={{ width: 266 }} className="content">
          <h1 className="title">{item.title.slice(0,15)} ...</h1>
          <p className="description">
            {item.description.slice(0,111)} ...
          </p>
          <div
            className="flex"
            style={{
              justifyContent: "space-between",
              paddingBottom: "0.7rem",
            }}
          >
            <div className="price">${item.price}</div>
            <button className="add-to-cart flex">
              <i className="fa-solid fa-cart-plus" />
              Add To Cart
            </button>
          </div>
        </div>
        </article>
      )
      
    })}
  

  </section>
  );
}

export default Products;
