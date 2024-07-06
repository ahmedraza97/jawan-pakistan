import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Events.module.css'
import HeadWithImg from '../HeadWithImg/HeadWithImg'
import CustomButton from '../Button/Button'
import { FaMapMarkerAlt } from "react-icons/fa";

const Events = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };

    let data = [
        {
            day: 10,
            MY: "March, 2022",
            time: '10:30AM - 12:30PM',
            title: '12 Things Successful Mompreneurs',
            location: 'New York, USA'
        }, {
            day: 15,
            MY: "March, 2023",
            time: '12:30AM - 9:30PM',
            title: 'Lorem Ipsum Successful Mompreneurs',
            location: 'New York, USA'
        }, {
            day: 10,
            MY: "March, 2022",
            time: '10:30AM - 12:30PM',
            title: '12 Things Successful Mompreneurs',
            location: 'New York, USA'
        }, {
            day: 15,
            MY: "March, 2023",
            time: '12:30AM - 9:30PM',
            title: 'Lorem Ipsum Successful Mompreneurs',
            location: 'New York, USA'
        }, {
            day: 10,
            MY: "March, 2022",
            time: '10:30AM - 12:30PM',
            title: '12 Things Successful Mompreneurs',
            location: 'New York, USA'
        }, {
            day: 15,
            MY: "March, 2023",
            time: '12:30AM - 9:30PM',
            title: 'Lorem Ipsum Successful Mompreneurs',
            location: 'New York, USA'
        },
    ]
    return (
        <div className={styles.Events}>
            <HeadWithImg title="Upcoming Events" />
            <div className={styles.eventCardContainer}>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div className={styles.card}>
                                <div className={styles.cardInner}>
                                    <div className={styles.Date}>
                                        <span>{item.day}</span>
                                        <p>{item.MY}</p>
                                    </div>
                                    <p className={styles.time}>{item.time}</p>
                                    <a className={styles.title}>{item.title}</a>
                                    <div className={styles.location}><FaMapMarkerAlt className={styles.icon} />
                                        {item.location}</div>
                                    <CustomButton text="Find Out More" />
                                </div>
                            </div>
                        )

                    })}
                </Slider>
            </div>



            {/* <CustomButton text="Find Out More" /> */}
        </div>
    )
}

export default Events