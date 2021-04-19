import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <Card className="mainarea-product">
            <Link to={`/product/${product.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={product.image[1]}
                    alt={product.name} />
                
            </Link>
            <div className="product-name">
                    {product.name}
            </div>
            <span
                className="product-price">
                USD {product.price}
            </span>
            {/* <div className="product-info">
                <h6 className="product-category">
                    {product.category}
                </h6>
                
                <p className="product-description">
                    {product.description}
                </p>
                <div className="product-more">
                    <Link to={`/product/${product.id}`} className="product-link">
                        See More ...
                    </Link>
                    <span
                        className="text-gray">
                        USD {product.price}.00
                    </span>
                </div>
            </div> */}
        </Card>
    );
}
