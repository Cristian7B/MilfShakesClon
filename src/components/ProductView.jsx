export function ProductView({imgProduct, nameProduct, priceProduct}) {
    return ( 
        <div className="viewProduct">
            <div className="imgProductView">
                <img src={imgProduct} alt={`Imagen de ${nameProduct}`}/>
            </div>
            <div className="informationProduct">
                <div className="nameView">
                    <p>{nameProduct}</p>
                </div>
                <div className="priceView">
                    <p>{priceProduct}</p>
                </div>
            </div>
        </div>
    )
}