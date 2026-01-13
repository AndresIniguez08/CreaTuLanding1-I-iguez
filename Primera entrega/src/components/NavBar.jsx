import CartWidget from "./CartWidget";

const NavBar = () => {
  const categories = [
    { label: "Inicio", href: "#" },
    { label: "Productos", href: "#" },
    { label: "Ofertas", href: "#" },
    { label: "Contacto", href: "#" },
  ];

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* ejemplo de donde podria ir la marca */}
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gray-900 text-white text-sm font-bold">
            FS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">Fox Stickers</p>
            <p className="text-xs text-gray-500">E-commerce</p>
          </div>
        </a>

        {/* Categorías  */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {categories.map((cat) => (
              <li key={cat.label}>
                <a
                  href={cat.href}
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* sección del carrito */}
        <div className="flex items-center gap-3">
          <CartWidget />
        </div>
      </div>

      {/* priorizo siempre que se vea bien en el celu  */}
      <nav className="md:hidden border-t">
        <ul className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          {categories.map((cat) => (
            <li key={cat.label}>
              <a
                href={cat.href}
                className="text-xs text-gray-700 hover:text-gray-900"
              >
                {cat.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
