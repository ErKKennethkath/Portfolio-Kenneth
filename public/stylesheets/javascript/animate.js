const listItems = document.querySelectorAll(".list li");
const skillButton = document.querySelector("#skill-button");
const skillContent = document.querySelector("#skill-content");
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
const educationButton = document.querySelector("#education-button");
const educationContent = document.querySelector("#education-content");

window.addEventListener("load", function () {
  educationContent.style.display = "none";
  skillContent.style.display = "none";
});

listItems.forEach(listItem => {
  const text = listItem.textContent;
  listItem.innerHTML = "";

  let wordStart = 0;
  let wordEnd = text.indexOf(" ");

  while (wordEnd !== -1) {
    let word = text.slice(wordStart, wordEnd);
    for (let i = 0; i < word.length; i++) {
      const letter = document.createElement("span");
      letter.classList.add("letter");
      letter.textContent = word[i];
      letter.style.animationDelay = `${(wordStart + i) * 0.1}s`;
      listItem.appendChild(letter);
    }
    listItem.appendChild(document.createTextNode(" "));
    wordStart = wordEnd + 1;
    wordEnd = text.indexOf(" ", wordStart);
  }
  let word = text.slice(wordStart);
  for (let i = 0; i < word.length; i++) {
    const letter = document.createElement("span");
    letter.classList.add("letter");
    letter.textContent = word[i];
    letter.style.animationDelay = `${(wordStart + i) * 0.1}s`;
    listItem.appendChild(letter);
  }
});

  let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

  const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
  };

  navbarToggle.addEventListener("click", toggleNavbarVisibility);
  navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
  navbarMenu.addEventListener("click", toggleNavbarVisibility);

  let isEducationExpanded = false;

  educationButton.addEventListener("click", function () {
    isEducationExpanded = !isEducationExpanded;
    educationContent.style.display = isEducationExpanded ? "block" : "none";
    skillContent.style.display = "none";
   
  isskillExpanded = false;
  });
 
  let isskillExpanded = false;

  skillButton.addEventListener("click", function () {
    isskillExpanded = !isskillExpanded;
   skillContent.style.display = isskillExpanded ? "block" : "none";
   educationContent.style.display = "none";
   if (isEducationExpanded) {
    educationContent.style.display = "none";
    isEducationExpanded = false;
  }
  });

  //the following hides text of Tab A when Tab B is clicked
  $("#skill-button").on("click", function(){
    $("#education-content").hide();
    $("#skill-content").toggle();
  });
//arrrow changes on expanding navbar menu
document.getElementById("education-button").addEventListener("click", function() {
  var list = this.nextElementSibling;
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

document.getElementById("skill-button").addEventListener("click", function() {
  var list = this.nextElementSibling;
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});





  
  