import {dataLayer} from "./index";

const remove_from_cart = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'remove_from_cart',
        event_name : 'remove_from_cart',
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

export default remove_from_cart;