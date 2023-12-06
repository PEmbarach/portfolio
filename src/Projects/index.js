import './projects.css'
import React from 'react';
import { Button, Card } from 'antd';
import mycookbook from '../assets/images/MyCookbook.png';
import coffeeie from '../assets/images/coffeeie.png'


const Projects = () => {
    return (
        <section id="Projects" >
            <h1 className="projects">Projects</h1>
            <div className='title'>
                <Card className="card" bordered={false} style={{ width: 300 }} size='default'>
                        <h2 className='name'>Coffeeie</h2>
                        <img src={coffeeie} alt='coffeeie' />
                        <Button className='cardButton'> <a href='https://coffeeie-p5.herokuapp.com/' target='_blank' rel="noopener noreferrer"> Live </a> </Button>
                        <Button className='cardButton'> <a href='https://github.com/PEmbarach/coffeeie' target='_blank' rel="noopener noreferrer"> Github </a> </Button>
                </Card>
                <Card className="card" bordered={false} style={{ width: 300 }}>
                        <h2 className='name'>MyCookbook</h2>
                        <img src={mycookbook} alt='mycookbook' />
                        <Button className='cardButton'> <a href='https://my-cookbook.herokuapp.com/' target='_blank' rel="noopener noreferrer"> Live </a> </Button>
                        <Button className='cardButton'> <a href='https://github.com/PEmbarach/MyCookbook' target='_blank' rel="noopener noreferrer"> Github </a> </Button>
                </Card>
                {/* <Card className="card" bordered={false} style={{ width: 300 }}>
                    <a href='https://github.com/PEmbarach/coffeeie' target='_blank' rel="noopener noreferrer">
                        <h2 className='name'>Coffeeie</h2>
                        <img src='./image/coffeeie.png' alt='coffeeie' />
                    </a>
                </Card> */}
            </div>
        </section>
    )
}

export default Projects