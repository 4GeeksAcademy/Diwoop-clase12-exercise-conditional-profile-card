import "../style/index.css";

/* let variables = {
  includeCover: true, // if includeCover is true the algorithm should show the cover image
  background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
  avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
  socialMediaPosition: "right", // social media bar position (left or right)

  twitter: null, // social media usernames
  github: null,
  linkedin: null,
  instagram: null,

  name: null,
  lastName: null,
  role: null,
  country: null,
  city: null
}; */

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let name = variables.name ? variables.name : "Name";
  let lastName = variables.lastName ? variables.lastName : "Last Name";
  let role = variables.role ? variables.role : "Rol";
  let city = variables.city ? variables.city : "City";
  let country = variables.country ? variables.country : "Country";
  let twitter = variables.twitter
    ? variables.twitter
    : "https://twitter.com/4geeksacademy";
  let github = variables.github
    ? variables.github
    : "https://github.com/4geeksacademy";
  let linkedin = variables.linkedin
    ? variables.linkedin
    : "https://linkedin.com/school/4geeksacademy";
  let instagram = variables.instagram
    ? variables.instagram
    : "https://instagram.com/4geeksacademy";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href="${twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background:
      "https://img.freepik.com/vector-gratis/fondo-plano-dia-internacional-gato-gatos_23-2149478157.jpg?t=st=1726827434~exp=1726831034~hmac=930fb163494d4d29b72c94400e5e73eeb9bf28632e09ccd0dfb3c71c5b283288&w=826",
    avatarURL:
      "https://img.freepik.com/foto-gratis/primer-plano-adorable-gatito-sofa_23-2150782439.jpg?t=st=1726827611~exp=1726831211~hmac=b02039fbc60867f96e0dea5311b65f48a3020445a6a7376dfbc05039e0e35945&w=360",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
