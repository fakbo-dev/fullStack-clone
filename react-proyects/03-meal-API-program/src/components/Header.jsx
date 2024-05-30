


function Header() {

    return (
        <header>
            <nav className="nav-content">
                <a href="https://www.themealdb.com/api.php" className="logo">
                    <img src="/src/assets/logo.png" alt="logo" />
                </a>

                <div className="nav-text">
                    <ul>
                        <li><a href="*">Home</a></li>
                        <li><a href="https://www.themealdb.com/api.php">API</a></li>
                    </ul>
                </div>
            </nav>
        </header >
    );
}


export default Header;