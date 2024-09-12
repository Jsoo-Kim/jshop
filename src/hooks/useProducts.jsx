import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addNewProduct, getProducts as fetchProducts } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    // key와 콜백함수 전달
    queryKey: ["products"],
    queryFn: fetchProducts,
    // 데이터를 'stale' 상태로 간주하기까지의 시간 ("stale" 상태: 캐싱된 데이터가 더 이상 최신이 아니라고 간주되는 상태)
    staleTime: 1000 * 60, // 1분 동안 캐싱된 데이터 사용
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url), // 변경 내용
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    }, // products 라는 키를 가진 캐시를 invalidate 함 (변경 내용이 바로 반영되도록)
  });

  return { productsQuery, addProduct };
}
