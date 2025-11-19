document.addEventListener('DOMContentLoaded',function(){
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click',()=> links.classList.toggle('show'));

  // Gallery lightbox
  const gallery = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  if(gallery && lightbox){
    gallery.addEventListener('click', e=>{
      const img = e.target.closest('img');
      if(!img) return;
      lightbox.innerHTML = '';
      const large = document.createElement('img');
      large.src = img.src.replace('w=1000','w=1600');
      lightbox.appendChild(large);
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden','false');
    });
    lightbox.addEventListener('click',()=>{
      lightbox.classList.remove('show');
      lightbox.setAttribute('aria-hidden','true');
    });
  }

  // Reviews slider
  const slides = Array.from(document.querySelectorAll('.reviews .review'));
  let idx = 0;
  function showSlide(i){
    slides.forEach((s,si)=> s.classList.toggle('active', si===i));
  }
  if(slides.length){
    showSlide(0);
    setInterval(()=>{ idx = (idx+1)%slides.length; showSlide(idx); }, 4500);
  }

  // Reservation form handling (simulated)
  const form = document.getElementById('reservation-form');
  const result = document.getElementById('reserve-result');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      result.textContent = '';
      const data = new FormData(form);
      // Basic validation
      if(!data.get('name')||!data.get('email')||!data.get('date')){
        result.textContent = 'Please complete required fields.';
        return;
      }
      // Simulate async request
      result.textContent = 'Sending reservation request…';
      setTimeout(()=>{
        result.textContent = 'Thanks! Your reservation request has been received. We will confirm by email.';
        form.reset();
      },1200);
    });
  }
});
