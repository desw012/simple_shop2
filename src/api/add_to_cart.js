import {dataLayer} from "./index";

const add_to_cart = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'add_to_cart',
        event_name : 'add_to_cart',
        ecommerce: {
            currency : 'KRW',
            value : 1000,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default add_to_cart;