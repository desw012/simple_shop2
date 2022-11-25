import {dataLayer} from "./index";

const add_to_wishlist = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'add_to_wishlist',
        event_name : 'add_to_wishlist',
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

export default add_to_wishlist;