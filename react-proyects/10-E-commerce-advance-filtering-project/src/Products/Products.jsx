import { FaStar, FaShoppingBag } from "react-icons/fa";
import "./Products.css"

function Products() {
    return (
        <>
            <section className="card-container">
                <section className="card">
                    <img
                        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
                        alt="shoes"
                        className="card-img" />
                    <div className="card-details">
                        <h3 className="card-title">
                            Shoe
                        </h3>
                        <section className="card-review">
                            <FaStar className="ratings-star" />
                            <FaStar className="ratings-star" />
                            <FaStar className="ratings-star" />
                            <FaStar className="ratings-star" />
                            <span className="total-reviews">4</span>
                        </section>
                        <section className="card-price">
                            <div className="price">
                                <del>$300</del> $200
                            </div>
                            <div className="bag">
                                <FaShoppingBag className="bag-icon" />
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Products