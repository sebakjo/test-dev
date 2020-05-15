import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

export default ({ car }) => {
  console.log(car["model_features"])
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {car["model_features"] &&
        car["model_features"].map((feature,i) => (
          <div className="carouselItem" key={i}>
            <img
              src={"http://challenge.agenciaego.tech" + feature.photo}
              class="Image"
alt="img"
            />
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
            
          </div>
        ))}
    </InfiniteCarousel>
  );
};
