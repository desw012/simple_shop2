import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const getParams = function (pathname){
    let virtual_title = document.title;
    let virtual_location = window.location.href;

    if (pathname?.startsWith("/categories")){
        virtual_title = '상품 리스트2';
        virtual_location = 'http://localhost:3000/categories';
    } else if (pathname?.startsWith("/products")){
        virtual_title = '상품 조회';
        virtual_location = 'http://localhost:3000/products';
    }

    return { virtual_title, virtual_location };
}

function GA(){
    const location = useLocation();
    useEffect(() => {
        const param = getParams(location.pathname);
        document.title = param.virtual_title;

        // window?.dataLayer?.push({
        //     event: 'ga_virtual', ...param
        // });
    }, [location]);

    return (
        <></>
    )
}

export default GA;