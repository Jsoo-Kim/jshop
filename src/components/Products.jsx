import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    // key와 콜백함수 전달
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {/* 1. 리스트 안에 있는 자식 컴포넌트들은 항상 고유한 키를 가지고 있어야 함 2. prop으로 데이터 전달 */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
