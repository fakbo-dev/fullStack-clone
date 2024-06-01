import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended({ handleClick }) {
    return (
        <>
            <div>
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">
                    <button className="btns">All Products</button>
                    <Buttons onCLickHandler={handleClick} value="Nike" title="Nike" />
                    <Buttons onCLickHandler={handleClick} value="Adidas" title="Adidas" />
                    <Buttons onCLickHandler={handleClick} value="Puma" title="Puma" />
                    <Buttons onCLickHandler={handleClick} value="Vans" title="Vans" />
                </div>
            </div>
        </>
    )
}

export default Recommended