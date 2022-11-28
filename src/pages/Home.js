import {Accordion, Button, ListGroup} from "react-bootstrap";
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {showCodePreView} from "../store/slices/codeSlice";
import add_payment_info from "../api/add_payment_info";
import view_item from "../api/view_item";
import add_shipping_info from "../api/add_shipping_info";
import add_to_cart from "../api/add_to_cart";
import add_to_wishlist from "../api/add_to_wishlist";
import begin_checkout from "../api/begin_checkout";
import purchase from "../api/purchase";
import refund from "../api/refund";
import remove_from_cart from "../api/remove_from_cart";
import select_item from "../api/select_item";
import select_promotion from "../api/select_promotion";
import view_cart from "../api/view_cart";
import view_item_list from "../api/view_item_list";
import view_promotion from "../api/view_promotion";

function Home() {
    const dispatch = useDispatch();

    const handle_click = useCallback(()=>{
        // window?.dataLayer?.push({
        //     event: 'ga_event', event_name : 'my_event'
        // });

        // window?.dataLayer.push({
        //     "event":  "ga_ecommerce",
        //     "event_name" : "select_item",
        //     "ecommerce":  {
        //         "items": [{
        //             "item_id": "9bdd2",
        //             "item_name": "Compton T-Shirt",
        //             "price": "4400",
        //             "item_brand": "Compton",
        //             "item_category": "T-Shirts",
        //             "index": "1"
        //         }]
        //     }
        // });
    }, []);

    const handler_UA_EVEMT_TRIGER = useCallback(()=>{
        window?.dataLayer?.push({
            'event' : 'ga_event',
            'category' : 'my_category',
            'action' : 'my_action',
            'label' : 'BUTTON_UA_EVENT',
            'dimension1' : '맞춤 측정기준 1값',
            'dimension2' : '맞춤 측정기준 1값'
        });

    }, []);

    const handler_UA_ECOMMERCE_TRIGER_1 = useCallback(()=>{
        window?.dataLayer?.push({
            'event': 'ga_ecommerce',
            'category' : 'Ecommerce',
            'action' : 'Impression',
            'dimension1' : '신용카드',
            'dimension2' : '맞춤 측정기준 2값',
            'dimension3' : '맞춤 측정기준 3값',
            'dimension4' : '맞춤 측정기준 4값',
            'dimension5' : '맞춤 측정기준 5값',
            'ecommerce' : {
                'currencyCode' : 'KRW',
                'impression' : { 'products' : [
                        { 'id' : 'GSP020H23', 'name' : '여름 프리뷰 티셔츠' }
                    ] }
            } });
    }, []);

    const handler_UA_ECOMMERCE_TRIGER_2 = useCallback(()=>{
        window?.dataLayer?.push({
            'event' : 'ga_ecommerce',
            'category' : 'Ecommerce',
            'action' : 'Purchase',
            'dimension1' : '신용카드',
            'dimension2' : '맞춤 측정기준 2값',
            'dimension3' : '맞춤 측정기준 3값',
            'dimension4' : '맞춤 측정기준 4값',
            'dimension5' : '맞춤 측정기준 5값',
            // 'nonInteraction' : true,
            'ecommerce' : {
                'currencyCode' : 'KRW',
                'purchase' : {
                    'actionField' : { 'id' : '201904439000', 'revenue' : '17900' , 'shipping' : '0'},
                    'products' : [
                        {'id' : 'GSP020H23', 'name' : 'GA가방',
                            'category' : '패션의류/남성의류', 'variant' : '블랙',
                            'price' : '17900', 'quantity' : '1' , 'dimension14' : '12345678', 'dimension15' : 'ETV' }
                    ]
                }
            }
        });

        window?.dataLayer?.dataLayer({
            category : undefined,
            action : undefined,
            ecommerce : undefined
        })
    }, []);


    const handler_UA_ECOMMERCE_TRIGER_3 = useCallback(()=>{
// Measures product impressions and also tracks a standard
// pageview for the tag configuration.
// Product impressions are sent by pushing an impressions object
// containing one or more impressionFieldObjects.
        window?.dataLayer?.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            'ecommerce': {
                'currencyCode': 'EUR',                       // Local currency is optional.
                'impressions': [
                    {
                        'name': 'Triblend Android T-Shirt',       // Name or ID is required.
                        'id': '12345',
                        'price': '15.25',
                        'brand': 'Google',
                        'category': 'Apparel',
                        'variant': 'Gray',
                        'list': 'Search Results',
                        'position': 1
                    },
                    {
                        'name': 'Donut Friday Scented T-Shirt',
                        'id': '67890',
                        'price': '33.75',
                        'brand': 'Google',
                        'category': 'Apparel',
                        'variant': 'Black',
                        'list': 'Search Results',
                        'position': 2
                    }]
            }
        });
    }, []);

    const handler_UA_ECOMMERCE_TRIGER_4 = useCallback(()=> {

        const productObj = {
            'name': 'Donut Friday Scented T-Shirt',
            'id': '67890',
            'price': '33.75',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Black',
            'list': 'Search Results',
            'position': 2
        }

        window?.dataLayer?.push({ecommerce: null});  // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            'event': 'productClick',
            'ecommerce': {
                'click': {
                    'actionField': {'list': 'Search Results'},      // Optional list property.
                    'products': [{
                        'name': productObj.name,                      // Name or ID is required.
                        'id': productObj.id,
                        'price': productObj.price,
                        'brand': productObj.brand,
                        'category': productObj.category,
                        'variant': productObj.variant,
                        'position': productObj.position
                    }]
                }
            },
            'eventCallback': function () {
                //document.location = productObj.url
            }
        });
    }, []);


    const handler_UA_ECOMMERCE_TRIGER_5 = useCallback(()=> {
        const productObj = {
            'name': 'Donut Friday Scented T-Shirt',
            'id': '67890',
            'price': '33.75',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Black',
            'list': 'Search Results',
            'position': 2
        }

        window?.dataLayer?.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            'event' : 'ga_ecommerce',
            'category' : 'Ecommerce',
            'action' : 'detail',
            'ecommerce': {
                'detail': {
                    'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
                    'products': [{
                        'name': productObj.name,         // Name or ID is required.
                        'id': productObj.id,
                        'price': productObj.price,
                        'brand': productObj.brand,
                        'category': productObj.category,
                        'variant': productObj.variant
                    }]
                }
            }
        });
    }, []);

    const handler_UA_ECOMMERCE_TRIGER_6 = useCallback(()=> {
        const productObj = {
            'name': 'Donut Friday Scented T-Shirt',
            'id': '67890',
            'price': '33.75',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Black',
            'list': 'Search Results',
            'position': 2
        }

        window?.dataLayer?.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            'event' : 'ga_ecommerce',
            'category' : 'Ecommerce',
            'action' : 'add',
            'ecommerce': {
                'currencyCode': 'EUR',
                'add': {
                    'products': [{
                        'name': productObj.name,         // Name or ID is required.
                        'id': productObj.id,
                        'price': productObj.price,
                        'brand': productObj.brand,
                        'category': productObj.category,
                        'variant': productObj.variant,
                        'quantity' : 1
                    }]
                }
            }
        });
    }, []);


    const showModal = useCallback(()=>{
        const productObj = {
            'name': 'Donut Friday Scented T-Shirt',
            'id': '67890',
            'price': '33.75',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Black',
            'list': 'Search Results',
            'position': 2
        }
        const code = `const productObj = {
    'name': 'Donut Friday Scented T-Shirt',
    'id': '67890',
    'price': '33.75',
    'brand': 'Google',
    'category': 'Apparel',
    'variant': 'Black',
    'list': 'Search Results',
    'position': 2
}`
        dispatch(showCodePreView(code));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>Event</div>
                    <div className="btn-group-vertical">
                        <Button variant="primary" onClick={handle_click}>Primary</Button>
                        <Button variant="primary" onClick={handler_UA_EVEMT_TRIGER}>handler_UA_EVEMT_TRIGER</Button>
                        <Button variant="primary">Primary</Button>
                    </div>

                    <h1>전자상거래</h1>

                    <div className="btn-group-vertical">
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_1}>handler_UA_ECOMMERCE_TRIGER_1</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_2}>handler_UA_ECOMMERCE_TRIGER_2</Button>
                    </div>

                    <h1>SAMPLE_전자상거래</h1>
                    <div className="btn-group-vertical">
                        <Link to="/category">view_item_list</Link>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_3}>impressions</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_4}>click</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_5}>detail</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_6}>add to Cart</Button>
                    </div>
                    <h1>MODAL TEST</h1>
                    <div>
                        <Button onClick={showModal}>Modal test</Button>
                    </div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>GA4/GTM E-COMMERCE TEST</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item action onClick={ view_item_list } >상품 목록 조회 - view_item_list</ListGroup.Item>
                                    <ListGroup.Item action onClick={ view_item } >상품 조회 - view_item</ListGroup.Item>

                                    <ListGroup.Item action onClick={ begin_checkout } >결제 시작 - begin_checkout</ListGroup.Item>
                                    <ListGroup.Item action onClick={ add_payment_info } >결제 정보 등록 - add_payment_info</ListGroup.Item>
                                    <ListGroup.Item action onClick={ add_shipping_info } >배송 정보 등록 - add_shipping_info</ListGroup.Item>

                                    <ListGroup.Item action onClick={ purchase } >구매 - purchase</ListGroup.Item>
                                    <ListGroup.Item action onClick={ refund } >환불 - refund</ListGroup.Item>

                                    <ListGroup.Item action onClick={ select_item } >상품 선택 단계 - select_item</ListGroup.Item>

                                    <ListGroup.Item action onClick={ add_to_wishlist } >위시리스트 추가 - add_to_wishlist</ListGroup.Item>

                                    <ListGroup.Item action onClick={ view_cart } >장바구니 조회 - view_cart</ListGroup.Item>
                                    <ListGroup.Item action onClick={ add_to_cart } >장바구니 상품 추가 - add_to_cart</ListGroup.Item>
                                    <ListGroup.Item action onClick={ remove_from_cart } >장바구니 상품 삭제 - remove_from_cart</ListGroup.Item>

                                    <ListGroup.Item action onClick={ select_promotion } >프로모션 선택 - select_promotion</ListGroup.Item>
                                    <ListGroup.Item action onClick={ view_promotion } >프로모션 조회 - view_promotion</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>GA4/GTM E-COMMERCE TEST</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Home;