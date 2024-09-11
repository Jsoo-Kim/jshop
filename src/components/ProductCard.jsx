import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  // product.id, product.image, product.title ... 
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        // React Router에서 함수로 페이지를 이동할 때, 추가적인 데이터를 함께 전달할 수 있도록 해 주는 상태(state) 객체를 이용
        navigate(`/products/${id}`, { state: { product } }); 
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img className="w-full" src={image} alt="title" />
      <div className="mt-2 px-2 flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
