import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
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
