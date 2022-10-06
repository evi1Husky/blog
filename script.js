// Drop down menu 

/* Assign event listener to the drop down menu button, hide
drop down menu by clicking on blog article*/

(() => {
  const menuButton = document.getElementById('menuButton');
  const menuButtonSvg = document.getElementById('menuButtonSvg');
  menuButton.addEventListener('click', function() {
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'flex';
      menuButtonSvg.style.transform = 'rotate(90deg)'
    } else {
      dropDownMenu.style.display = 'none';
      menuButtonSvg.style.transform = 'rotate(0deg)'
    }
  });
  const articleContainer = document.getElementById('articleContainer');
  articleContainer.addEventListener('click', function() {
      dropDownMenu.style.display = 'none';
      menuButtonSvg.style.transform = 'rotate(0deg)'
    });
})();

// Scroll to the top button

/* Use Intersection Observer API to make the scroll to the top button appear when
 reaching the bottom of the page */

(() => {
  const target = document.querySelector('.footer');
  const backToTheTopButton = document.querySelector('.backToTheTopButton');
  function callback(entries) {
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
