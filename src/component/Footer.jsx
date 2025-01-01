import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-2"> {/* Reduced padding */}
            <div className="container">
                <div className="row">
                 

                    <div className="col-md-6">
                        <h5 className="text-center">Follow Us</h5> {/* Centered text */}
                        <ul className="list-unstyled d-flex justify-content-center"> {/* Centered icons */}
                            <li className="me-3">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="fab fa-instagram fa-lg"></i> {/* Smaller icon */}
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="fab fa-linkedin fa-lg"></i> {/* Smaller icon */}
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="fab fa-twitter fa-lg"></i> {/* Smaller icon */}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h5 className="text-center">Contact</h5> {/* Centered text */}
                        <ul className="list-unstyled">
                            <li>Phone: +91 808517-0956</li>
                            <li>Email: <a href="mailto:yadeepjoshi005@gmail.com">yadeepjoshi005@gmail.com</a></li> {/* Corrected mailto link */}
                            <li>Address:  21/08, Indore, India</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-light" />

                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mb-0">&copy; 2025 YJ. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
