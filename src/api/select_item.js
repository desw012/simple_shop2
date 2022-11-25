import {dataLayer} from "./index";

/**
 * item_list_id : 상품이 사용자에게 표시된 목록 ID [items에서 지정 시 무시됨]
 * item_list_name : 상품이 사용자에게 표시된 목록 이름 [items에서 지정 시 무시됨]
 * items : 이벤트를 위한 상품 리스트 [단일 요소][여려 요소일 경우 첫번째 요소만 사용]
 */
const select_item = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'select_item',
        event_name : 'select_item',
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

export default select_item;