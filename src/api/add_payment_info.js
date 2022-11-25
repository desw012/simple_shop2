import {dataLayer} from "./index";

const add_payment_info = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'add_payment_info',
        event_name : 'add_payment_info',
        ecommerce: {
            currency : 'KRW',
            value : 1000,
            coupon : undefined,
            payment_type : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default add_payment_info;