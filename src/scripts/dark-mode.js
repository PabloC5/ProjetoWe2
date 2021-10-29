
// Get the theme toggle input
const themeToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  const logoFinal = document.querySelector('.logoTeste')
  
  // Get the current theme from local storage
  const currentTheme = localStorage.getItem("theme");
  
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
      localStorage.setItem(logoFinal.src = "./img/logo-branco.png", "theme")
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      localStorage.setItem(logoFinal.src = "./img/logo-final.png", "theme")
    }
  }
  
  themeToggle.addEventListener("change", switchTheme, false);
  