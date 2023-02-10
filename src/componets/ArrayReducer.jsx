import Products from "./Products";

const ArrayReducer = () =>{

    const total = Products.reduce((accumilator, product) => {
        return accumilator + product.price
    },0);

    return (
        <div>
            <h2> Total : ${total}</h2>
        </div>
    )
};

export default ArrayReducer;