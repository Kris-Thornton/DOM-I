const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


// images
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img'];
const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']
const middleImg = document.querySelector('.middle-img')
middleImg.src = siteContent.images['accent-img']


// footer link
const boldFooter = document.querySelector('footer a')
boldFooter.textContent = siteContent.footer.copyright
boldFooter.classList.add('bold')

// navagation
const navLinks = document.querySelectorAll('header nav a')
const navLinkTexts = Object.values(siteContent.nav)
navLinks.forEach((link, idx) => {
  link.textContent = navLinkTexts[idx]
  link.classList.add('italic')
})
// const newNav = document.querySelectorAll('nav a')



// newNav.forEach(aTag => aTag.classList.add('italic'))


// newNav[0].textContent = 'Services'
// newNav[1].textContent = 'Products'
// newNav[2].textContent = 'Vision'
// newNav[3].textContent = 'Features'
// newNav[4].textContent = 'About'
// newNav[5].textContent = 'Contact'



// console.log(newNav)

// text contents

const newHone = document.querySelector('h1')
console.log(newHone)
newHone.textContent = 'DOM Is Awesome';


const GStartedB = document.querySelector('div button')
GStartedB.textContent = 'Get Started';
console.log(GStartedB)

const h4Text = document.querySelectorAll('.text-content h4');
const h4PText = document.querySelectorAll('.text-content p');
// h4Text.forEach(h4fill => h4fill.classList.add('newClassName'))

h4Text[0].textContent = siteContent['main-content']['features-h4'];
h4PText[0].textContent = siteContent['main-content']['features-content'];

h4Text[1].textContent = siteContent['main-content']['about-h4'];
h4PText[1].textContent = siteContent['main-content']['about-content'];

h4Text[2].textContent = siteContent['main-content']['services-h4'];
h4PText[2].textContent = siteContent['main-content']['services-content'];

h4Text[3].textContent = siteContent['main-content']['product-h4'];
h4PText[3].textContent = siteContent['main-content']['product-content'];

h4Text[4].textContent = siteContent['main-content']['vision-h4'];
h4PText[4].textContent = siteContent['main-content']['vision-content'];

// Contact
const newContact = document.querySelector('.contact h4');
const newContactFill = document.querySelectorAll('.contact p')
console.log(newContactFill)

newContact.textContent = siteContent['contact']['contact-h4']
newContactFill[0].textContent = siteContent['contact']['address']
newContactFill[1].textContent = siteContent['contact']['phone']
newContactFill[2].textContent = siteContent['contact']['email']
console.log(h4Text)

