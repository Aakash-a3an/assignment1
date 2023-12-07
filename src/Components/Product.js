
function Product(props) {
    return(
        <div className="product">
            <img className="product-img" src={props.url}></img>
            <h3>{props.name}</h3>
            <p>{props.tag}</p>
        </div>
    )
}

export default Product;