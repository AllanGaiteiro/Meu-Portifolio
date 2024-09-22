const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
toggleSwitch.checked = true;

toggleSwitch.addEventListener('change', function() {

  if (this.checked) {
    document.body.classList.add('white-mode');
    localStorage.setItem('theme', 'white');
  } else {
    document.body.classList.remove('white-mode');
    localStorage.setItem('theme', 'light');
  }
});