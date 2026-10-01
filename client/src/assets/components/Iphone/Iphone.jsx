import React, { useState, useEffect } from 'react'

export default function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2026/iphones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log("Fetched data:", data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  console.log("Products in state:", products);

  return (
   <>
      <div className='containerer'>
        <div className='row align-items-center justify-content-center text-center'>
            <div className='col-12 mt-5 pt-5 mb-5'>
                <h1 className='font-weight-bold'>Iphone Page</h1>
            </div>
        </div>
      </div>
    </>
  )
}
