import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(){
    const { productId } = useParams();
    const [product , setProduct] = useState({});


    useEffect(() => {
        const getProduct = async (productId) => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();
            setProduct(product);


            // window?.dataLayer.push({
            //     "event":  "ga_ecommerce",
            //     "event_name" : "select_item",
            //     "ecommerce":  {
            //         "items": [{
            //             "item_id": productId,
            //             "item_name": product.title,
            //             "price": product.price,
            //             "item_brand": "Compton",
            //             "item_category": product.cetegory,
            //             "index": "1"
            //         }]
            //     }
            // });

        }

        getProduct(productId)
    }, [productId]);

    return (
        <>
            <h1>
                productId : {productId}
            </h1>
            <p>
                {JSON.stringify(product)}
            </p>
            <div className="container my-5 py-2">
                <div className="row">
                    <div className="col-md-6 col-sm-12 py-3">
                        <img
                            className="img-fluid"
                            src={product.image}
                            alt={product.title}
                            width="400px"
                            height="400px"
                        />
                    </div>
                    <div className="col-md-6 col-md-6 py-5">
                        <h4 className="text-uppercase text-muted">{product.category}</h4>
                        <h1 className="display-5">{product.title}</h1>
                        <p className="lead">
                            {product.rating && product.rating.rate}{" "}
                            <i className="fa fa-star"></i>
                        </p>
                        <h3 className="display-6  my-4">${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <button
                            className="btn btn-outline-dark"
                            // onClick={() => addProduct(product)}
                        >
                            Add to Cart
                        </button>
                        <Link to="/cart" className="btn btn-dark mx-3">
                            Go to Cart
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail;