import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
function App() {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  )
}

export default App