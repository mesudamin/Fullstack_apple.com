import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        console.log("Fetched data from /iphone.json:", data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  console.log("Products in state:", products);

  return (
    <>
      <section className="internal-page-wrapper top-50 pt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-3">
              <h1 className="font-weight-bold display-4">iPhones</h1>
              <div className="brief-description text-muted">
                The best for the brightest.
              </div>
            </div>
          </div>

          {products.map((product, index) => {
            // Alternating order: flips between image-first and info-first
            let order1 = 1;
            let order2 = 2;
            if (index % 2 === 0) {
              order1 = 2;
              order2 = 1;
            } else {
              order1 = 1;
              order2 = 2;
            }

            return (
              <div
                key={product.Product_id || index}
                className="row justify-content-center align-items-center text-center my-5 py-4"
              >
                {/* Product Information Column */}
                <div
                  className={`col-sm-12 col-md-6 order-${order1} order-md-${order1} my-auto`}
                >
                  <div className="product-title font-weight-bold">
                    {product.product_name}
                  </div>
                  <div className="brief-description my-2">
                    {product.Product_brief_description}
                  </div>
                  <div className="starting-price my-1">
                    {product.Starting_price
                      ? `Starting at ${product.Starting_price}`
                      : ""}
                  </div>
                  <div className="monthly-price text-muted mb-2">
                    {product.Price_range}
                  </div>
                  {product.Product_description && (
                    <div className="product-details text-secondary my-3 px-md-4">
                      {product.Product_description}
                    </div>
                  )}
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        {product.product_url?.startsWith("http") ? (
                          <a
                            href={product.product_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more
                          </a>
                        ) : (
                          <Link
                            to={
                              product.product_url
                                ? `/iphone/${product.product_url}`
                                : "#"
                            }
                          >
                            Learn more
                          </Link>
                        )}
                      </li>
                      {product.Product_link && (
                        <li>
                          <a
                            href={product.Product_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Buy
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Product Image Column */}
                <div
                  className={`col-sm-12 col-md-6 order-${order2} order-md-${order2} my-auto`}
                >
                  <div className="product-image py-3">
                    <img
                      src={product.Product_img}
                      alt={product.product_name}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
