// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme){
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}
toggle.addEventListener('click',()=>{
  let current = document.documentElement.getAttribute('data-theme');
  let next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
  toggle.classList.add('rotate');
  setTimeout(()=> toggle.classList.remove('rotate'),600);
});

// Hire form handling
document.getElementById('hireForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{threshold:0.2});
reveals.forEach(r=>observer.observe(r));

// Ripple effect on buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let rect = this.getBoundingClientRect();
    this.style.setProperty('--x', (e.clientX - rect.left) + 'px');
    this.style.setProperty('--y', (e.clientY - rect.top) + 'px');
  });
});
