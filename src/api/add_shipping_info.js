import {dataLayer} from "./index";

const add_shipping_info = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'add_shipping_info',
        event_name : 'add_shipping_info',
        ecommerce: {
            currency : 'KRW',
            value : 1000,
            coupon : undefined,
            shipping_tier : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default add_shipping_info;