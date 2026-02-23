import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
    const { hash } = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const serviceCategories = [
        {
            id: 'facial-surgery',
            title: t('servicesPage.cat1Title'),
            desc: t('servicesPage.cat1Desc'),
            img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80',
            items: [
                { name: t('servicesPage.cat1i1'), detail: t('servicesPage.cat1i1d') },
                { name: t('servicesPage.cat1i2'), detail: t('servicesPage.cat1i2d') },
                { name: t('servicesPage.cat1i3'), detail: t('servicesPage.cat1i3d') }
            ]
        },
        {
            id: 'skin-care',
            title: t('servicesPage.cat2Title'),
            desc: t('servicesPage.cat2Desc'),
            img: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop&q=80',
            items: [
                { name: t('servicesPage.cat2i1'), detail: t('servicesPage.cat2i1d') },
                { name: t('servicesPage.cat2i2'), detail: t('servicesPage.cat2i2d') },
                { name: t('servicesPage.cat2i3'), detail: t('servicesPage.cat2i3d') }
            ]
        },
        {
            id: 'injectables',
            title: t('servicesPage.cat3Title'),
            desc: t('servicesPage.cat3Desc'),
            img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&auto=format&fit=crop&q=80',
            items: [
                { name: t('servicesPage.cat3i1'), detail: t('servicesPage.cat3i1d') },
                { name: t('servicesPage.cat3i2'), detail: t('servicesPage.cat3i2d') },
                { name: t('servicesPage.cat3i3'), detail: t('servicesPage.cat3i3d') }
            ]
        },
        {
            id: 'spa-therapy',
            title: t('servicesPage.cat4Title'),
            desc: t('servicesPage.cat4Desc'),
            img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80',
            items: [
                { name: t('servicesPage.cat4i1'), detail: t('servicesPage.cat4i1d') },
                { name: t('servicesPage.cat4i2'), detail: t('servicesPage.cat4i2d') },
                { name: t('servicesPage.cat4i3'), detail: t('servicesPage.cat4i3d') }
            ]
        }
    ];

    return (
        <div className="services-page animate-fade-in">
            <section className="page-header container text-center">
                <h1>{t('servicesPage.title')}</h1>
                <p className="page-subtitle">{t('servicesPage.subtitle')}</p>
            </section>

            <section className="services-list section-padding container">
                {serviceCategories.map((cat, index) => (
                    <div
                        key={cat.id}
                        id={cat.id}
                        className={`service-category-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                    >
                        <div className="service-category-image shadow-card">
                            <img src={cat.img} alt={cat.title} />
                        </div>
                        <div className="service-category-content">
                            <h2>{cat.title}</h2>
                            <p className="service-category-desc">{cat.desc}</p>

                            <ul className="service-items-list">
                                {cat.items.map((item, idx) => (
                                    <li key={idx}>
                                        <h4>{item.name}</h4>
                                        <p>{item.detail}</p>
                                    </li>
                                ))}
                            </ul>

                            <Link to={`/booking?service=${cat.id}`} className="btn-primary mt-4 inline-block">
                                {t('servicesPage.bookSrvBtn')}
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="services-cta bg-alt section-padding text-center">
                <div className="container">
                    <h2>{t('servicesPage.ctaTitle')}</h2>
                    <p className="page-subtitle mb-4">{t('servicesPage.ctaSub')}</p>
                    <Link to="/contact" className="btn-outline">{t('servicesPage.contactBtn')} <ArrowRight size={18} className="ml-2 inline" /></Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
