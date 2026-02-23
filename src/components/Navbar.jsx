import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="navbar-header">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    ELIA<span>C</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="navbar-links">
                    <Link to="/" className="nav-link">{t('nav.home')}</Link>
                    <Link to="/about" className="nav-link">{t('nav.about')}</Link>
                    <Link to="/services" className="nav-link">{t('nav.services')}</Link>
                    <Link to="/gallery" className="nav-link">{t('nav.gallery')}</Link>
                    <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>

                    <div className="language-selector">
                        <button className="lang-btn" aria-label="Language selector">
                            <Globe size={18} /> {i18n.language.toUpperCase()}
                        </button>
                        <div className="lang-dropdown">
                            <button onClick={() => changeLanguage('en')}>EN - English</button>
                            <button onClick={() => changeLanguage('vi')}>VI - Tiếng Việt</button>
                            <button onClick={() => changeLanguage('lo')}>LO - ພາສາລາວ</button>
                        </div>
                    </div>

                    <Link to="/booking" className="btn-primary">{t('nav.book')}</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="mobile-controls">
                    <div className="language-selector mobile">
                        <button className="lang-btn" aria-label="Language selector">
                            <Globe size={18} /> {i18n.language.toUpperCase()}
                        </button>
                        <div className="lang-dropdown">
                            <button onClick={() => { changeLanguage('en'); toggleMenu(); }}>EN</button>
                            <button onClick={() => { changeLanguage('vi'); toggleMenu(); }}>VI</button>
                            <button onClick={() => { changeLanguage('lo'); toggleMenu(); }}>LO</button>
                        </div>
                    </div>
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="nav-link" onClick={toggleMenu}>{t('nav.home')}</Link>
                    <Link to="/about" className="nav-link" onClick={toggleMenu}>{t('nav.about')}</Link>
                    <Link to="/services" className="nav-link" onClick={toggleMenu}>{t('nav.services')}</Link>
                    <Link to="/gallery" className="nav-link" onClick={toggleMenu}>{t('nav.gallery')}</Link>
                    <Link to="/contact" className="nav-link" onClick={toggleMenu}>{t('nav.contact')}</Link>
                    <Link to="/booking" className="btn-primary" onClick={toggleMenu}>{t('nav.book')}</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
