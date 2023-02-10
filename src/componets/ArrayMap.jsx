import Products from "./Products";

const ArrayMap = () => {
   const productNames = Products.map((product) => {
        return <ol key = {product.id}>{product.name}</ol>;
    })

    return(
        <ul>
            {productNames}
        </ul>
    )
}

export default ArrayMap;