import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
    const { t } = useTranslation();
    const services = [
        {
            title: t('home.facialTitle'),
            desc: t('home.facialDesc'),
            img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80',
            link: '/services#facial-surgery'
        },
        {
            title: t('home.skinTitle'),
            desc: t('home.skinDesc'),
            img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&auto=format&fit=crop&q=80',
            link: '/services#skin-care'
        },
        {
            title: t('home.injectTitle'),
            desc: t('home.injectDesc'),
            img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&auto=format&fit=crop&q=80',
            link: '/services#injectables'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Jenkins',
            text: 'The team at EliaC completely transformed my confidence. The results are so natural and the care was truly luxurious.',
            rating: 5
        },
        {
            name: 'Emily Davis',
            text: 'From the moment I walked into the clinic, I felt like a VIP. My skin has never looked better after their signature laser treatment.',
            rating: 5
        },
        {
            name: 'Jessica M.',
            text: 'Highly professional and incredibly talented doctors. I trust them completely with my facial treatments.',
            rating: 5
        }
    ];

    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">{t('home.heroTitle1')}<span className="highlight">{t('home.heroTitleHighlight')}</span></h1>
                    <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
                    <div className="hero-buttons">
                        <Link to="/booking" className="btn-primary btn-large">{t('home.bookConsult')}</Link>
                        <Link to="/services" className="btn-outline btn-large">{t('home.viewServices')}</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section section-padding container">
                <div className="intro-grid">
                    <div className="intro-text">
                        <h2>{t('home.welcomeTitle')}</h2>
                        <p>{t('home.welcomeP1')}</p>
                        <p>{t('home.welcomeP2')}</p>
                        <Link to="/about" className="link-arrow">{t('home.discoverStory')} <ArrowRight size={18} /></Link>
                    </div>
                    <div className="intro-image">
                        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80" alt="Clinic Interior" className="shadow-card img-cover" />
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="services-highlight bg-alt section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>{t('home.sigServicesTitle')}</h2>
                        <p>{t('home.sigServicesSub')}</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card shadow-card">
                                <div className="service-img">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <Link to={service.link} className="link-arrow">{t('home.learnMore')} <ArrowRight size={18} /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/services" className="btn-primary">{t('home.viewAll')}</Link>
                    </div>
                </div>
            </section>

            {/* Before / After Preview */}
            <section className="preview-section section-padding container">
                <div className="preview-content">
                    <h2>{t('home.transformTitle')}</h2>
                    <p>{t('home.transformSub')}</p>
                    <Link to="/gallery" className="btn-outline link-dark">{t('home.viewGallery')}</Link>
                </div>
                <div className="preview-image-wrapper shadow-card">
                    <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop&q=80" alt="Beautiful result" className="img-cover" />
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section-padding bg-alt">
                <div className="container">
                    <h2 className="text-center">{t('home.clientExp')}</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testi, i) => (
                            <div key={i} className="testimonial-card shadow-card">
                                <div className="stars">
                                    {[...Array(testi.rating)].map((_, idx) => <Star key={idx} size={18} className="star-icon" fill="currentColor" />)}
                                </div>
                                <p className="testi-text">"{testi.text}"</p>
                                <p className="testi-name">- {testi.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact & Map */}
            <section className="home-contact-section">
                <div className="contact-info-block container">
                    <div className="contact-item">
                        <div className="contact-icon"><MapPin size={28} /></div>
                        <div>
                            <h4>{t('home.location')}</h4>
                            <p>19 Điện Biên Phủ, Hà Nội</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><Phone size={28} /></div>
                        <div>
                            <h4>{t('home.callUs')}</h4>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon"><Clock size={28} /></div>
                        <div>
                            <h4>{t('home.hours')}</h4>
                            <p>Mon-Sat: 9AM - 7PM</p>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.926189382229!2d105.83547191142273!3d21.035639480536768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba6a7ab1ea1%3A0xd6048d0df54f15d9!2zMTkgxJBp4buHbiBCacOqbiBQaOG7pywgxJBp4buHbiBCacOqbiwgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        title="Clinic Location"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Home;
