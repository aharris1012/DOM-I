const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src="img/logo.png";

let circleImg = document.getElementById("cta-img");
circleImg.src="img/header-img.png";

let midImage = document.getElementById("middle-img");
midImage.src = "img/mid-page-accent.jpg";




//nav//
let links = document.querySelectorAll("a");
 
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];


//extra nav items//

const aboutUs = document.createElement("a");
aboutUs.textContent = "About Us";

const Career = document.createElement("a");
Career.textContent = "Join Us";

const greenNav = document.querySelector("nav");
greenNav.prepend(aboutUs);
greenNav.appendChild(Career);

document.querySelectorAll("nav a").forEach( link => {
  link.style.color = "green";
})


//cta//
 const ctaText= document.querySelector("cta-text, h1");
 const ctaBtn= document.querySelector("cta-text, button");
 ctaText.textContent= siteContent["cta"]["h1"];
 ctaBtn.textContent= siteContent["cta"]["button"];


//h4//
const topContent = document.querySelectorAll("h4");
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContent[2].textContent = siteContent["main-content"]["services-h4"];
topContent[3].textContent = siteContent["main-content"]["product-h4"];
topContent[4].textContent = siteContent["main-content"]["vision-h4"];


//main//
const topContenttext = document.querySelectorAll(".text-content p");
topContenttext[0].textContent = siteContent["main-content"]["features-content"];
topContenttext[1].textContent = siteContent["main-content"]["about-content"];
topContenttext[2].textContent = siteContent["main-content"]["services-content"];
topContenttext[3].textContent = siteContent["main-content"]["product-content"];
topContenttext[4].textContent = siteContent["main-content"]["vision-content"];

//cont//
const contact = document.querySelectorAll(".contact p");
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

//footer//
const Footer = document.querySelector("footer");
Footer.textContent = siteContent["footer"]["copyright"];