import { Carousel } from 'react-bootstrap';

function ImgCarousel({ images }) {
  if (!images || images.length == 0) {
    return null;
  }
  console.log(images);
  return (
    <>
    <div className='container mt-3' style={{ width: '100%' }}>
      <h4 className='text-decoration-underline'>Item Images:</h4>
    <Carousel style={{ maxWidth: '100%' }}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={image}
            alt=""
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    </>
  );
}

export default ImgCarousel;