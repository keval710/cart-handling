import { fetchData } from "../store/slice/fetchProductSlice";
import Card from "./Card";
import Skeleton from "./Skeleton";

interface Props {
  product: {
    data: fetchData[];
    isLoading: boolean;
  };
}

const Home: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className=" grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {product.isLoading ? (
          <Skeleton />
        ) : (
          product.data.map((val) => {
            return (
              <div key={val.id}>
                <Card val={val} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
