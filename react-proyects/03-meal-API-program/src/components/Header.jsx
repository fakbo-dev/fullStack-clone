


function Header() {

    return (
        <header>
            <nav className="nav-content">
                <a href="https://www.themealdb.com/api.php" className="logo">
                    <img src="/src/assets/logo.png" alt="logo" />
                </a>

                <div className="nav-text">
                    <ul>
                        <li><label htmlFor="search">
                            <input type="text" name="search" id="search"
                                placeholder="Seach meal..." autoComplete="off" />
                        </label>
                        </li>
                        <li><a href="*">Home</a></li>
                        <li><a href="*">API</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Header;