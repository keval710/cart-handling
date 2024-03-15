import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import { useGetProductQuery } from "./store/api/fetchAPI";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut";
// import { AppDispatch, RootState } from "./store/Store";
// import { fetchDataFun } from "./store/slice/fetchProductSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
const App = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const product = useSelector((state: RootState) => state.product);

  const { data, isLoading } = useGetProductQuery("fetchAPI");

  // useEffect(() => {
  //   dispatch(fetchDataFun());
  // }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home product={{ data, isLoading }} />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
