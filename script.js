// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark");
// });

const checkbox = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark');
}

checkbox.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    let theme = 'light';
    if (document.body.classList.contains('dark')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});