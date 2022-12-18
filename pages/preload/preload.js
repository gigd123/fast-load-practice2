import { useState } from "react"

const Preload = () => {
  const [showPreloadImg, setShowPreloadImg] = useState(false)
  const [showImg, setShowImg] = useState(false)
  const onShowPreloadImg = () => {
    setShowPreloadImg(true)
  }
  const onShowImg = () => {
    setShowImg(true)
  }
  return (
    <div>
      <link rel="preload" href='/images/image-with-preload-1.jpeg' as='image' />
      <link rel="preload" as="font" crossorigin="anonymous" type="font/woff2" href="myfont.woff2" />
      <div>Preload Demo</div>
      <div className='container'>
      <div className="card">
        {showPreloadImg && <img className="preload-image img" src='/images/image-with-preload-1.jpeg' alt='preload-image' />}
          <div className="content">
          <h4>Image with preload</h4>
          <p>Image with preload will insert the image already preloaded.</p>
        <button onClick={onShowPreloadImg}>Load Preload Image</button>
        </div>
      </div>
      <div className="card">
        {showImg && <img className="image img" src='/images/image-with-preload-2.jpeg' alt='image' />}
        <div className="content">
        <h4>Image with preload</h4>
        <p>Image without preload will load the image while inserting the image</p>
        <button onClick={onShowImg}>Load Image</button>
        </div>
      </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }
        .card {
          width: 400px;
          border: 1px solid black;
          border-radius: 8px;
          margin: 40px;
        }
        .img {
          width: 100%;
        }
        .content {
          padding: 20px
        }
      `}</style>
    </div>
  )
}

export default Preload