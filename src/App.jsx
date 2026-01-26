import "./App.css";
import illustration from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";

function App() {
  return (
    <>
      <div className="w-[384px] h-[522px] rounded-[20px] bg-white p-[24px] col-between ">
        <img
          src={illustration}
          alt=""
          className="w-full h-[200px] rounded-[10px]"
        />
        <div className="col-between">
          <div className="rounded-[4px] w-fit px-[12px] py-[4px] bg-[#F4D04E] mb-[12px]">
            <p className="figtree-sm-bold">Learning</p>
          </div>
          <p className="figtree-sm mb-[12px]">Published 21 Dec 2023</p>
          <h1 className="figtree-lg mb-[12px] hover:text-[#F4D04E] cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p className="figtree-md text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="w-fit row-between">
          <img src={avatar} alt="" className="w-[32px] aspect-square" />
          <p className="figtree-sm-bold ml-[12px]">Greg Hooper</p>
        </div>
      </div>
    </>
  );
}

export default App;
