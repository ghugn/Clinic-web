import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FloatingWidget.css';

const FloatingWidget = () => {
    const { t } = useTranslation();

    return (
        <div className="floating-widget">
            <Link to="/booking" className="widget-item booking" title={t('floating.booking')}>
                <div className="widget-icon">
                    <Calendar size={28} />
                </div>
                <span className="widget-text">{t('floating.booking')}</span>
            </Link>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="widget-item facebook" title="Facebook">
                <div className="widget-icon">
                    <MessageCircle size={28} />
                </div>
                <span className="widget-text">Facebook</span>
            </a>

            <a href="tel:+13105550198" className="widget-item hotline" title={t('floating.hotline')}>
                <div className="widget-icon">
                    <Phone size={28} />
                </div>
                <span className="widget-text">{t('floating.hotline')}</span>
            </a>

            <a href="https://zalo.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="widget-item zalo" title="Zalo">
                <div className="widget-icon">
                    {/* Simple text or SVG representation for Zalo */}
                    <span className="zalo-text-icon">Zalo</span>
                </div>
                <span className="widget-text">Zalo</span>
            </a>
        </div>
    );
};

export default FloatingWidget;
