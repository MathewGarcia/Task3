import Products from "./Products";
const ArrayFilter = () => {

    const products = Products;

        return <ol>
            {
                products.filter(({onSale}) => onSale === true).map(({id,name}) => <li key = {id}> {name}</li>)
            }
        </ol>
};

export default ArrayFilter;