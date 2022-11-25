import {dataLayer} from "./index";

const purchase = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'purchase',
        event_name : 'purchase',
        ecommerce: {
            currency : 'KRW',
            transaction_id : '1',
            value : 1000,
            affiliation : undefined,
            coupon : undefined,
            shipping : undefined,
            tax : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default purchase;