import Product from "./Product";

function Cards () {

    let products = [
            {id:1, name: "Product 1", tag: "Description 1", url: "https://placeit.net/uploads/preview_image/119722/image/large_thumb_m31768.jpg"},
            {id:2, name: "Product 2", tag: "Description 2", url: "https://placeit.net/uploads/preview_image/85570/image/large_thumb_m11935r-el2.jpg"},
            {id:3, name: "Product 3", tag: "Description 3", url: "https://placeit.net/uploads/preview_image/106187/image/large_thumb_m17966-r-el2.jpg"}
    ]

    return(
        <div className="cards">

        {

            products.map((product)=>{
            
            return(
                    <Product name={product.name} tag={product.tag} url={product.url} key={product.id} />
            )

            })

        }

        </div>
    )
}

export default Cards;