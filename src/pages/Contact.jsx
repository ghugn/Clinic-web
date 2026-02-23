import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="contact-page animate-fade-in">
            <section className="page-header container text-center">
                <h1>{t('contact.title')}</h1>
                <p className="page-subtitle">{t('contact.subtitle')}</p>
            </section>

            <section className="contact-grid-section section-padding container">
                <div className="contact-grid">

                    <div className="contact-details shadow-card">
                        <h2>{t('contact.getInTouch')}</h2>
                        <p className="contact-intro">
                            {t('contact.intro')}
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <MapPin className="text-primary" size={24} />
                                <div>
                                    <h4>{t('contact.addrTitle')}</h4>
                                    <p>{t('contact.addr1')}<br />{t('contact.addr2')}</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <Phone className="text-primary" size={24} />
                                <div>
                                    <h4>{t('contact.phoneTitle')}</h4>
                                    <p>(555) 123-4567<br />(800) 987-ELIA</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <Mail className="text-primary" size={24} />
                                <div>
                                    <h4>{t('contact.emailTitle')}</h4>
                                    <p>hello@eliac-aesthetic.com<br />concierge@eliac-aesthetic.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-connect mt-4">
                            <h4>{t('contact.followTitle')}</h4>
                            <div className="social-links-contact">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map shadow-card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.926189382229!2d105.83547191142273!3d21.035639480536768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba6a7ab1ea1%3A0xd6048d0df54f15d9!2zMTkgxJBp4buHbiBCacOqbiBQaOG7pywgxJBp4buHbiBCacOqbiwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            title="Clinic Location Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '500px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
