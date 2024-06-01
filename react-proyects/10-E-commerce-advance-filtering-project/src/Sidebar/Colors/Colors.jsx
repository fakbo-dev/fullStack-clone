import "./Colors.css"

function Colors() {
    return (
        <>
            <div>
                <h2 className="sidebar-title">Colors</h2>
                <div className="sidebar-items">
                    <label className="sidebar-label-container">
                        <input type="radio" name="test2" />
                        <span className="checkmark"></span>All
                    </label>

                    <div className="sidebar-items">
                        <label className="sidebar-label-container">
                            <input type="radio" name="test2" />
                            <span className="checkmark"></span>black
                        </label>
                    </div>

                    <div className="sidebar-items">
                        <label className="sidebar-label-container">
                            <input type="radio" name="test2" />
                            <span className="checkmark"></span>$50 - $100
                        </label>
                    </div>

                    <div className="sidebar-items">
                        <label className="sidebar-label-container">
                            <input type="radio" name="test2" />
                            <span className="checkmark"></span>$100 - $150
                        </label>
                    </div>

                    <div className="sidebar-items">
                        <label className="sidebar-label-container">
                            <input type="radio" name="test2" />
                            <span className="checkmark"></span>$150 - $200
                        </label>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Colors