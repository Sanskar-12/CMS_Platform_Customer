import axios from "axios";
import qs from "query-string"

const PRODUCTSURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?:string,
    sizeId?:string,
    colorId?:string,
    isFeatured?:boolean
}

const getProducts = async (query:Query) => {

    const url=qs.stringifyUrl({
        url:PRODUCTSURL,
        query:{
            colorId:query.colorId,
            sizeId:query.sizeId,
            categoryId:query.categoryId,
            isFeatured:query.isFeatured,
        }
    })


    const { data } = await axios.get(url);
    return data;
};

export default getProducts;
