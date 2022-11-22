import React from "react";
import Card from "./Card";

const Categories = (props) => {
  const { categories } = props;

  return (
    <div className="Categories mt-5">
      <h2 className="my-10 text-5xl font-bold text-center text-primary">
        Categories
      </h2>
      {/* <div className="Cards flex flex-row"> */}
      <div className="Cards grid grid-cols-6 ml-12">
        {categories.map((category) => (
          <Card key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

// {/* <div className="Categories mt-5">
//       <h2 className="my-10 text-5xl font-bold text-center text-primary">
//         Categories
//       </h2>
//       {/* <div className="Cards flex flex-row"> */}
//       <div className="Cards grid grid-cols-6 ml-12">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div> */}
