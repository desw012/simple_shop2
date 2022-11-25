import {dataLayer} from "./index";

const begin_checkout = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'begin_checkout',
        event_name : 'begin_checkout',
        ecommerce: {
            currency : 'KRW',
            value : 1000,
            coupon : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default begin_checkout;