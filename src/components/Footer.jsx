import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        ELIA<span>C</span>
                    </Link>
                    <p>
                        {t('footer.companyDesc')}
                    </p>
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4>{t('footer.explore')}</h4>
                    <Link to="/">{t('nav.home')}</Link>
                    <Link to="/about">{t('nav.about')}</Link>
                    <Link to="/services">{t('nav.services')}</Link>
                    <Link to="/gallery">{t('gallery.title')}</Link>
                    <Link to="/contact">{t('nav.contact')}</Link>
                </div>

                <div className="footer-links-group">
                    <h4>{t('footer.services')}</h4>
                    <Link to="/services#facial-surgery">{t('home.facialTitle')}</Link>
                    <Link to="/services#skin-care">{t('home.skinTitle')}</Link>
                    <Link to="/services#injectables">{t('home.injectTitle')}</Link>
                    <Link to="/services#spa-therapy">{t('servicesPage.cat4Title')}</Link>
                </div>

                <div className="footer-contact">
                    <h4>{t('footer.contactUs')}</h4>
                    <p><MapPin size={16} /> 19 Điện Biên Phủ, Hà Nội</p>
                    <p><Phone size={16} /> (555) 123-4567</p>
                    <p><Mail size={16} /> hello@eliac.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
