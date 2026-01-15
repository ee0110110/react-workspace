import cat from "../styles/images/cat.jpg";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";

const products = [
    {id:1, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:2, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:3, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:4, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:5, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:6, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:7, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:8, name:"고양이", context : "귀엽고", price: "1000원", url: cat},
    {id:9, name:"고양이", context : "귀엽고", price: "1000원", url: cat}
]
const IndexCom = () => {
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>상품 제목</ProductTitle>
                <ProductList>
                    {products.map( pro => (
                        <ProductListBox key={pro.id}>
                            <ProductImg src={pro.url} alt="" />
                            <ProductName>{pro.name}</ProductName>
                            <ProductContext>{pro.context}</ProductContext>
                            <ProductPrice>{pro.price}</ProductPrice>
                        </ProductListBox>
                    ) ) }
                </ProductList>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default IndexCom;
