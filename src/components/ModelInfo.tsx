export const ModelInfo = () => {
  return (
    <>
      <div className="mt-4">
        <div className="d-flex justify-content-center text-center h1">
          Try our model for free!
        </div>
        <div className="d-flex justify-content-center text-center text-muted mt-3">
          Dive into the world of adventure, strategy, and fun!
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-5 gap-4">
        {[
          {
            title: "No Cost",
            description: "Enjoy the game without any charges.",
            image: "bluebox.png",
            alt: "No Cost",
          },
          {
            title: "Full Access",
            description: "Get a taste of all the features and levels.",
            image: "bluebox.png",
            alt: "Full Access",
          },
          {
            title: "Easy Sign-Up",
            description: "Just a quick registration to start playing.",
            image: "bluebox.png",
            alt: "Easy Sign-Up",
          },
          {
            title: "No Obligation",
            description: "Play as much as you want with no strings attached.",
            image: "bluebox.png",
            alt: "No Obligation",
          },
        ].map((item, index) => (
          <div className="text-center feature-card" key={index}>
            <img src={item.image} alt={item.alt} className="feature-icon" />
            <div className="h5 mt-2">{item.title}</div>
            <div className="text-muted mt-1">{item.description}</div>
          </div>
        ))}
      </div>
      <style>
        {`
          .feature-card {
            width: 200px;
          }

          .feature-icon {
            width: 80px;
            height: 80px;
          }

          @media (max-width: 768px) {
            .h1 {
              font-size: 1.5rem;
            }

            .text-muted {
              font-size: 0.9rem;
            }

            .feature-card {
              width: 150px;
            }

            .feature-icon {
              width: 60px;
              height: 60px;
            }
          }

          @media (min-width: 768px) and (max-width: 1200px) {
            .h1 {
              font-size: 2rem;
            }

            .text-muted {
              font-size: 1rem;
            }

            .feature-card {
              width: 180px;
            }

            .feature-icon {
              width: 70px;
              height: 70px;
            }
          }

          @media (min-width: 1200px) {
            .h1 {
              font-size: 2.5rem;
            }

            .text-muted {
              font-size: 1.2rem;
            }

            .feature-card {
              width: 200px;
            }

            .feature-icon {
              width: 80px;
              height: 80px;
            }
          }
        `}
      </style>
    </>
  );
};