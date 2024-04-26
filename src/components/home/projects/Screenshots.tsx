import React, { useEffect, useState } from 'react'

type ScreenshotsProps = {
  images: Array<string>,
  screenshotsAvailable: boolean,
}

const Screenshots = ({ images, screenshotsAvailable }: ScreenshotsProps) => {
  const [active, setActive] = useState(0);
  const image = images[active];
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setActive(p => {
        if (p == images.length - 1) return 0;
        else return p + 1;
      })
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <div className='relative lg:w-1/2 bg-gray-300 from-gray-300'>
      <div style={{ backgroundImage: `url(${image})` }} className=" h-96 w-auto z-10 bg-contain bg-center bg-no-repeat rounded-lg m-auto " />
      {!screenshotsAvailable && <div className=" absolute z-20 text-white text-4xl flex items-center text-center justify-center inset-0 leading-relaxed">
        Screenshots <br />Coming<br /> Soon
      </div>}
      {images.length > 1 && <div className="w-max mx-auto my-3 flex gap-2 absolute bottom-0 left-0 right-0">
        {images.map((image, id) => (
          <div key={image} style={{ backgroundColor: id == active ? 'rgb(59 130 246)' : 'white' }} className="h-3 w-3 rounded-full border border-solid border-gray-300" onClick={() => setActive(id)}>
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default Screenshots