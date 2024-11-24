import Form from "./Form";
// import upi from "../assets/upi.jpg";
import Result from "../components/Result";
const Home = () => {
  return (
    <div className="flex felx-row justify-around items-center ">
      <div>
        <Form />
      </div>
      <div className="bg-[url('http://trackolap-images-prod.s3.amazonaws.com/images/blog/5f65bc0441528e25a8532028/1600502788859.png')] h-screen bg-opacity-40 bg-transparent w-full bg-cover bg-center">
        <div className="bg-slate-400">
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Home;
