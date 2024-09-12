import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ["carts", uid], // uid를 queryKey에 포함시켜 유저가 변경될 때 쿼리가 새로 실행(리페치)되도록 함
    queryFn: () => getCart(uid),
    // 함수 호출 결과(getCart(uid))가 아니라 함수 자체를 참조로 전달해야 함! 컴포넌트가 렌더링 될 때 즉시 함수가 실행되지 않기 위해서!
  });

  console.log("products: ", products);
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {products && (
        <p className="w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
