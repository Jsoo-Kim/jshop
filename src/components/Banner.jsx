import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80" />
      <div className="absolute w-full top-32 text-center text-gray-100 drop-shadow-2xl">
        <h2 className="text-6xl">Shop With JS</h2>
        <p className="text-xl">Best Products, High Quality</p>
      </div>
    </section>
  );
}
