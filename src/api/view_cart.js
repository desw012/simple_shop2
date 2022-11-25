import {dataLayer} from "./index";

/**
 * currency : 통화 [설정하지 않은 경우 items의 첫번째 currency으로 적용]
 * value :
 * items :
 */
const view_cart = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'view_cart',
        event_name : 'view_cart',
        ecommerce: {
            currency : 'KRW',
            value : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default view_cart;