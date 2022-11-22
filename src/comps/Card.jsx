import React from "react";

const Card = (props) => {
  const { category } = props;
  return (
    <div className="card w-64 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={category.image} alt={category.name} />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-bold text-green-500 tracking-wide card-title">
          {category.name}
        </h3>
        <p className="text-lg italic">{category.disc}</p>
        {/* <p>{category.desc}</p> */}
        <div className="card-actions justify-end">
          <button className="btn bg-green-800 hover:btn-primary">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card w-64 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Produce</h2>
        <p>Up to 20% Off!</p>
        <div className="card-actions justify-end">
          <button className="btn bg-green-800 hover:btn-primary">
            See More
          </button>
        </div>
      </div>
    </div> */
}
