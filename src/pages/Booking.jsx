import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Booking.css';

const Booking = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const initialService = searchParams.get('service') || '';

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: initialService,
        date: '',
        time: '',
        notes: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    };

    if (submitted) {
        return (
            <div className="booking-page animate-fade-in container section-padding text-center">
                <div className="success-message shadow-card">
                    <h2>{t('booking.successTitle')}</h2>
                    <p>{t('booking.successP1').replace('{name}', formData.name)}</p>
                    <p>{t('booking.successP2').replace('{phone}', formData.phone)}</p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline mt-4">{t('booking.successBtn')}</button>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page animate-fade-in">
            <section className="page-header container text-center">
                <h1>{t('booking.title')}</h1>
                <p className="page-subtitle">{t('booking.subtitle')}</p>
            </section>

            <section className="booking-form-section container pb-padding">
                <div className="booking-form-wrapper shadow-card">
                    <div className="booking-info bg-alt">
                        <h3>{t('booking.whyTitle')}</h3>
                        <ul className="benefits-list">
                            <li>{t('booking.bene1')}</li>
                            <li>{t('booking.bene2')}</li>
                            <li>{t('booking.bene3')}</li>
                            <li>{t('booking.bene4')}</li>
                        </ul>
                        <div className="contact-reminder mt-4">
                            <p>{t('booking.assistP')}</p>
                            <p className="font-bold text-primary">(555) 123-4567</p>
                        </div>
                    </div>

                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="input-group">
                                <label htmlFor="name"><User size={16} /> {t('booking.formName')}</label>
                                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Doe" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="phone"><Phone size={16} /> {t('booking.formPhone')}</label>
                                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                            </div>

                            <div className="input-group full-width">
                                <label htmlFor="email"><Mail size={16} /> {t('booking.formEmail')}</label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" />
                            </div>

                            <div className="input-group full-width">
                                <label htmlFor="service"><FileText size={16} /> {t('booking.formSrv')}</label>
                                <select id="service" name="service" required value={formData.service} onChange={handleChange}>
                                    <option value="" disabled>{t('booking.formSrvPh')}</option>
                                    <option value="facial-surgery">{t('booking.formSrvOpt1')}</option>
                                    <option value="skin-care">{t('booking.formSrvOpt2')}</option>
                                    <option value="injectables">{t('booking.formSrvOpt3')}</option>
                                    <option value="spa-therapy">{t('booking.formSrvOpt4')}</option>
                                    <option value="undecided">{t('booking.formSrvOpt5')}</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="date"><Calendar size={16} /> {t('booking.formDate')}</label>
                                <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="time"><Clock size={16} /> {t('booking.formTime')}</label>
                                <select id="time" name="time" required value={formData.time} onChange={handleChange}>
                                    <option value="" disabled>{t('booking.formTimePh')}</option>
                                    <option value="morning">{t('booking.formTimeOpt1')}</option>
                                    <option value="afternoon">{t('booking.formTimeOpt2')}</option>
                                    <option value="evening">{t('booking.formTimeOpt3')}</option>
                                </select>
                            </div>

                            <div className="input-group full-width">
                                <label htmlFor="notes">{t('booking.formNotes')}</label>
                                <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder={t('booking.formNotesPh')}></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary form-submit-btn">{t('booking.formSubmit')}</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Booking;
