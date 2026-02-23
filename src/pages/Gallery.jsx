import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

const ImageSlider = ({ beforeImage, afterImage, title, labelBefore, labelAfter }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <div className="slider-wrapper shadow-card">
            <h3 className="slider-title">{title}</h3>
            <div className="slider-container">
                <img
                    src={afterImage}
                    alt=""
                    className="slider-image after"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <img
                    src={beforeImage}
                    alt=""
                    className="slider-image before"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div
                    className="slider-handle"
                    style={{ left: `calc(${sliderPosition}% - 2px)` }}
                >
                    <div className="handle-knob"></div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="slider-input"
                    aria-label="Image comparison slider"
                />
                <div className="slider-labels">
                    <span className="label-before">{labelBefore}</span>
                    <span className="label-after">{labelAfter}</span>
                </div>
            </div>
        </div>
    );
};

const Gallery = () => {
    const { t } = useTranslation();
    const galleryItems = [
        {
            title: t('gallery.item1'),
            before: 'https://images.unsplash.com/photo-1510832198440-a52376950479?w=600&auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80'
        },
        {
            title: t('gallery.item2'),
            before: 'https://images.unsplash.com/photo-1544168190-79c15427004f?w=600&auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1599842057874-37393e9342df?w=600&auto=format&fit=crop&q=80'
        },
        {
            title: t('gallery.item3'),
            before: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=600&auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=80'
        },
        {
            title: t('gallery.item4'),
            before: 'https://images.unsplash.com/photo-1487570497554-ec0f73ced6de?w=600&auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&auto=format&fit=crop&q=80'
        }
    ];

    return (
        <div className="gallery-page animate-fade-in">
            <section className="page-header container text-center">
                <h1>{t('gallery.title')}</h1>
                <p className="page-subtitle">{t('gallery.subtitle')}</p>
            </section>

            <section className="gallery-grid section-padding container bg-alt">
                <div className="sliders-container">
                    {galleryItems.map((item, index) => (
                        <ImageSlider
                            key={index}
                            title={item.title}
                            beforeImage={item.before}
                            afterImage={item.after}
                            labelBefore={t('gallery.before')}
                            labelAfter={t('gallery.after')}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
