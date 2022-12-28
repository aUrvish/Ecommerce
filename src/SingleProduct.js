import React , {useContext , useEffect} from "react";
import { useParams } from "react-router";
import LinkLine from "./Components/LinkLine";
import { AppProvider } from "./Context/UseContaxt";
import ErrorPage from "./ErrorPage";
import Loading from "./Components/Loading";
import styled from "styled-components"
import ProductInfo from "./Components/Product_info";
import ProductImage from "./Components/ProductImage";


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
    .image , .info {
        display: grid;
        place-items: center;
    }

    @media (max-width: ${({theme}) => theme.media.tab }) {
        grid-template-columns: 1fr;
    }
`

const SingleProduct = () => {

    const {id} = useParams();
    const {stateSingleProduct , SingleProductAPI} = useContext(AppProvider);
    
    useEffect(() => {
        SingleProductAPI(`https://api.pujakaitem.com/api/products?id=${id}`);
    } , [])
    

    if (stateSingleProduct.isSingleLoading === true) {
        return(
            <>
                <Loading/>
            </>
        )
    }else if (stateSingleProduct.isSingleError === true) {
        return(
            <>
                <ErrorPage image={"../image/no-internet.png"} msg={"no internet..."} h="20rem" w="20rem" />
            </>
        )
    } else {

        const {image} = stateSingleProduct.singleProduct;
        if(image !== undefined)
        {
            return(
                <>
                    <LinkLine page={stateSingleProduct.singleProduct.name} />
                    <Wrapper>
                        <div className="image">
                            <ProductImage data={image}/>
                        </div>
                        <div className="info">
                            <ProductInfo data={stateSingleProduct.singleProduct}/>
                        </div>
                    </Wrapper>
                </>
            )
        }else {
            return(
                <>
                    <Loading/>
                </>
            )
        }
    }

}

export default SingleProduct;