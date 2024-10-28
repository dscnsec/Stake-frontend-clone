import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselCustom = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const logos = [
    { src: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D", alt: "UFC Logo" },
    { src: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D", alt: "UFC Logo" },
    { src: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D", alt: "UFC Logo" },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#001e36" }}>
      <Carousel 
        responsive={responsive} 
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 0.5s ease"
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {logos.map((logo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: "150px", height: "auto", maxWidth: "100%" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
