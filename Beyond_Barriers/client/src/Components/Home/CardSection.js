import React from "react";

const CardSection = () => {
  const cards = [
    {
      imgSrc: "Upload_sign.png",
      alt: "Upload Icon",
      title: "Upload Your Video",
      description:
        "Start by uploading your video to our platform. Ensure the video is clear and concise for the best translation results.",
    },
    {
      imgSrc: "Processing.png",
      alt: "Processing Icon",
      title: "Processing",
      description:
        "Our system processes the video using advanced algorithms to accurately translate spoken content into sign language.",
    },
    {
      imgSrc: "translation.png",
      alt: "Receive Translation Icon",
      title: "Receive Translation",
      description:
        "Receive a sign language translation of your video, allowing for easy understanding and communication.",
    },
  ];

  return (
    <section id="card-section" className="container py-3">
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-md-4 col-sm-6 d-flex" key={index}>
            <div className="card text-center shadow-lg p-4 w-100 border-0 rounded-4 mb-4">
              <img
                src={process.env.PUBLIC_URL + "/" + card.imgSrc}
                alt={card.alt}
                className="card-img-top d-block mx-auto"
                style={{ width: "80px" }}
              />
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text text-muted">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
