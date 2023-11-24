import product1 from '../../Assets/images/product-accounting-1-360x456.d110a0.webp';
import product2 from '../../Assets/images/product-cleaning-1-360x456.d110a0.webp';
import product3 from '../../Assets/images/product-club-1-360x456.d110a0.webp';
import product4 from '../../Assets/images/product-facility-1-360x456.d110a0.webp';
import product5 from '../../Assets/images/product-hrms-1-360x456.d110a0.webp';
import product6 from '../../Assets/images/product-property-1-360x456.d110a0.webp';
import product7 from '../../Assets/images/building-materials-360x456.d110a0.webp';
import React from 'react';
import ReactDOM  from 'react';
import '../../Assets/css files/ProductSlider.css';


const slideWidth = 30;

const _items = [
    {
        product: {
            index: 0,
            title:'Best ERP software in UAE',
            headline:'EQUAL VAT compliant fully functional Financial Accounting system streamlines the entire financial process.',
            src: {product1}
          },
    },
    {
        product: {
            index: 1,
            title:'Best ERP software in UAE',
            headline:'EQUAL easy-to-use cloud-based cleaning management system to manage the mobile workforce more efficiently.',
            src: {product2}
          },
    },
    {
        product: {
            index: 2,
            title:'Best ERP software in UAE',
            headline: 'Our comprehensive EQUAL club management system manages all aspects of the event planning business.',
            src: {product3}
          },
    },
    {
        product: {
            index: 3,
            title:'Best ERP software in UAE',
            headline: 'EQUAL the intuitive and most reliable facility management software that helps to drive workplace performance.',
            src: {product4}
          },
    },
    {
        product: {
            index: 4,
            title:'Best ERP software in UAE',
            headline:'EQUAL all-in-one workforce management system to automate and digitalize all the HR-related manual tasks.',
            src: {product5}
          },
    },
    {
        product:{
            index: 5,
            title:'Best ERP software in UAE',
            headline: 'Our property management system is ideal for the real estate property manager, owners, and agents.',
            src: {product6}
          },
    },
    {
        product: {
            index: 6,
            title:'Best ERP software in UAE',
            headline: 'Integrated with the latest features EQUAL building maintenance application improves the efficiency of the mobile workforce.',
            src: {product7}
          },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        product: _items[idx].product,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.product.image} alt={item.product.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.product.title}</h4>
                <p>{item.product.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

function ProductSlider(){
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSlider