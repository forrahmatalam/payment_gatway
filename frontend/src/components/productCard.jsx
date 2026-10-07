import React from "react";
import axios from "axios";


const ProductCard = () => {

  const product = {
    name: "Premium Headphones",
    description: "High quality wireless headphones",
    price: 49999,
    image:"https://imgs.search.brave.com/v48EqqcSDki1WEWtP_FByej1CFaHTOacxMeCm3z3Mho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFmLzQ2/LzJjLzFmNDYyYzky/ZWQ3YWY0NWI2Zjg5/MWM5ZjE1NDE5ODA1/LmpwZw"
  };

  const checkoutHandler = async(price) => {

const {data:keyData} = await axios.get("/api/payment/key")


    const {data:orderData} = await axios.post("/api/payment/process",{
        amount:price
    })
    const {order} = orderData
  console.log(order)
  const {key} = keyData
  console.log(key)

// Initialize the Checkout object
        const options = {
        key: key, // Replace with your Razorpay key_id
        amount: price, // Amount is in currency subunits.
        currency: 'INR',
        name: 'Rahmat Alam',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
        handler: (response) => axios.post("/api/payment/verification", response),
        prefill: {
          name: 'Rahmat Alam',
          email: 'forrahmatalam@gmail.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };
  const razorpay = new Razorpay(options);

    razorpay.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-80 bg-white rounded-lg shadow-md p-4">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover rounded-md"
        />

        <div className="mt-4">

          <h2 className="text-xl font-semibold">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-2">
            {product.description}
          </p>

          <p className="text-2xl font-bold mt-3">
            ₹{product.price}
          </p>

          <button onClick={()=>checkoutHandler(product.price)}
            className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800"
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;
