import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["carts", uid || ""], // uid를 queryKey에 포함시켜 유저가 변경될 때 쿼리가 새로 실행(리페치)되도록 함
    // 함수 호출 결과(getCart(uid))가 아니라 함수 자체를 참조로 전달해야 함! 컴포넌트가 렌더링 될 때 즉시 함수가 실행되지 않기 위해서!
    queryFn: () => getCart(uid),
    enabled: !!uid, // 사용자가 없는 경우(uid가 false) 쿼리가 수행되지 않도록 enable 옵션 설정
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateToCart(uid, product), // 변경 내용
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]); // 해당 키를 가진 캐시를 invalidate 함 (변경 내용이 바로 반영되도록)
    },
  });

  const removeItem = useMutation({
    mutationFn: (id) => removeFromCart(uid, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
