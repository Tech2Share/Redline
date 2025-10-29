class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    transition: background-color 0.3s ease, box-shadow 0.3s ease;
                }
                .navbar.scrolled {
                    background-color: #1A202C; /* Darker background on scroll */
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Shadow on scroll */
                }
                .nav-link {
                    font-size: 1rem;
                    color: #F7FAFC; /* Default link color */
                    transition: color 0.3s ease;
                    padding: 10px;
                }
                .nav-link:hover {
                    color: #E53E3E; /* Red hover effect */
                }
                .mobile-menu {
                    max-height: 0;
                    transition: max-height 0.5s ease-out;
                    overflow: hidden;
                }
                .mobile-menu.open {
                    max-height: 500px;
                    transition: max-height 0.5s ease-in;
                }

                /* Mobile Menu Styling */
                .mobile-menu a {
                    padding: 1rem;
                    font-size: 1.125rem;
                    color: #F7FAFC;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }
                .mobile-menu a:hover {
                    background-color: #2D3748; /* Darker background on hover */
                }

                /* Button Styling */
                .btn-contact {
                    background-color: #E53E3E;
                    color: white;
                    padding: 0.75rem 2rem;
                    border-radius: 9999px;
                    text-transform: uppercase;
                    font-weight: 600;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                    border: 2px solid #E53E3E; /* Matching border */
                    text-align: center;
                    white-space: nowrap; /* Prevent text wrapping */
                }
                .btn-contact:hover {
                    background-color: #C53030;
                    color: white;
                    transform: scale(1.05);
                    border-color: #C53030; /* Matching hover border */
                }

                /* Responsive Mobile Menu */
                @media (max-width: 768px) {
                    .hidden-md {
                        display: block;
                    }
                    .md\\:flex {
                        display: none;
                    }
                }

                /* Alignment Adjustments */
                .navbar .flex {
                    justify-content: space-between;
                    align-items: center;
                }

                /* Spacing for Navbar Links */
                .md\\:flex .nav-link {
                    margin-right: 1rem;
                }

                .md\\:flex .btn-contact {
                    margin-left: 1rem;
                }
            </style>
            <nav class="navbar fixed w-full z-50 bg-transparent text-white">
                <div class="container mx-auto px-6 py-4">
                    <div class="flex justify-between items-center">
                        <a href="index.html" class="flex items-center space-x-2">
                            <span class="text-2xl font-bold">Redline<span class="text-primary">Intelligence</span></span>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center">
                            <a href="index.html" class="nav-link">Home</a>
                            <a href="services.html" class="nav-link">Services</a>
                            <a href="about.html" class="nav-link">About</a>
                            <a href="testimonials.html" class="nav-link">Testimonials</a>
                            <a href="contact.html" class="btn-contact">Contact</a>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button class="md:hidden focus:outline-none" id="mobile-menu-button">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                    
                    <!-- Mobile Navigation -->
                    <div class="mobile-menu md:hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-4 space-y-2">
                            <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">Home</a>
                            <a href="services.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">Services</a>
                            <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">About</a>
                            <a href="testimonials.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">Testimonials</a>
                            <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white text-center">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            feather.replace(); // Re-initialize Feather icons
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = this.shadowRoot.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Initialize Feather Icons
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);
