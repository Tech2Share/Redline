class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Footer Container Styling */
                footer {
                    background-color: #1A202C; /* Dark background */
                    color: #F7FAFC; /* Light text */
                    padding: 4rem 0;
                }

                footer h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    color: #E53E3E; /* Red color for headings */
                }

                footer p {
                    font-size: 1rem;
                    color: #CBD5E0; /* Light gray text */
                    line-height: 1.6;
                }

                /* Social Icons */
                .social-icon {
                    color: #F7FAFC;
                    font-size: 1.5rem;
                    transition: transform 0.3s ease, color 0.3s ease;
                }

                .social-icon:hover {
                    color: #E53E3E; /* Red on hover */
                    transform: translateY(-5px); /* Slight lift effect */
                }

                /* Footer Links */
                .footer-link {
                    color: #CBD5E0; /* Light gray text */
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-link:hover {
                    color: #E53E3E; /* Red color on hover */
                    text-decoration: underline;
                }

                /* Grid Layout for Footer */
                .footer-container {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                }

                @media (min-width: 768px) {
                    .footer-container {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .footer-container {
                        grid-template-columns: repeat(4, 1fr); /* 4 columns on larger screens */
                    }
                }

                .footer-container div {
                    padding: 1rem;
                }

                /* Footer Bottom */
                .footer-bottom {
                    border-top: 1px solid #2D3748; /* Darker top border */
                    padding-top: 1rem;
                    text-align: center;
                    color: #CBD5E0;
                    font-size: 0.875rem;
                }
            </style>

            <footer>
                <div class="footer-container">
                    <!-- Company Info -->
                    <div>
                        <h3>Redline Intelligence</h3>
                        <p>Empowering businesses with cutting-edge AI and automation solutions.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="social-icon">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Updated Services Links -->
                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="services.html" class="footer-link">AI & Machine Learning</a></li>
                            <li><a href="services.html" class="footer-link">Automation Solutions</a></li>
                            <li><a href="services.html" class="footer-link">CRM Integration</a></li>
                            <li><a href="services.html" class="footer-link">Data Science & Visualization</a></li>
                        </ul>
                    </div>
                    
                    <!-- Company Links -->
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html" class="footer-link">About Us</a></li>
                            <li><a href="testimonials.html" class="footer-link">Testimonials</a></li>
                            <li><a href="#" class="footer-link">Careers</a></li>
                            <li><a href="#" class="footer-link">Blog</a></li>
                        </ul>
                    </div>
                    
                    <!-- Updated Contact Information -->
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li class="flex items-center">
                                <i data-feather="mail" class="mr-2"></i>
                                <span>redlineintelligence@gmail.com</span>
                            </li>
                            <li class="flex items-center">
                                <i data-feather="phone" class="mr-2"></i>
                                <span>+92 312 356 0670</span>
                            </li>
                            <li class="flex items-center">
                                <i data-feather="map-pin" class="mr-2"></i>
                                <span>Al Kabir town phase 2, Lahore, Pakistan</span>
                            </li>
                            <li class="flex items-center">
                                <i data-feather="globe" class="mr-2"></i>
                                <span><a href="https://www.redlineintelligence.com" target="_blank" class="footer-link">https://redline-mu.vercel.app</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>© 2025 Redline Intelligence. All rights reserved.</p>
                </div>
            </footer>
        `;

        // Initialize Feather Icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);
