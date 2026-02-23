import React from 'react';
import { Award, Shield, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
    const { t } = useTranslation();
    const doctors = [
        {
            name: 'Dr. Emily Chen',
            role: t('about.dr1Role'),
            img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80',
            creds: t('about.dr1Cred')
        },
        {
            name: 'Dr. James Anderson',
            role: t('about.dr2Role'),
            img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80',
            creds: t('about.dr2Cred')
        }
    ];

    return (
        <div className="about-page animate-fade-in">
            {/* Page Header */}
            <section className="page-header container text-center">
                <h1>{t('about.title')}</h1>
                <p className="page-subtitle">{t('about.subtitle')}</p>
            </section>

            {/* Clinic Story */}
            <section className="clinic-story section-padding container">
                <div className="story-grid">
                    <div className="story-image shadow-card">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80" alt="Clinic Office" />
                    </div>
                    <div className="story-text">
                        <h2>{t('about.philosophyTitle')}</h2>
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <div className="core-values">
                            <div className="value-item">
                                <Shield className="text-primary" size={24} /> <span>{t('about.val1')}</span>
                            </div>
                            <div className="value-item">
                                <Award className="text-primary" size={24} /> <span>{t('about.val2')}</span>
                            </div>
                            <div className="value-item">
                                <UserCheck className="text-primary" size={24} /> <span>{t('about.val3')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section-padding bg-alt">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>{t('about.teamTitle')}</h2>
                        <p>{t('about.teamSub')}</p>
                    </div>
                    <div className="team-grid">
                        {doctors.map((doc, idx) => (
                            <div key={idx} className="team-card shadow-card">
                                <img src={doc.img} alt={doc.name} className="team-img" />
                                <div className="team-info">
                                    <h3>{doc.name}</h3>
                                    <p className="team-role text-primary">{doc.role}</p>
                                    <p className="team-creds">{doc.creds}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Banner */}
            <section className="certs-section section-padding container text-center">
                <h2>{t('about.certTitle')}</h2>
                <p className="page-subtitle mb-4">{t('about.certSub')}</p>
                <div className="certs-grid">
                    <div className="cert-badge shadow-card">American Board of Cosmetic Surgery</div>
                    <div className="cert-badge shadow-card">International Society of Plastic Surgeons</div>
                    <div className="cert-badge shadow-card">FDA Cleared Technologies</div>
                    <div className="cert-badge shadow-card">Excellence in Dermatology 2023</div>
                </div>
            </section>
        </div>
    );
};

export default About;
