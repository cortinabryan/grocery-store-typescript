import React from "react";
import ProductsCard from "./ProductsCard";

const Products = (props) => {
  const { products, onAdd } = props;
  // console.log(products);
  return (
    <div className="products mt-20">
      <h2 className="py-10 text-5xl font-bold text-center text-primary bg-base-200">
        Products
      </h2>
      <div className="products-inner grid grid-cols-4 bg-base-200 pb-10">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default Products;
