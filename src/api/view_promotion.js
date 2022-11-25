import {dataLayer} from "./index";

/**
 * creative_name : 프로모션 광고 소재의 이름 [items에서 지정 시 무시됨]
 * creative_slot : 프로모션 광고 소재 슬롯의 이름 [items에서 지정 시 무시됨]
 * location_id : 위치 ID [items에서 지정 시 무시됨]
 * promotion_id : 프로모션 ID [items에서 지정 시 무시됨]
 * promotion_name : 프로모션 이름 [items에서 지정 시 무시됨]
 * items : 이벤트 상품 리스트
 */
const view_promotion = () => {
    dataLayer.push({
        event : 'ga_ecommerce',
        category : 'Ecommerce',
        action : 'view_promotion',
        event_name : 'view_promotion',
        ecommerce: {
            creative_name : undefined,
            creative_slot : undefined,
            location_id : undefined,
            promotion_id : undefined,
            promotion_name : undefined,
            items : [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee"
                }
            ]
        }
    });
}

export default view_promotion;