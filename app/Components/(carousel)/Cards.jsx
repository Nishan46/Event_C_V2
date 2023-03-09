"use client";
import '../../globals.scss'


function Cards() {
  return(
    <div className=''>
      <div id='caros' className="carousel sm:scale-75 md:scale-90 xl:scale-100 relative sm:left-12 xl:left-32">
            <div className='carousel-item cursor-pointer'>
              <div className='relative'>
                <img className='object-contain rounded-lg' src="https://raw.githubusercontent.com/Nishan46/mystore/main/birthday3.jpg" alt="banner" />
                <div className='text-white absolute gradient-banner rounded-lg top-0 left-0 right-0 bottom-0 flex items-end'>
                  <section>
                    <h1 className='font-semibold text-lg uppercase px-3'>Birthday</h1>
                    <p className='px-3 text-sm relative bottom-[5px]'>any range of birthday aranges (full package)</p>
                  </section>
                </div>
              </div>
            </div>
            <div className='carousel-item cursor-pointer'>
              <div className='relative'>
                <img className='object-contain rounded-lg' src="https://raw.githubusercontent.com/Nishan46/mystore/main/birthday4.jpg" alt="banner" />
                <div className='text-white absolute gradient-banner rounded-lg top-0 left-0 right-0 bottom-0 flex items-end'>
                  <section>
                    <h1 className='font-semibold text-lg uppercase px-3'>Birthday</h1>
                    <p className='px-3 text-sm relative bottom-[5px]'>any range of birthday aranges (full package)</p>
                  </section>
                </div>
              </div>
            </div>

            <div className='carousel-item cursor-pointer'>
              <div className='relative'>
                <img className='object-contain rounded-lg' src="https://raw.githubusercontent.com/Nishan46/mystore/main/birthday2.jpg" alt="banner" />
                <div className='text-white absolute gradient-banner rounded-lg top-0 left-0 right-0 bottom-0 flex items-end'>
                  <section>
                    <h1 className='font-semibold text-lg uppercase px-3'>Birthday</h1>
                    <p className='px-3 text-sm relative bottom-[5px]'>any range of birthday aranges (full package)</p>
                  </section>
                </div>
              </div>
            </div>

            <div className='carousel-item cursor-pointer'>
              <div className='relative'>
                <img className='object-contain rounded-lg' src="https://raw.githubusercontent.com/Nishan46/mystore/main/birthday5.jpg" alt="banner" />
                <div className='text-white absolute gradient-banner rounded-lg top-0 left-0 right-0 bottom-0 flex items-end'>
                  <section>
                    <h1 className='font-semibold text-lg uppercase px-3'>Birthday</h1>
                    <p className='px-3 text-sm relative bottom-[5px]'>any range of birthday aranges (full package)</p>
                  </section>
                </div>
              </div>
            </div>

            <div className='carousel-item cursor-pointer'>
              <div className='relative'>
                <img className='object-contain rounded-lg' src="https://raw.githubusercontent.com/Nishan46/mystore/main/birthday6.jpg" alt="banner" />
                <div className='text-white absolute gradient-banner rounded-lg top-0 left-0 right-0 bottom-0 flex items-end'>
                  <section>
                    <h1 className='font-semibold text-lg uppercase px-3'>Birthday</h1>
                    <p className='px-3 text-sm relative bottom-[5px]'>any range of birthday aranges (full package)</p>
                  </section>
                </div>
              </div>
            </div>
      </div>
      <script src="swiper.js"></script>
    </div>
  )
}

export default Cards
