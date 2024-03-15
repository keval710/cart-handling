import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchDataFun } from "./store/slice/fetchProductSlice";
import { AppDispatch, RootState } from "./store/Store";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

const App = () => {
  const product: {
    data: fetchData[];
    isLoading: boolean;
  } = useSelector((state: RootState) => state.product);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFun());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <NavBar />
      <Home product={product} />
    </>
  );
};

export default App;
