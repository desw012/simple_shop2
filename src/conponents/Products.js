import {Link, useParams, use} from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { addCart } from "../store/slices/cartSlice";

function Products() {
    const dispatch = useDispatch();

    const { categoryId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products/");
            const products = await response.json();

            setData(products);
            setLoading(false);
        }

        getProducts()
    }, [categoryId]);




    return (
        <>
            <h1>
                categoryId : {categoryId}
            </h1>
            <Row xs={1} md={2} lg={5} className="g-4">
            { data.map(product => {
                return (
                    <Col key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={ product.image } />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price : {product.price}</Card.Text>
                                <a href ={"/products/"+ product.id}>
                                    <Button variant="primary">Buy</Button>
                                </a>
                                { /*<Link to ={"/products/"+ product.id}>*/ }
                                { /*    <Button variant="primary">Buy</Button>*/ }
                                { /*</Link>*/ }

                                <Button onClick={()=>dispatch(addCart(product))}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            }
            </Row>
        </>

    )
}

export default Products;