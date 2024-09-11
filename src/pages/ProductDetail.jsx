import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";

export default function ProductDetail() {
  const { uid } = useAuthContext();

  /*
  const location = useLocation();
  const { product } = location.state; // navigate로 전달된 product 객체를 가져옴
  */
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    // 여기서 장바구니에 추가!
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-xl font-bold py-2 border-b border-gray-400">
            ₩{price}
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              id="select"
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              onChange={handleSelect}
              value={selected}
            >
              {/* 옵션은 변경될 일이 없으므로 배열의 인덱스를 키로 사용 가능! 그 외엔 무조건 고유값으로 key를 설정해야 함 */}
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
