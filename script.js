// Drop down menu 

/* Assign event listener to the drop down menu button svg container, hide
drop down menu by clicking anywhere on the page except the button and the
the menu, to do so assign an even listener to the entire document
and use an if statement to check if an element is menu button/drop 
down menu */

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  const dropDownMenu = document.querySelector('.dropDownMenu');
  const container = document.querySelector('.menu-ArticleContainer');
  const darkModeButton = document.getElementById('darkModeButtonContainer');
  const sunLogo = document.getElementById('sunLogo');
  const moonLogo = document.getElementById('moonLogo');
  const sunButtonSvg = document.getElementById('sunButtonSvg');
  const moonButtonSvg = document.getElementById('moonButtonSvg');
  const searchBar = document.getElementById('searchInput');
  const searchForm = document.getElementById('searchBar');
  menuButton.addEventListener('click', function() {
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'flex';
      container.style.justifyContent = 'flex-end';
    } else {
      dropDownMenu.style.display = 'none';
      container.style.justifyContent = 'center';
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target !== menuButton && e.target !== dropDownMenu
      && e.target !== darkModeButton && e.target !== sunLogo
      && e.target !== moonLogo && e.target !== sunButtonSvg
      && e.target !== moonButtonSvg && e.target !== searchBar
      && e.target !== searchForm) {
      dropDownMenu.style.display = 'none';
      container.style.justifyContent = 'center';
    }
  });
})();

/* rotate menu button on click and change background on mouseover,
 check if mobile browser to assign different event listeners */

  (() => {
    const menuButtonSvg = document.getElementById('headerMenu');
    const menuButton = document.getElementById('svgContainerMenu');
    const dropDownMenu = document.querySelector('.dropDownMenu');
    document.addEventListener('click', function() {
      const style = getComputedStyle(dropDownMenu)
      const display = style.display;
      if (display === 'none') {
        menuButtonSvg.style.transform = 'rotate(0deg)'
      } else {
        menuButtonSvg.style.transform = 'rotate(90deg)'
      }
    });
    if ("ontouchstart" in document.documentElement) {
      menuButton.addEventListener('touchstart', function() {
        menuButtonSvg.style.background = 'var(--hoverColor)';
      });
      menuButton.addEventListener('touchend', function() {
        menuButtonSvg.style.background = 'transparent';
    });
    } else {
      menuButton.addEventListener('mouseover', function() {
        menuButtonSvg.style.background = 'var(--hoverColor)';
      });
      menuButton.addEventListener('mouseout', function() {
        menuButtonSvg.style.background = 'transparent';
      });
      menuButton.addEventListener('mousedown', function() {
        menuButtonSvg.style.background = 'var(--activeColor)';
      });
      menuButton.addEventListener('mouseup', function() {
        menuButtonSvg.style.background = 'var(--hoverColor)';
      });
    }
  })();

// Scroll to the top button

/* Use Intersection Observer API to make the scroll to the top button appear when
 reaching the bottom of the page */

(() => {
  const target = document.querySelector('.footer');
  const backToTheTopButton = document.querySelector('.backToTheTopButton');
  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        backToTheTopButton.style.opacity = '1'
      } else {
        backToTheTopButton.style.opacity = '0'
      }
    });
  }
  const observer = new IntersectionObserver(callback);
  observer.observe(target);
})();

/* Pass scrollTo method to addEventListener to enable scrolling to the 
 top of the page on button click */

(() => {
  const toTheTop = document.getElementById('toTheTop');
  const backToTheTopButton = document.getElementById('backToTheTopButton');
  const rootElement = document.documentElement;
  backToTheTopButton.addEventListener("click", function() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  if ("ontouchstart" in document.documentElement) {
    backToTheTopButton.addEventListener('touchstart', function() {
      toTheTop.style.background = 'var(--hoverColor)';
    });
    backToTheTopButton.addEventListener('touchend', function() {
      toTheTop.style.background = 'transparent';
    });
  } else {
    backToTheTopButton.addEventListener('mouseover', function() {
      toTheTop.style.background = 'var(--hoverColor)';
    });
    backToTheTopButton.addEventListener('mouseout', function() {
      toTheTop.style.background = 'transparent';
      backToTheTopButton.style.background = 'transparent';
    });
    backToTheTopButton.addEventListener('mousedown', function() {
      toTheTop.style.background = 'var(--activeColor)';
    });
    backToTheTopButton.addEventListener('mouseup', function() {
      toTheTop.style.background = 'var(--hoverColor)';
  });
  }
})();

// Dark/light mode toggle button

/* Toggle classes to animate buttons and change web page color scheme.
 Use local storage to save theme preference, on page open adjust button 
 animation based on preferred theme. For the first page visit set preferred
 preferred theme according to OS settings. */

if (window.localStorage.length === 0 && window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('preferredTheme', 'dark');
}

const preferredTheme = localStorage.getItem('preferredTheme');
if (preferredTheme === 'dark') {
  document.getElementById("moonLogo").classList.toggle("moonLogoDark");
  document.getElementById("sunLogo").classList.toggle("sunLogoDark");
  document.querySelector(":root").classList.toggle("dark");
}

document.getElementById("darkModeButtonContainer").addEventListener("click", () => {
  document.querySelector("body").style.transition = 'background-color 1s';
  document.getElementById("moonLogo").style.transition = 'all 1s ease-out';
  document.getElementById("sunLogo").style.transition = 'all 1s ease-out';
  const moon = document.getElementById("moonLogo");
  if (preferredTheme === 'dark') {
    document.getElementById("sunLogo").classList.toggle("sunLogoAnimateDark");
    moon.classList.toggle("moonLogoAnimateDark");
    document.querySelector(":root").classList.toggle("dark");
  } else {
  document.getElementById("sunLogo").classList.toggle("sunLogoAnimate");
  moon.classList.toggle("moonLogoAnimate");
  document.querySelector(":root").classList.toggle("dark");
  }
  const style = getComputedStyle(moon)
  const opacity = style.opacity;
  if (opacity === '0') {
    localStorage.setItem('preferredTheme', 'dark');
  } else {
    localStorage.setItem('preferredTheme', 'light');
  }
})

// All articles button

document.getElementById("allArticlesButton").addEventListener("click", () => {
  console.log('list with all articles');
})

// Info button

document.getElementById("infoButton").addEventListener("click", () => {
  console.log('some stuff about this blog');
})
