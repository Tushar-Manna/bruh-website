import Button from "@/components/Button";
import Lottie from "react-lottie-player";
// import animationData from "/Animation - 1743219469295.lottie";

export default function Home() {
  return (
    <div>
      <div className="flex items-center h-screen p-20 place-content-between">
        <div>
          <div className="mb-8">
            <h1 className="decoration-black text-8xl">Bruhs</h1>
            <h2>The Group that is doing but actually not doing anything.</h2>
          </div>
          <div className="flex space-x-4">
            <Button >Contact Us</Button>
            <Button >Read Articles</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/av.png" className="drop-shadow-2xl h-auto" alt="" />
        </div>
      </div>
      <div className="flex items-center p-8 place-content-between">
        <div>Scroll</div>
        <div>
          {/* <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 300, height: 300 }}
          /> */}
        </div>
      </div>
      <div className="h-screen">
        <div className="flex justify-center">
          <h1 className="text-6xl">Our Bruhs</h1>
        </div>
        <div className="flex items-center justify-center text-xl">
          <h1>We are Lazy (fr)</h1>
        </div>
        <div className="flex items-center justify-center">
          
        </div>
      </div>
      <div className="bg-primary p-4">
        <span className="m-8 text-center text-white">
          &#169; 2025 Bruhs. All rights reserved.
        </span>
      </div>
    </div>
  );
}

