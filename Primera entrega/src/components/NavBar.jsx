import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  //  categorías
  const categories = [
    { label: "Inicio", to: "/" },
    { label: "Anime", to: "/category/anime" },
    { label: "Gaming", to: "/category/gaming" },
    { label: "Programación", to: "/category/programacion" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm hover:text-gray-900 ${
      isActive ? "text-gray-900 font-semibold" : "text-gray-700"
    }`;

  const navLinkClassMobile = ({ isActive }) =>
    `text-xs hover:text-gray-900 ${
      isActive ? "text-gray-900 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gray-900 text-white text-sm font-bold">
            FS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">Fox Stickers</p>
            <p className="text-xs text-gray-500">E-commerce</p>
          </div>
        </Link>

        {/* ✅ Categorías desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {categories.map((cat) => (
              <li key={cat.label}>
                <NavLink to={cat.to} className={navLinkClass}>
                  {cat.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* carrito */}
        <div className="flex items-center gap-3">
          <CartWidget />
        </div>
      </div>

      {/*  Categorías mobile */}
      <nav className="md:hidden border-t">
        <ul className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          {categories.map((cat) => (
            <li key={cat.label}>
              <NavLink to={cat.to} className={navLinkClassMobile}>
                {cat.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
