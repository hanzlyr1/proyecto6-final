import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./assets/pages/Cart";
import CreateUser from "./assets/pages/CreateUser";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import ProductInfo from "./assets/pages/ProductInfo";
import Purchases from "./assets/pages/Purchases";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProtectedRoutes from "./components/shared/ProtectedRoutes";
import ProtectedRoutess from "./components/shared/ProtectedRoutess";
import { getAllProducts } from "./store/slices/products.slice";

function App() {
  //para ejecutar las actions y el thunk
  const dispach = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispach(getAllProducts());
  }, []);

  //este es el codigo para crear un nuevo usuario
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'
  //   const data = {
  //     firstName: "Jorge",
  //     lastName: "Espinoza",
  //     email: "espinozadiazjorgeluis@gmail.com",
  //     password: "JorgeD123",
  //     phone: "1910552498",
  //     role: "admin"
  //   }
  //   axios.post(URL, data)
  //     .then(res => res.data)
  //     .catch(err => console.log(err))
  // }
  //   , [])

  //aqui termina
  return (
    <div className="App">
      <Header />
      <Routes>
        //ruta '/' y en el elemnte retorna solo jsx
        <Route element={<ProtectedRoutess />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        {/*rutas protegiidas*/}
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
