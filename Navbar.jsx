import { useState } from "react";

const menuItems = ["Home", "How It Works", "Features", "Pricing"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-inner">
        <a className="logo" href="#home" onClick={closeMenu}>
          Logo
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className="nav-menu">
          <div className="nav-links">
            {menuItems.map((item) => (
              <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </div>

          <a className="account-button" href="#create-account" onClick={closeMenu}>
            Create Account
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
