/* Assign event listener to the drop down menu button using immediately
invoked function, hide drop down menu by clicking anywhere on the page except
the button and the menu, to do so assign an even listener to the entire 
document and use an if statement to check if an element is menu button/drop 
down menu */

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  menuButton.addEventListener('click', function() {
    const dropDownMenu = document.querySelector('.dropDownMenu');
    const menuButton = document.getElementById('headerMenu');
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'block'
    } else {
      dropDownMenu.style.display = 'none'
    }
  });
})();

(() => {
  document.addEventListener('click', function(e) {
    const menuButton = document.getElementById('svgContainerMenu');
    const dropDownMenu = document.querySelector('.dropDownMenu');
    if (e.target !== menuButton && e.target !== dropDownMenu) {
      dropDownMenu.style.display = 'none'
    }
  });
})();

/* rotate menu button on click */

(() => {
  document.addEventListener('click', function() {
    const dropDownMenu = document.querySelector('.dropDownMenu');
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    const menuButton = document.getElementById('headerMenu');
    if (display === 'none') {
      menuButton.style.transform = 'rotate(0deg)'
    } else {
      menuButton.style.transform = 'rotate(90deg)'
    }
  });
})();

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  menuButton.addEventListener('mouseover', function() {
    const menuButtonSvg = document.getElementById('headerMenu');
      menuButtonSvg.style.background = '#c8cad2'
  });
})();

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  menuButton.addEventListener('mouseout', function() {
    const menuButtonSvg = document.getElementById('headerMenu');
      menuButtonSvg.style.background = '#e5eaf1'
  });
})();

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  menuButton.addEventListener('mousedown', function() {
    const menuButtonSvg = document.getElementById('headerMenu');
      menuButtonSvg.style.background = '#d6d8e1'
  });
})();

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  menuButton.addEventListener('mouseup', function() {
    const menuButtonSvg = document.getElementById('headerMenu');
      menuButtonSvg.style.background = '#c8cad2'
  });
})();