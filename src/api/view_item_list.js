import {dataLayer} from "./index";

const view_item_list = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'view_item_list',
        event_name : 'view_item_list',
        ecommerce: {
            item_list_id : undefined,
            item_list_name : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default view_item_list;