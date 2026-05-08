document.addEventListener('DOMContentLoaded', () => {
    // 1. Team Data Injection
    const teamMembers = [
        { name: "Aryo Bayu Kembara", role: "CEO", desc: "Strategic leadership & vision", img: "Aryo%20Bayu%20Kembara.jpeg", email: "aryo.kembara@student.president.ac.id", fullDesc: "just a guy trying to parry life’s challenges like it’s a soulslike game." },
        { name: "Najwa Aufi Maulaya Havidz", role: "Director", desc: "Operational control & execution", img: "Najwa%20Aufi%20Maulaya%20Havidz.jpeg", email: "najwa.havidz@student.president.ac.id", fullDesc: "Constantly evolving, embracing challenges, and turning every experience into a stepping stone toward something greater." },
        { name: "Nathania Calista Al Bani", role: "Marketing Manager", desc: "Market strategy & outreach", img: "Nathania%20Calista%20Al%20Bani.jpeg", email: "nathania.bani@student.president.ac.id", fullDesc: "Being part of marketing isn’t easy, but it will always feel easier when we’re together." },
        { name: "Jhavendrew Stancio Albion", role: "Designing Manager", desc: "UX/UI & hardware aesthetics", img: "Jhavendrew%20.jpeg", email: "[Email pending]", fullDesc: "[Full description pending]" },
        { name: "Evandra Axelino Rizkianna Lesar", role: "Mechanical Staff", desc: "Hardware structural design", img: "Evandra%20Axellino.jpeg", email: "evandra.lesar@student.president.ac.id", fullDesc: "Committed to delivering excellence and embracing new challenges." },
        { name: "Muhammad Nabil Mahmudin", role: "Mechanical Staff", desc: "Hardware testing & assembly", img: "Muhammad%20Nabil.jpeg", email: "[Email pending]", fullDesc: "[Full description pending]" },
        { name: "Rafael Salomon Montalalu", role: "Electrical Staff", desc: "Circuit & power management", img: "Rafael%20Salomon%20Montolalu%20.jpeg", email: "[Email pending]", fullDesc: "[Full description pending]" },
        { name: "Mochammad Ilham Hakyky", role: "Electrical Staff", desc: "Sensor integration", img: "Mochammad%20Ilham%20Hakyky.jpeg", email: "mochammad.hakyky@student.president.ac.id", fullDesc: "working on myself, one day at a time. dreaming growth up." },
        { name: "Yang HengXu", role: "Electrical Staff", desc: "IoT connectivity systems", img: "Yang%20Hengxu.jpeg", email: "[Email pending]", fullDesc: "[Full description pending]" }
    ];

    const teamGrid = document.getElementById('team-grid');
    
    if (teamGrid) {
        teamMembers.forEach((member, index) => {
            const delayClass = `delay-${(index % 5) + 1}`;
            const cardHTML = `
                <div class="glass-card-dark fade-in-up ${delayClass}" data-index="${index}" style="padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s ease;">
                    <div class="member-photo" style="margin-bottom: 20px;">
                        <img src="${member.img}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/100/101C3A/2EE6B8?text=?'" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-turq); box-shadow: 0 0 15px rgba(46, 230, 184, 0.2);">
                    </div>
                    <div class="member-info">
                        <h3 class="member-name" style="font-family: 'Poppins', sans-serif; font-size: 1.2rem; color: var(--text-white); margin-bottom: 5px;">${member.name}</h3>
                        <div class="member-role" style="font-weight: 600; color: var(--accent-turq); font-size: 0.9rem; margin-bottom: 10px;">${member.role}</div>
                        <p class="member-desc" style="color: var(--text-gray); font-size: 0.9rem; line-height: 1.5;">${member.desc}</p>
                    </div>
                </div>
            `;
            teamGrid.innerHTML += cardHTML;
        });

        // Modal Logic
        const profileModal = document.getElementById('profile-modal');
        const closeModal = document.querySelector('.close-modal');
        const modalImg = document.getElementById('modal-img');
        const modalName = document.getElementById('modal-name');
        const modalRole = document.getElementById('modal-role');
        const modalEmail = document.getElementById('modal-email');
        const modalDesc = document.getElementById('modal-desc');

        if (profileModal) {
            document.querySelectorAll('.glass-card-dark[data-index]').forEach(card => {
                card.addEventListener('click', function() {
                    const idx = this.getAttribute('data-index');
                    const member = teamMembers[idx];
                    
                    modalImg.src = member.img;
                    modalImg.onerror = function() { this.src = 'https://via.placeholder.com/150/F8FAFC/0052FF?text=?'; };
                    modalName.textContent = member.name;
                    modalRole.textContent = member.role;
                    modalEmail.textContent = member.email;
                    modalDesc.textContent = member.fullDesc;
                    
                    profileModal.classList.add('active');
                });
            });

            closeModal.addEventListener('click', () => {
                profileModal.classList.remove('active');
            });

            profileModal.addEventListener('click', (e) => {
                if (e.target === profileModal) {
                    profileModal.classList.remove('active');
                }
            });
        }
    }

    // 2. Scroll Animations (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in, .fade-in-up');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.backgroundColor = navLinks.classList.contains('active') ? '#ff1744' : '#2EE6B8';
            });
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.backgroundColor = '#2EE6B8';
                });
            });
        });
    }

    // 5. Contact Form Handling (Command Center)
    const contactForm = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-msg');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // UI Feedback
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="btn-text">TRANSMITTING...</span> <span class="pulse-dot green" style="background:#2EE6B8;box-shadow:0 0 10px #2EE6B8;"></span>';
            btn.style.borderColor = '#2EE6B8';
            btn.style.color = '#2EE6B8';
            btn.classList.remove('btn-pulse');
            
            // Real network request via FormSubmit AJAX
            const formData = new FormData(contactForm);
            
            fetch("https://formsubmit.co/ajax/mechfy.clix@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                btn.innerHTML = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
                btn.classList.add('btn-pulse');
                
                if(data.success) {
                    formMsg.textContent = "SIGNAL TRANSMITTED SECURELY.";
                    formMsg.style.color = "#2EE6B8";
                    formMsg.style.textShadow = "0 0 5px #2EE6B8";
                    contactForm.reset();
                } else {
                    formMsg.textContent = "TRANSMISSION FAILED. RETRY.";
                    formMsg.style.color = "#ff1744";
                    formMsg.style.textShadow = "0 0 5px #ff1744";
                }
                
                setTimeout(() => {
                    formMsg.textContent = "";
                }, 5000);
            })
            .catch(error => {
                btn.innerHTML = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
                btn.classList.add('btn-pulse');
                
                formMsg.textContent = "SYSTEM ERROR. NO CONNECTION.";
                formMsg.style.color = "#ff1744";
                formMsg.style.textShadow = "0 0 5px #ff1744";
                
                setTimeout(() => {
                    formMsg.textContent = "";
                }, 5000);
            });
        });
    }

    // 6. Sales Form Handling
    const salesForm = document.getElementById('sales-form');
    const salesMsg = document.getElementById('sales-form-msg');

    if(salesForm) {
        salesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // UI Feedback
            const btn = salesForm.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="btn-text">TRANSMITTING...</span> <span class="pulse-dot green" style="background:#2EE6B8;box-shadow:0 0 10px #2EE6B8;"></span>';
            
            // Real network request via FormSubmit AJAX
            const formData = new FormData(salesForm);
            
            fetch("https://formsubmit.co/ajax/mechfy.clix@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                btn.innerHTML = originalText;
                
                if(data.success) {
                    salesMsg.textContent = "SALES INQUIRY TRANSMITTED SECURELY.";
                    salesMsg.style.color = "#2EE6B8";
                    salesMsg.style.textShadow = "0 0 5px #2EE6B8";
                    salesForm.reset();
                } else {
                    salesMsg.textContent = "TRANSMISSION FAILED. RETRY.";
                    salesMsg.style.color = "#ff1744";
                    salesMsg.style.textShadow = "0 0 5px #ff1744";
                }
                
                setTimeout(() => {
                    salesMsg.textContent = "";
                }, 5000);
            })
            .catch(error => {
                btn.innerHTML = originalText;
                
                salesMsg.textContent = "SYSTEM ERROR. NO CONNECTION.";
                salesMsg.style.color = "#ff1744";
                salesMsg.style.textShadow = "0 0 5px #ff1744";
                
                setTimeout(() => {
                    salesMsg.textContent = "";
                }, 5000);
            });
        });
    }
});
