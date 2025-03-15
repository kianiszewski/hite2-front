import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Microfonos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products?categoria=MICROFONOS")
      .then((response) => setProductos(response.data))
      .catch((error) => console.error("Error al obtener productos de micrófonos:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-white text-center">Micrófonos y Equipos de Grabación</h2>
      <div className="row mt-4">
        {productos.length === 0 ? (
          <p className="text-center text-white">No hay productos en esta categoría.</p>
        ) : (
          productos.map((producto) => (
            <div className="col-md-3 mb-4" key={producto.id_producto}>
              <ProductCard {...producto} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Microfonos;
