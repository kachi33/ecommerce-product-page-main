import Header from "./components/Header";
import { useState } from "react";
import { useCart } from "./hooks/useCart";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    setSelectedImage(prev => {
      if (direction === 'next') {
        return prev === 4 ? 1 : prev + 1;
      } else {
        return prev === 1 ? 4 : prev - 1;
      }
    });
  };
  return (
    <>
      <main className="md:px-24 flex flex-col w-full justify-center md:h-screen">
        <Header 
          cartItems={cartItems}
          getTotalItems={getTotalItems}
          removeFromCart={removeFromCart}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {isSidebarOpen && ((
          <SideBar setIsSideBarOpen={setIsSidebarOpen} />
        ))}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pb-6 md:gap-32 h-full">
              <div className="flex max-w-md flex-col justify-center items-center gap-4 md:gap-8">
              <img
                src={`/image-product-${selectedImage}.jpg`}
                alt="Product Thumbnail"
                className="object-cover h-full w-full items-center md:rounded-lg shadow-md cursor-pointer"
                onClick={openLightbox}
              />
                          {/* Previous button */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute md:hidden left-0 md:left-1/6 top-2/5 transform -translate-y-1/2 bg-white rounded-full p-3 z-10"
            >
              <img src="/icon-previous.svg" alt="Previous" className="w-4 h-4 " />
            </button>
            
            {/* Next button */}
            <button 
              onClick={() => navigateImage('next')}
              className="absolute md:hidden md:right-1/6 right-0 top-2/5 transform -translate-y-1/2 bg-white rounded-full p-3 z-10"
            >
              <img src="/icon-next.svg" alt="Next" className="w-4 h-4" />
            </button>

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
              <div className="flex flex-col px-4  gap-4 justify-center h-full max-w-lg">
                <h1 className="text-sm uppercase text-gray-400 font-bold "> Sneaker Company</h1>
                <h2 className="md:text-5xl text-3xl font-bold w-full md:mb-6">
                  Fall Limited Edition Sneakers
                </h2>
                <p className="text-sm max-w-sm text-gray-400">
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

        {/* Lightbox Modal */}
        {isLightboxOpen && (
        <div className="fixed hidden inset-0 bg-black/70 md:flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative w-full md:max-w-5xl md:top-10 mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-46 text-white hover:text-amber-500 z-10"
            >
              <img src="/icon-close.svg" alt="Close" className="w-6 h-6 filter brightness-0 invert" />
            </button>
            {/* Previous button */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-1/6 top-2/5 transform -translate-y-1/2 bg-white rounded-full p-3 z-10"
            >
              <img src="/icon-previous.svg" alt="Previous" className="w-4 h-4 " />
            </button>
            
            {/* Next button */}
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-1/6 top-2/5 transform -translate-y-1/2 bg-white rounded-full p-3 z-10"
            >
              <img src="/icon-next.svg" alt="Next" className="w-4 h-4" />
            </button>
            
            {/* Main image */}
            <div className="flex justify-center items-center">
            <img
              src={`/image-product-${selectedImage}.jpg`}
              alt="Product"
              className="w-full md:w-[60%] h-auto md:rounded-2xl rounded-lg"
            />
          </div>
            
            {/* Thumbnail navigation */}
            <div className="hidden md:flex justify-center gap-4 mt-14">
              {[1, 2, 3, 4].map((num) => (
                
                <img
                  key={num}
                  src={`/image-product-${num}-thumbnail.jpg`}
                  alt={`Thumbnail ${num}`}
                  className={`w-20 h-20 rounded-lg cursor-pointer object-cover ${
                    selectedImage === num ? 'ring-2 ring-amber-500' : ''              }`}
                  onClick={() => setSelectedImage(num)}
                />
              ))}
            </div>
          </div>
        </div>
        )}
      </main>
    </>
  );
}

export default App;
