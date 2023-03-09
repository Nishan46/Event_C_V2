"use client";
import Image from 'next/image'
import React, { useEffect, useState , useRef } from 'react'
import Cards from './Components/(carousel)/Cards'
import './globals.scss'
import HeroSlider, {Slide} from 'hero-slider';

const ado = 'https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?w=996&t=st=1678265618~exp=1678266218~hmac=292388d7c72b54a684f72074222a23c2fc6e46df9bbe966af0a58f871cdcd5b2';


const Header = () => {

  const images = new Array("https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?w=996&t=st=1678265618~exp=1678266218~hmac=292388d7c72b54a684f72074222a23c2fc6e46df9bbe966af0a58f871cdcd5b2","https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891235.jpg?w=996&t=st=1678265678~exp=1678266278~hmac=355d0af4d54e59007a3aa75a7fd95670e4e07f32008b96f8ab7147a60305bb9e","https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891147.jpg?w=996&t=st=1678265707~exp=1678266307~hmac=2ac4c2544b5a0b1bf631c5ceb4aa4e8a3e47f528d2b394585e12a0461e1cf090","https://img.freepik.com/free-photo/picture-beautiful-couple-posing-with-blue-smoke-bomb-beach_181624-31729.jpg?w=996&t=st=1678265746~exp=1678266346~hmac=f4e1c1c1aea69a057ebbde7640871335c211ca361b5876217a8533bb743d47d1","https://img.freepik.com/free-photo/blue-white-wedding-aisle-beach-surrounded-by-palms-with-sea-background_181624-32618.jpg?w=996&t=st=1678265763~exp=1678266363~hmac=01752a5720920cf3ed627b2738c84ed2f082dc059eabaae8f8cf40c7a7d26c58","https://img.freepik.com/free-photo/man-woman-celebrating-their-wedding-beach_23-2149003475.jpg?w=996&t=st=1678265789~exp=1678266389~hmac=4fbc3addc9fbe353080662a81ec0bbbd8d1a00156f6686a7c1cbec38621b1017","https://img.freepik.com/free-photo/picture-beautiful-couple-kissing-each-other-their-wedding-day_181624-31783.jpg?w=996&t=st=1678265821~exp=1678266421~hmac=8ae94e7c1f0a59c58802d5b00ece5a06be998fdb1e1b5be56d726141c7993237", "https://img.freepik.com/free-photo/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons_8353-8415.jpg?w=996&t=st=1678265860~exp=1678266460~hmac=bcd55119c9a67434a0c10b2ddb3930df7edc31a8b151b83b8e98b775161e4456","https://img.freepik.com/free-photo/look-from-wedding-altar-cheerful-wedding-couple-during-ceremony_8353-8417.jpg?w=996&t=st=1678265877~exp=1678266477~hmac=0ced8f485e1853480a6109a8c9329496b5af430c88d8ec42a6535972371e9cbd","https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?w=996&t=st=1678265891~exp=1678266491~hmac=7cd3bd7f375109e58125f55668a3d42030784a57d28661bca67e2550b20dfff0","https://img.freepik.com/free-photo/bride-couple-waving-while-dacning-with-confetti_8353-12337.jpg?w=996&t=st=1678265943~exp=1678266543~hmac=9453363182adabff3b2e291730bba599a160cb0753fb0d628df7bf5b10d4aa2c","https://img.freepik.com/free-photo/bride-groom-posing-streets-old-town_1153-5950.jpg?w=996&t=st=1678265953~exp=1678266553~hmac=1abe331ba3f781b617e1bc815bd1779406754e6a8be2ffbe517a3907e6714a2e");



  return (
    <div>
        <div className='absolute top-0 left-0 bottom-0 right-0'>
            <div className='relative'>
              <div className='relative'>
                  <div className="flex slides duration-1000 w-fit h-[100vh]">
                    {images.map((img) => {
                      return(
                        <div key={img} className='w-[100vw] h-[100vh] relative'>
                          <img key={img} src={img} className='w-[100vw] h-[100vh] object-cover object-center' />
                          <div className='absolute top-0 left-0 right-0 bottom-0 gradient'></div>
                          <div className='absolute z-40 top-20 xl:top-36 text-white right-0 sm:w-[60%] md:w-[55%] xl:w-[40%] mr-20 p-8'>
                            <h1 className='uppercase text-5xl font-bold '>Wedding</h1>
                            <p className='fade-in ml-1 text-lg mt-1'> We believe that every couple deserves a wedding that is both memorable and stress-free. That's why we offer comprehensive wedding planning services that take care of every detail, leaving you free to enjoy your special day.

                            Our team of experienced wedding planners will work closely with you to create a customized wedding that reflects your personal style and vision. We'll take care of everything from venue selection, décor, and catering to entertainment, photography, and transportation, ensuring that every aspect of your wedding is perfectly executed.

                            We understand that planning a wedding can be overwhelming, but with [Your Company Name], you can relax knowing that you have a dedicated team of professionals taking care of everything. From the initial consultation to the final touches on the big day, we'll be by your side every step of the way.
                            </p>
                          </div>
                        </div>
                        
                    )
                    })}
                  </div>
                  <button className='px-5 hover:scale-125 text-3xl focus:bg-transparent duration-200 z-40 prevBtn absolute h-[100vh] top-0 left-0 text-slate-100 hover:text-white'><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                  <button className='px-5 hover:scale-125 text-3xl focus:bg-transparent duration-200 z-40 nextBtn absolute h-[100vh] top-0 right-0 text-slate-100 hover:text-white'><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-end '>
                  <div className='flex-[0.5] flex sm:flex-col xl:flex-row justify-center items-center h-full'>
                    <div className='fade-in-top-to-bottom fade-in-bottom-to-top'>
                      <Image alt='image' src={'https://raw.githubusercontent.com/Nishan46/mystore/main/logotransparent.png'} width={1000} height={1000}/>
                      <h1 className='text-center font-semibold relative sm:bottom-20 xl:bottom-24 text-white text-5xl'>EVENT C</h1>
                    </div>
                    <div className='text-white w-[70%] flex flex-col justify-end items-start h-fit relative sm:bottom-20 xl:bottom-1 sm:mt-10  p-3 text-lg xl:text-xl
                    fade-and-scale-in
                    rounded-sm outline glass-effect outline-1
                    
                    '>

                      <div className='relative sm:hidden xl:block mb-6 w-[90%] justify-items-center left-[5%] pt-4'>
                        <Image className='rounded-md' src={'https://raw.githubusercontent.com/Nishan46/mystore/main/cardb.jpg'} width={1920} height={1080}/>
                        <div className='absolute text-black top-0 w-[100%] flex flex-col justify-end h-[100%] rounded-md'>
                          <p className=' text-md px-3 py-1 relative top-2'>Bussiness with us</p>
                          <p className='text-xs px-3 relative bottom-1 pt-[2px]'>you deside your own.</p>
                        </div>
                      </div>
                      <p className='sm:text-center xl:text-left fade-in p-3 xl:px-7 xl:py-4 outline-white'>Welcome to Event C, where we specialize in creating magical and unforgettable wedding events. Our experienced event planners are passionate about creating the perfect day for our clients, and we're committed to bringing your vision to life.

                      We understand that your wedding day is one of the most important days of your life, and we're here to ensure that every detail is perfect. From selecting the perfect venue to coordinating catering, entertainment, and decor, we'll work closely with you to create a wedding that is uniquely tailored to your style and preferences.</p>
                    </div>
                  </div>
                  <div className='flex-[0.5] space-x-3 flex items-end h-fit mr-28 sm:justify-center xl:justify-end'>
                    <div className='sm:w-[90%] relative p-3 xl:mr-14 md:mb-10 fade-in-right-to-left'>
                      <Cards/>
                      <div className='absolute top-0 left-0 right-0 bottom-0'></div>
                      <script src="slider.js"></script>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Header




{/* <Image key={images[0]} id='slide-img' alt='banner' className='ease duration-1000 w-[100vw] object-cover h-[100vh] object-center' src={images[11]} width={1920} height={1080}/> */}