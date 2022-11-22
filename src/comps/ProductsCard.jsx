import React from "react";

const ProductsCard = (props) => {
  const { product, onAdd } = props;
  // console.log(product);
  return (
    <div className="products-card card w-96 bg-base-100 shadow-xl justify-self-center my-5">
      <figure>
        <img className="max-w-sm" src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {product.name}
          <div className="badge badge-secondary">20% Off</div>
        </h3>
        <p>{product.desc}</p>
        <button
          onClick={() => onAdd(product)}
          className="btn bg-green-800 hover:btn-primary"
        >
          Add to Cart
        </button>
        <div>${product.price}</div>
        <div className="card-actions justify-center mt-5">
          <div className="badge badge-outline badge-primary">Produce</div>
          <div className="badge badge-outline badge-primary">Organic</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

// Original

// <div className="products-card card w-96 bg-base-100 shadow-xl justify-self-center my-5">
//   <figure>
//     <img src="https://placeimg.com/400/225/arch" alt="Mangoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       Mangoes
//       <div className="badge badge-secondary">20% Off</div>
//     </h2>
//     <p>Hand pick mangoes from my mom's backyard</p>
//     <div className="card-actions justify-center">
//       <div className="badge badge-outline badge-primary">Produce</div>
//       <div className="badge badge-outline badge-primary">Organic</div>
//     </div>
//   </div>
// </div>

///////////////////////////////////////////////////////////////

// Test

{
  /* <div className="products-card card w-96 bg-base-100 shadow-xl justify-self-center my-5">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {product.name}
          <div className="badge badge-secondary">20% Off</div>
        </h3>
        <p>Hand pick mangoes from my mom's backyard</p>
        <button className="btn btn-primary">Add to Cart</button>
        <div>${product.price}</div>
        <div className="card-actions justify-center">
          <div className="badge badge-outline badge-primary">Produce</div>
          <div className="badge badge-outline badge-primary">Organic</div>
        </div>
      </div>
    </div> */
}
