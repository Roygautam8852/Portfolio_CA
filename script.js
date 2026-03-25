particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: { enable: true, speed: 1 }
  }
});













// ================= HAMBURGER MENU =================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
});

// ================= ACTIVE NAVBAR LINK =================
// Active Navbar Link on Scroll
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach(link => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.parentElement.classList.add("active");
    }
  });
});





// ================= EMAILJS =================
// ================= EMAILJS =================
(function () {
  emailjs.init("35xaiD2mPLXP7qXST"); // ✅ YOUR PUBLIC KEY
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_1wvh49k",     // ✅ Service ID
    "template_jsfgx9l",    // ✅ Template ID
    this
  ).then(
    () => {
      alert("Message sent successfully 🚀");
      contactForm.reset();
    },
    (error) => {
      alert("Failed to send message ❌");
      console.log(error);
    }
  );
});

// ================= CV DOWNLOAD =================
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/General_CV.pdf';
  link.download = 'Gautam_Kumar_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ================= CERTIFICATE MODAL =================
function openCertificateModal(title, filePath) {
  const modal = document.getElementById('certificateModal');
  const modalTitle = document.getElementById('certModalTitle');
  const modalBody = document.getElementById('certModalBody');
  
  modalTitle.textContent = title;
  
  // Check if file exists and determine how to display it
  const fileExtension = filePath.split('.').pop().toLowerCase();
  
  if (fileExtension === 'pdf') {
    // Display PDF using iframe
    modalBody.innerHTML = `
      <iframe src="${filePath}" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>
      <p style="margin-top: 15px;">
        <a href="${filePath}" target="_blank" style="color: #06B6D4; text-decoration: none; font-weight: 600;">
          <i class="fas fa-download"></i> Download Certificate
        </a>
      </p>
    `;
  } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
    // Display image
    modalBody.innerHTML = `<img src="${filePath}" alt="${title}" style="width: 100%; max-height: 600px; object-fit: contain;">`;
  } else {
    // File not found or unknown format
    modalBody.innerHTML = `
      <p style="color: #9ca3af; padding: 40px;">
        <i class="fas fa-file-upload"></i><br><br>
        Certificate file not yet uploaded.<br>
        Please add your certificate to: <strong>${filePath}</strong>
      </p>
    `;
  }
  
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('certificateModal');
  if (event.target === modal) {
    closeCertificateModal();
  }
  
  const cvModal = document.getElementById('cvModal');
  if (event.target === cvModal) {
    closeCVModal();
  }
}

// ================= CV MODAL =================
function openCVModal() {
  const modal = document.getElementById('cvModal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCVModal() {
  const modal = document.getElementById('cvModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// ================= SCROLL REVEAL ANIMATION =================
// Production-level smooth scroll reveal with staggered animations
document.addEventListener('DOMContentLoaded', function() {
  const revealSections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add show class with requestAnimationFrame for smooth performance
        requestAnimationFrame(() => {
          entry.target.classList.add('show');
        });
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, observerOptions);

  // Observe all sections
  revealSections.forEach(section => {
    sectionObserver.observe(section);
  });
});
// ============================================================
