AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Oil on Canvas",
    cardImage: "assets/pankaj/IMG_2106.jpg",
    description: "A quiz app built using basic react.",
    tagimg: "assets/pankaj/IMG_2106.jpg",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Oil on Canvas",
    cardImage: "assets/pankaj/IMG_1418.jpg",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "assets/pankaj/IMG_1418.jpg",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Oil on Canvas",
    cardImage: "assets/pankaj/IMG_1286.jpg",
    description: "Flappy bird game built using React.js",
    tagimg: "assets/pankaj/IMG_1286.jpg",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Oil on Canvas",
    cardImage: "assets/pankaj/IMG_1670.jpg",
    description: "Exercise tracker built using basic redux.",
    tagimg: "assets/pankaj/IMG_1670.jpg",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Oil on Canvas",
    cardImage: "assets/pankaj/IMG_1286.jpg",
    description: "Flappy bird game built using React.js",
    tagimg: "assets/pankaj/IMG_1286.jpg",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Oil on Canvas",
    cardImage: "assets/pankaj/IMG_1670.jpg",
    description: "Exercise tracker built using basic redux.",
    tagimg: "assets/pankaj/IMG_1670.jpg",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
