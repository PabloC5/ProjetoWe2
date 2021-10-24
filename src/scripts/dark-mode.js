
// Get the theme toggle input
const themeToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  // Get the current theme from local storage
  const currentTheme = localStorage.getItem("theme");
  
  // If the current local storage item can be found
  // let teste = function(){
  //   if (currentTheme) {
  //     // Set the body data-theme attribute to match the local storage item
  //     document.documentElement.setAttribute("data-theme", currentTheme);
    
  //     // If the current theme is dark, check the theme toggle
  //     if (currentTheme === "dark") {
  //       themeToggle.checked = true;
  //     }
  //   }
  // };
  (function(){
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    
      if (currentTheme === "dark") {
        themeToggle.checked = true;
      }
    }
  })();
  
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  
  themeToggle.addEventListener("change", switchTheme, false);
  