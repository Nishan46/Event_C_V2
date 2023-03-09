"use client";
import '../globals.scss'
// JSX
import HeroSlider, {
  Slide,
  Nav
} from "hero-slider";

// Images

const palauPacificOcean = "https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891235.jpg?w=996&t=st=1678265678~exp=1678266278~hmac=355d0af4d54e59007a3aa75a7fd95670e4e07f32008b96f8ab7147a60305bb9e";
const queposCostaRica = "https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891147.jpg?w=996&t=st=1678265707~exp=1678266307~hmac=2ac4c2544b5a0b1bf631c5ceb4aa4e8a3e47f528d2b394585e12a0461e1cf090";
const mountainView = "https://img.freepik.com/free-photo/picture-beautiful-couple-posing-with-blue-smoke-bomb-beach_181624-31729.jpg?w=996&t=st=1678265746~exp=1678266346~hmac=f4e1c1c1aea69a057ebbde7640871335c211ca361b5876217a8533bb743d47d1";

const images = [palauPacificOcean , queposCostaRica , mountainView]
const page = () => {

  
  
  return (
    <div className='relative'>
      <div className="flex slides duration-[3000ms] w-fit h-[100vh]">
        {images.map((img) => {
          return(
            <div key={img} className='w-[100vw] h-[100vh] bg-slate-500'>
              <img key={img} src={img} className='w-[100vw] h-[100vh] object-cover object-center' />
            </div>
        )
        })}
      </div>
      <button className='px-10 hover:scale-125 text-3xl focus:bg-transparent duration-200 z-50 prevBtn absolute h-[100vh] top-0 left- text-white'><i className="fa fa-angle-left" aria-hidden="true"></i></button>
      <button className='px-10 hover:scale-125 text-3xl focus:bg-transparent duration-200 z-50 nextBtn absolute h-[100vh] top-0 right-0 text-white'><i className="fa fa-angle-right" aria-hidden="true"></i></button>
      <script src="slider.js"></script>
    </div>
  );
};

export default page;