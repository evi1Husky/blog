/* Assign event listener to the drop down menu button using immediately
invoked function, hide drop down menu by clicking anywhere on the page except
the button and the menu, to do so assign an even listener to the entire 
document and use an if statement to check if an element is menu button/drop 
down menu */

(() => {
  const menuButton = document.getElementById('headerMenu');
  menuButton.addEventListener('click', function() {
    const dropDownMenu = document.querySelector('.dropDownMenu');
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
    const menuButton = document.getElementById('headerMenu');
    const dropDownMenu = document.querySelector('.dropDownMenu');
    if (e.target !== menuButton && e.target !== dropDownMenu) {
      dropDownMenu.style.display = 'none'
    }
  });
})();
