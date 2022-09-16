/* Assign event listener to the drop down menu button svg container, hide
drop down menu by clicking anywhere on the page except the button and the
the menu, to do so assign an even listener to the entire document
and use an if statement to check if an element is menu button/drop 
down menu */

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  const dropDownMenu = document.querySelector('.dropDownMenu');
  menuButton.addEventListener('click', function() {
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'block';
    } else {
      dropDownMenu.style.display = 'none';
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target !== menuButton && e.target !== dropDownMenu) {
      dropDownMenu.style.display = 'none';
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
        menuButtonSvg.style.background = '#c8cad2';
      });
      menuButton.addEventListener('touchend', function() {
        menuButtonSvg.style.background = 'transparent';
    });
    } else {
      menuButton.addEventListener('mouseover', function() {
        menuButtonSvg.style.background = '#c8cad2';
      });
      menuButton.addEventListener('mouseout', function() {
        menuButtonSvg.style.background = 'transparent';
      });
      menuButton.addEventListener('mousedown', function() {
        menuButtonSvg.style.background = '#d6d8e1';
      });
      menuButton.addEventListener('mouseup', function() {
        menuButtonSvg.style.background = '#c8cad2';
      });
    }
  })();

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
      toTheTop.style.background = '#c8cad2';
    });
    backToTheTopButton.addEventListener('touchend', function() {
      toTheTop.style.background = 'transparent';
    });
  } else {
    backToTheTopButton.addEventListener('mouseover', function() {
      toTheTop.style.background = '#c8cad2';
    });
    backToTheTopButton.addEventListener('mouseout', function() {
      toTheTop.style.background = 'transparent';
      backToTheTopButton.style.background = 'transparent';
    });
    backToTheTopButton.addEventListener('mousedown', function() {
      toTheTop.style.background = '#d6d8e1';
    });
    backToTheTopButton.addEventListener('mouseup', function() {
      toTheTop.style.background = '#c8cad2';
  });
  }
})();
