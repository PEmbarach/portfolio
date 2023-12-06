import './skills.css'
import React from 'react';
import { Card } from 'antd';
import js from '../assets/images/javascript.png';
import python from '../assets/images/python.png';
import react from '../assets/images/react.png'


const { Meta } = Card;

const Skills = () => {
    return (
        <section id="Skills" >
            <h1 className="skills">Skills</h1>
            <div className='title'>
                <Card
                    className='style'
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="JavaScript"
                            src={js}
                        />
                    }
                >
                    <Meta
                        title="JavaScript"
                        description="My knowledge in JavaScript covers from work with Functions and Objects,
                    how to manipulate the DOM, handling DOM Events, work with Forms,
                    Arrow Functions, Spread, rest and destructuring, also include how to work with Map,
                    filter and reduce. I worked with JQuery library , consuming API,
                    preview of how to work with Jest for testing."
                    />
                </Card>
                <Card
                    className='style'
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="React"
                            src={react}
                        />
                    }
                >
                    <Meta
                        title="React"
                        description="In React, form the initial installation and configuration to create React project,
                    work with components, handle events, rendering list, forms, hooks like useState,
                    how to work with props, render lists with .map,
                    nested elements using children props, manipulate and transform arrays of objects,
                    filter items from an array, conditional rendering.
                    Also the best practices, how to keep my code clean and organised."
                    />
                </Card>
                <Card
                    className='style'
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="Python"
                            src={python}
                        />
                    }
                >
                    <Meta
                        title="Python"
                        description="Working with Python, I've learned about variables, specific data types,
                    operators, comparators, flow control, data structures, how to create functions,
                    classes, object oriented concepts.
                    Also how to use Django framework , create backend API's, using models,
                    serializer, permissions and authentication.
                    How to setup and connect my database (SQL) with the frontend."
                    />
                </Card>
            </div>
        </section >
    )
};

export default Skills