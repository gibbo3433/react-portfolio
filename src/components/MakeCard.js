import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MakeCard() {
  const Repos = [
    {
      title: "Tech-Blog Platform",
      picture:
        "https://tradebrains.in/wp-content/uploads/2021/09/8-Best-Indian-Stock-Market-Blogs-cover-image.jpg",
      github: "https://github.com/gibbo3433/Tech-Blog-Platform",
      deployed: "https://github.com/gibbo3433/Tech-Blog-Platform",
      text: "A full stack blog using handlebars with SQL to provide users with a blog to write their own posts.",
    },

    {
      title: "Employee Tracker",
      picture:
        "https://st4.depositphotos.com/1001599/39398/v/600/depositphotos_393980448-stock-illustration-time-and-attendance-tracking-system.jpg",
      github: "https://github.com/gibbo3433/employee-tracker",
      deployed: "https://github.com/gibbo3433/employee-tracker",
      text: "A back end application to add, update and delete employees within a business.",
    },

    {
      title: "Note Taker",
      picture:
        "https://us.123rf.com/450wm/thesodium28/thesodium282202/thesodium28220200414/182509833-cropped-image-of-woman-hand-taking-notes-at-the-wooden-table-surrounded-by-a-computer-monitor-wirele.jpg?ver=6",
      github: "https://github.com/gibbo3433/express.js---note-taker",
      deployed: "https://note-taking-application2.herokuapp.com/",
      text: "An application that records and stores notes for future reference.",
    },

    {
      title: "What's for dinner?",
      picture:
        "https://reviewed-com-res.cloudinary.com/image/fetch/s--TFkJ6AH1--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_972,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1620222407571/aapiownedfoodbiz.png",
      github: "https://github.com/gibbo3433/What-s-For-Dinner-",
      deployed: "https://gibbo3433.github.io/What-s-For-Dinner-/",
      text: "This can find numerous recipies depending on what items of food you have in your house.",
    },

    {
      title: "Weather Dashboard",
      picture:
        "https://img.freepik.com/premium-vector/abstract-technology-ui-futuristic-concept-hud-world-interface-hologram_36402-132.jpg",
      github: "https://github.com/gibbo3433/weather-dashboard",
      deployed: "https://gibbo3433.github.io/weather-dashboard/",
      text: "An application that shows the weekly weather forecast on a city of your choosing.",
    },

    {
      title: "Password Generator",
      picture:
        "https://vpnpick.com/wp-content/uploads/2020/09/password-generator.jpg",
      github: "https://github.com/gibbo3433/Week-3-password-generator",
      deployed: "https://gibbo3433.github.io/Week-3-password-generator/",
      text: "This application creates a unique password according to what characters have been selected.",
    },
  ];

  function CreateCard(card, index) {
    return (
      <Card
        key={index}
        style={{ width: "90%", maxWidth: "30rem", margin: ".5rem" }}
      >
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Img
            variant="top"
            src={card.picture}
            style={{ height: "150px", objectFit: "cover" }}
          />
          <Card.Text>{card.text}</Card.Text>
          <Button style={{marginRight: 10}} href={card.github} variant="primary">
            Github Page
          </Button>
          <Button href={card.deployed} variant="primary">
            Deployed Page
          </Button>
        </Card.Body>
      </Card>
    );
  }
  return (
    <div
      className="grid"
      style={{
        margin: ".5rem auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      {Repos.map(CreateCard)}
    </div>
  );
}
