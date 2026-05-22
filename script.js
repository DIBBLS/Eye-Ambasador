/* ─────────────────────────────────────────
   Eye Ambassadors Clinic — script.js
   ───────────────────────────────────────── */

/* ─── NAVBAR SCROLL ─── */
window.addEventListener('scroll', function () {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

/* ─── LIGHTBOX ─── */
var lbImgs = [
  'images/gallery-1.jpg',
  'images/gallery-2.jpg',
  'images/gallery-3.jpg',
  'images/gallery-4.jpg',
  'images/gallery-5.jpg',
  'images/gallery-6.jpg'
];
var lbIdx = 0;

function openLB(i) {
  lbIdx = i;
  document.getElementById('lb-img').src = lbImgs[i];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLBBg(e) {
  if (e.target === document.getElementById('lightbox')) closeLB();
}

function shiftLB(d) {
  lbIdx = (lbIdx + d + lbImgs.length) % lbImgs.length;
  document.getElementById('lb-img').src = lbImgs[lbIdx];
}

document.addEventListener('keydown', function (e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLB();
  if (e.key === 'ArrowLeft') shiftLB(-1);
  if (e.key === 'ArrowRight') shiftLB(1);
});

/* ─── FADE-UP OBSERVER ─── */
var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(function (el) {
  obs.observe(el);
});

/* ─── BOOKING FORM ─── */
async function handleSubmit(e) {
  e.preventDefault();

  var btn        = document.getElementById('submitBtn');
  var form       = document.getElementById('bookingForm');
  var successMsg = document.getElementById('successMsg');
  var fname      = document.getElementById('fname').value.trim();
  var lname      = document.getElementById('lname').value.trim();
  var phone      = document.getElementById('phone').value.trim();
  var ageGroup   = document.getElementById('age-group').value;
  var service    = document.getElementById('service').value;
  var date       = document.getElementById('preferred-date').value;
  var notes      = document.getElementById('notes').value.trim();

  btn.textContent = 'Sending…';
  btn.disabled = true;

  /* ── Optional: Formspree integration ──
     Replace 'YOUR_FORMSPREE_ID' with your actual Formspree endpoint ID.
     Sign up free at https://formspree.io  */
  var FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
  if (FORMSPREE_ID !== 'YOUR_FORMSPREE_ID') {
    try {
      await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          first_name:     fname,
          last_name:      lname,
          phone:          phone,
          age_group:      ageGroup,
          service:        service,
          preferred_date: date,
          notes:          notes
        })
      });
    } catch (err) {
      console.log('Formspree error:', err);
    }
  }

  /* ── WhatsApp fallback (always runs) ── */
  var msg = 'Hello Dr. Aina, I would like to book an appointment at Eye Ambassadors.%0A%0A';
  msg += 'Name: '           + encodeURIComponent(fname + ' ' + lname) + '%0A';
  msg += 'Phone: '          + encodeURIComponent(phone)               + '%0A';
  msg += 'Age Group: '      + encodeURIComponent(ageGroup)            + '%0A';
  msg += 'Service: '        + encodeURIComponent(service)             + '%0A';
  msg += 'Preferred Date: ' + encodeURIComponent(date)                + '%0A';
  if (notes) msg += 'Notes: ' + encodeURIComponent(notes);

  window.open('https://wa.me/2348133374478?text=' + msg, '_blank');

  form.style.display       = 'none';
  successMsg.style.display = 'block';
}
