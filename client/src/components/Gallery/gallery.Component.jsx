import React from 'react'
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'


const GalleryComponent = ({galleryImages}) => {

  return (
    <div>
      <div className="mx-6 lg:mx-44">
        {/* <h1 className="text-lg md:text-xl font-light text-gray-400 pb-5">{name}</h1> */}
        <Gallery>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5"
            style={{}}
          >
            {galleryImages?.map((data) => (
              <div className="relative bg-teal-700 shadow-xl rounded-xl">
                <Item
                  original={data.images}
                  thumbnail={data.images}
                  width={2500}
                  height={2500}
                >
                  {({ ref, open }) => (
                    <div className="shadow-2xl">
                      <img
                        ref={ref}
                        onClick={open}
                        src={data.images[0]}
                        alt="loading"
                        className="w-full h-full rounded-sm object-cover transform transition duration-700 hover:scale-110 rounded-xl"
                      />
                    </div>
                  )}
                </Item>
                <div className="absolute w-full bottom-0 hover:scale-110 text-xs md:text-lg font-light text-gray-50 text-center rounded-xl bg-slate-900 opacity-50">
                  {data.imageType}
                </div>
              </div>
            ))}
          </div>
        </Gallery>
      </div>
    </div>
  );
}

export default GalleryComponent