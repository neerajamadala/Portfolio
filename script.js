/**
 * MADALA NEERAJA - PORTFOLIO INTERACTIVITY SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Project Data Dictionary (for Rich Interactive Modals)
     -------------------------------------------------------------------------- */
  const projectDetails = {
    traffic: {
      title: "Traffic Congestion Prediction and Analysis",
      category: "Machine Learning & Deep Learning",
      icon: "fa-car-side",
      summary: "An intelligent predictive framework utilizing real-world spatial-temporal traffic datasets to forecast congestion intensity levels and isolate key environmental and temporal bottleneck factors.",
      keyFeatures: [
        "Preprocessed temporal traffic sensor readings and historical density patterns.",
        "Engineered temporal features (peak hours, weather correlation, day of week indicators).",
        "Trained Deep Learning and ensemble models to classify traffic congestion severity levels (Low, Moderate, Heavy, Severe).",
        "Extracted feature importances to highlight primary causes contributing to traffic gridlock."
      ],
      techStack: ["Python", "Pandas", "Scikit-Learn", "Deep Learning", "NumPy", "Matplotlib"],
      outcomes: "Delivered accurate multi-class congestion prediction allowing potential integration with smart city traffic light scheduling systems."
    },
    fraud: {
      title: "SMS Fraud & Spam Detection System",
      category: "Natural Language Processing (NLP) & ML",
      icon: "fa-shield-virus",
      summary: "A robust natural language processing classification pipeline built to defend mobile users against fraudulent phishing and spam text messages.",
      keyFeatures: [
        "Comprehensive NLP text preprocessing: stop-word removal, lowercase normalization, regex sanitization, and Porter Stemming/Lemmatization.",
        "TF-IDF (Term Frequency-Inverse Document Frequency) vectorizer extraction for high-dimensional text feature representation.",
        "Trained and tuned supervised classifiers (Multinomial Naive Bayes, Support Vector Machines, Random Forest).",
        "Submitted and verified as part of the Microsoft Future Ready Talent virtual internship program."
      ],
      techStack: ["Python", "NLP / NLTK", "TF-IDF", "Scikit-Learn", "Microsoft Azure Cloud"],
      outcomes: "Achieved high classification accuracy with minimal false positive rates on legitimate SMS communications."
    },
    cancer: {
      title: "Cancer Detection Using Machine Learning",
      category: "Healthcare Informatics & Classification",
      icon: "fa-dna",
      summary: "A clinical decision support classification system applying supervised learning algorithms onto medical datasets to distinguish between benign and malignant patient cases.",
      keyFeatures: [
        "Cleaned medical records with missing value imputations and standard scalar normalization.",
        "Conducted extensive correlation matrices and Recursive Feature Elimination (RFE) to identify crucial biomarker predictors.",
        "Trained and evaluated Logistic Regression, Decision Trees, and ensemble classifiers.",
        "Benchmarked strictly against critical clinical evaluation metrics: Precision, Recall, Specificity, and F1-Score to minimize False Negatives."
      ],
      techStack: ["Python", "Machine Learning", "Scikit-Learn", "Medical Datasets", "Seaborn / Matplotlib"],
      outcomes: "Demonstrated reliable diagnostic support metrics with optimized recall for critical pathology detection."
    },
    mobile: {
      title: "Mobile Phone Price Prediction",
      category: "Predictive Analytics & Regression",
      icon: "fa-mobile-screen",
      summary: "A multi-variable regression modeling framework designed to estimate smartphone market valuation based on hardware specifications, camera sensors, and battery ratings.",
      keyFeatures: [
        "Data preprocessing across dozens of phone features (RAM, internal storage, battery mAh, processor clock speed, screen resolution, 4G/5G support).",
        "Exploratory Data Analysis (EDA) and heatmaps to discover price sensitivity drivers.",
        "Evaluated Linear Regression, Ridge/Lasso, Decision Tree Regressor, and Gradient Boosting.",
        "Optimized Root Mean Squared Error (RMSE) and R² coefficient metrics."
      ],
      techStack: ["Python", "Regression Analysis", "Pandas", "NumPy", "Scikit-Learn"],
      outcomes: "Provided transparent and accurate retail price estimations for consumer electronic devices."
    },
    food: {
      title: "Food Delivery Frontend Web Application",
      category: "Frontend Web Development & UX",
      icon: "fa-utensils",
      summary: "A sleek, responsive, and user-centric web interface for an online food ordering platform, crafted with semantic HTML5, modern CSS3 animations, and interactive JavaScript.",
      keyFeatures: [
        "Interactive food catalog with dynamic dish filtering by category (Appetizers, Mains, Desserts, Beverages).",
        "Real-time interactive shopping cart with instant subtotal calculation, item quantity counters, and tax breakdown.",
        "Fully responsive fluid grid ensuring seamless experience on mobile smartphones, tablets, and wide desktop screens.",
        "Clean checkout workflow with form validation and modal order confirmations."
      ],
      techStack: ["HTML5", "CSS3 / Flexbox / Grid", "JavaScript (ES6+)", "Responsive UI Design"],
      outcomes: "Created a lightning-fast, zero-dependency modern frontend experience with smooth micro-interactions."
    }
  };

  /* --------------------------------------------------------------------------
     2. Typing Effect in Hero Header
     -------------------------------------------------------------------------- */
  const typingElement = document.getElementById('typing-text');
  const roles = [
    "Computer Science Engineer",
    "Machine Learning Enthusiast",
    "TCS CodeVita Rank 749 Achiever",
    "Software & Web Developer",
    "Cloud & AI Enthusiast"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = 1800; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400; // Pause before typing new word
    }

    setTimeout(typeEffect, typingDelay);
  }

  if (typingElement) {
    typeEffect();
  }

  /* --------------------------------------------------------------------------
     3. Theme Toggle (Dark / Light Mode)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.theme-icon') : null;
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`, "fa-circle-half-stroke");
    });
  }

  /* --------------------------------------------------------------------------
     4. Mobile Navigation Menu Toggle
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      mobileMenuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu when clicking nav links
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Scroll Spy & Navbar Blur on Scroll
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar background enhancement
    if (navbar) {
      if (scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active Section Detection
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  /* --------------------------------------------------------------------------
     6. Stats Animated Counter (Intersection Observer)
     -------------------------------------------------------------------------- */
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1600; // ms
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.ceil(current);
            }
          }, stepTime);
        });
        countersAnimated = true;
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) {
    countObserver.observe(statsStrip);
  }

  /* --------------------------------------------------------------------------
     7. Project Filtering Logic
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     8. Project Modal Functionality
     -------------------------------------------------------------------------- */
  const modal = document.getElementById('project-modal');
  const modalTarget = document.getElementById('modal-content-target');
  const modalCloseBtn = document.getElementById('modal-close');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    modalTarget.innerHTML = `
      <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.2rem;">
        <div style="width:48px; height:48px; border-radius:12px; background:var(--primary-light); color:var(--primary); display:flex; align-items:center; justify-content:center; font-size:1.4rem;">
          <i class="fa-solid ${data.icon}"></i>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--secondary); font-weight:600; text-transform:uppercase;">${data.category}</span>
          <h2 style="font-size:1.4rem; color:var(--text-primary);">${data.title}</h2>
        </div>
      </div>

      <p style="color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.7;">
        ${data.summary}
      </p>

      <h4 style="font-size:1.05rem; margin-bottom:0.8rem; color:var(--text-primary);">
        <i class="fa-solid fa-layer-group" style="color:var(--primary); margin-right:0.4rem;"></i>
        Key Architecture & Methodology
      </h4>
      <ul style="margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.6rem;">
        ${data.keyFeatures.map(f => `
          <li style="color:var(--text-secondary); font-size:0.9rem; position:relative; padding-left:1.4rem;">
            <i class="fa-solid fa-angle-right" style="position:absolute; left:0; top:3px; color:var(--primary);"></i>
            ${f}
          </li>
        `).join('')}
      </ul>

      <h4 style="font-size:1.05rem; margin-bottom:0.8rem; color:var(--text-primary);">
        <i class="fa-solid fa-chart-line" style="color:var(--gold); margin-right:0.4rem;"></i>
        Key Project Outcomes
      </h4>
      <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.6; margin-bottom:1.5rem;">
        ${data.outcomes}
      </p>

      <h4 style="font-size:0.95rem; margin-bottom:0.6rem; color:var(--text-primary);">Technologies Employed</h4>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.8rem;">
        ${data.techStack.map(tech => `
          <span style="background:var(--bg-alt); color:var(--text-secondary); border:1px solid var(--border-color); padding:0.3rem 0.8rem; border-radius:6px; font-size:0.8rem;">
            ${tech}
          </span>
        `).join('')}
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.8rem;">
        <button class="btn btn-secondary btn-sm" id="close-modal-inside">Close Preview</button>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const insideCloseBtn = document.getElementById('close-modal-inside');
    if (insideCloseBtn) {
      insideCloseBtn.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  /* --------------------------------------------------------------------------
     9. 1-Click Copy with Toast Notification
     -------------------------------------------------------------------------- */
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  function showToast(message, icon = "fa-check") {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast glass-panel';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        });
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  /* --------------------------------------------------------------------------
     10. Contact Form Handler (Simulated Message & Mailto Fallback)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Portfolio Collaboration Inquiry';
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all required fields.';
        formFeedback.classList.remove('hidden');
        return;
      }

      // Success feedback
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `Thank you, <strong>${name}</strong>! Opening your email client to complete message delivery...`;
      formFeedback.classList.remove('hidden');

      showToast("Preparing direct email draft...", "fa-envelope-circle-check");

      // Trigger mailto link after a brief pause
      setTimeout(() => {
        const mailtoUrl = `mailto:madala.neeraja3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Neeraja,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
        window.location.href = mailtoUrl;
      }, 900);

      contactForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     11. Back to Top Button
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
