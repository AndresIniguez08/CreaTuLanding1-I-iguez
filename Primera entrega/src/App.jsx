import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Bienvenido a Fox Stickers! Elegí tus favoritos." />
          }
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route
          path="*"
          element={<h2 className="p-4">404 - Página no encontrada</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
