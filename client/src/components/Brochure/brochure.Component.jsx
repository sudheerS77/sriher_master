import React from 'react'
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom';


const BrochureComponent = ({galleryImages}) => {

  return (
    <div>
        <div className="mx-6 lg:mx-44">
            {/* <h1 className="text-lg md:text-xl font-light text-gray-400 pb-5">{name}</h1> */}
          <Gallery withDownloadButton>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-44 md:mx-6 md:w-full md:h-full"
              style={{ }}>
              {
                galleryImages?.map((data) => (
                  <div className="bg-gray-50 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <div className=''>
                      <Item
                        original={data.image}
                        thumbnail={data.image}
                        width={500}
                        height={500}
                      >{
                          ({ref, open}) => (
                            <div className="shadow-2xl md:w-64 md:h-64 lg:w-80 lg:h-80">
                                <img ref={ref} onClick={open} src={data.image} className="w-full h-full rounded-sm object-cover transform transition duration-700 hover:scale-110" />
                            </div>
                        )}
                        </Item>
                        {/* <div className='absolute w-full bottom-0 hover:scale-110 text-xs md:text-lg font-light text-gray-50 text-center bg-slate-900 opacity-50'>
                          {data.imageType}
                        </div> */}
                    </div>
                    <div className="flex flex-col items-start gap-2 bg-gray-50 p-1 border-2 truncate">
                      <span className="flex flex-col items-start gap-1 md:font-bold md:w-64">
                        <h4 className="text-lg font-bold">GmeetLink:</h4>
                        <Link to="/brochure" className="text-xs text-blue-900">
                            https://www.gmeet.sdgf3.com
                        </Link>
                      </span>                      
                                            
                    </div>
                  </div>
                ))
              }        
            </div>
          </Gallery>  
        </div>      
    </div>
  )
}

export default BrochureComponent