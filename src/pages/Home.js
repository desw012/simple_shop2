import {Button} from "react-bootstrap";
import {useCallback, useState} from "react";

function Home() {
    const [dataLayer, setDataLayer] = useState(window?.dataLayer);

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
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>Event</div>
                    <div className="btn-group-vertical">
                        <Button variant="primary" onClick={handle_click}>Primary</Button>{' '}
                        <Button variant="primary" onClick={handler_UA_EVEMT_TRIGER}>handler_UA_EVEMT_TRIGER</Button>{' '}
                        <Button variant="primary">Primary</Button>{' '}
                    </div>

                    <h1>전자상거래</h1>

                    <div className="btn-group-vertical">
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_1}>handler_UA_ECOMMERCE_TRIGER_1</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_2}>handler_UA_ECOMMERCE_TRIGER_2</Button>
                    </div>

                    <h1>SAMPLE_전자상거래</h1>
                    <div className="btn-group-vertical">
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_3}>impressions</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_4}>click</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_5}>detail</Button>
                        <Button variant="secondary" onClick={handler_UA_ECOMMERCE_TRIGER_6}>add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;