import Header from "./components/Header";
import { useState } from "react";
import { useCart } from "./hooks/useCart";

function App() {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const { addToCart, getTotalItems, cartItems, removeFromCart } = useCart();

  const handleCountChange = (operation: "increment" | "decrement") => {
    setCount((prevCount) => {
      if (operation === "increment") {
        return prevCount + 1;
      } else if (operation === "decrement") {
        return prevCount > 0 ? prevCount - 1 : 0;
      }
      return prevCount;
    });
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart({
        id: 1,
        name: "Fall Limited Edition Sneakers",
        price: 125.00,
        image: `/image-product-${selectedImage}.jpg`
      }, count);
      setCount(0);
    }
  };
  return (
    <>
      <div className="md:px-24">
        <Header 
          cartItems={cartItems}
          getTotalItems={getTotalItems}
          removeFromCart={removeFromCart}
        />
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-32 ">
              <div className="flex max-w-md md:h-96 flex-col items-center gap-4 md:gap-8">
              <img
                src={`/image-product-${selectedImage}.jpg`}
                alt="Product Thumbnail"
                className="object-cover h-full w-full items-center md:rounded-lg shadow-md"
              />
                <ul className="md:flex hidden gap-2 md:gap-10">
                  <li className="relative">
                    <img src="/image-product-1-thumbnail.jpg" alt="" className={`cursor-pointer rounded-lg shadow-md ${selectedImage === 1 ? 'ring-2 ring-amber-600' : ''}`} onClick={() => setSelectedImage(1)} />
                    {selectedImage === 1 && <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>}
                  </li>
                  <li className="relative">
                    <img src="/image-product-2-thumbnail.jpg" alt="" className={`cursor-pointer rounded-lg shadow-md ${selectedImage === 2 ? 'ring-2 ring-amber-600' : ''}`} onClick={() => setSelectedImage(2)} />
                    {selectedImage === 2 && <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>}
                  </li>
                  <li className="relative">
                    <img src="/image-product-3-thumbnail.jpg" alt="" className={`cursor-pointer rounded-lg shadow-md ${selectedImage === 3 ? 'ring-2 ring-amber-600' : ''}`} onClick={() => setSelectedImage(3)} />
                    {selectedImage === 3 && <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>}
                  </li>
                  <li className="relative">
                    <img src="/image-product-4-thumbnail.jpg" alt="" className={`cursor-pointer rounded-lg shadow-md ${selectedImage === 4 ? 'ring-2 ring-amber-600' : ''}`} onClick={() => setSelectedImage(4)} />
                    {selectedImage === 4 && <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col px-4 py-6 gap-4 justify-center h-full max-w-md">
                <h1 className="text-sm uppercase text-gray-400 font-bold md:mt-32"> Sneaker Company</h1>
                <h2 className="md:text-5xl text-3xl font-bold md:mb-6">
                  Fall Limited Edition Sneakers
                </h2>
                <p className="text-sm text-gray-400">
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everything the weather can offer.
                </p>
                <div className="flex md:flex-col gap-3 justify-between">
                <div className="flex items-center gap-2">
                <data className="text-2xl font-bold">$125.00</data>
                <span className="px-2  text-xs bg-gray-700 text-white rounded">50% </span>
                </div>
                <data className="text-sm text-gray-400 line-through">
                  $250.00
                </data>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mt-4 items-center justify-between">
                <div className="bg-gray-100 flex w-full md:w-[30%] items-center justify-between px-4 py-4 rounded-lg">
                  <img
                    src="/icon-minus.svg"
                    alt="minus"
                    onClick={() => handleCountChange("decrement")}
                    />{" "}
                  {count}{" "}
                  <img
                    src="/icon-plus.svg"
                    alt="plus"
                    onClick={() => handleCountChange("increment")}
                    />
                </div>
                  <button 
                    onClick={handleAddToCart}
                    className="bg-amber-600 flex justify-center  items-center gap-3 text-black px-4 py-4 rounded-lg w-full md:w-[70%] shadow-lg hover:bg-amber-500 transition-colors"
                  >
                    <img src="/icon-cart.svg" alt="cart" className="filter brightness-0 h-4 w-4" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
                    </div>
    </>
  );
}

export default App;
