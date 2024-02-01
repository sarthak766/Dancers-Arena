import React from 'react';

const Card = ({ form }) => {
  return (
    <div className=" bg-grey w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 hover:scale-110 shadow-md">
      <div className="card shadow-md bg-white rounded-lg overflow-hidden ">
        <img
          className="w-full h-auto hover:scale-110"
          src={form.formImg}
          alt={form.formName}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{form.formName}</h2>
          <p className="text-sm text-gray-600 mt-2">{form.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
