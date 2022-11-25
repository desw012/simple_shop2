import {dataLayer} from "./index";

const view_item = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'view_item',
        event_name : 'view_item',
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

export default view_item;