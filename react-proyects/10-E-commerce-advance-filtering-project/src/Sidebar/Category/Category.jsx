import "./Category.css"
function Category() {
  return (
    <div className="sidebar-flex">
      <h2 className="sidebar-title">Category</h2>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
      </div>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>
      </div>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>
      </div>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>
      </div>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Hells
        </label>
      </div>
    </div>
  )
}

export default Category