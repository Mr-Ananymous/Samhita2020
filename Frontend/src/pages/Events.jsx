import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import TechnicalImage from '../assets/Tech.png'
import NonTechnicalImage from '../assets/Nontech.png'

class Events extends Component {

    componentDidMount() {
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100            
        })
    }

    render() {
        return (
            <div style = {{overflowX: 'hidden'}}>
                <Helmet>
                    <title>Samhita 20 - Events</title>
                </Helmet>
                <Navbar name = 'event' />
                <section className = 'section' style = {{backgroundColor: 'rgba(199, 44, 65, 0.863)', minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div data-aos = 'fade-down' className = 'container events-outer-container'>
                        <div className = 'title is-3 is-lato has-text-centered'>
                            Events
                        </div>
                        <div className = 'columns' style = {{marginBottom: '50px', marginTop: '30px'}}>
                            <div className = 'column has-text-centered' style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                                <div className = 'event-image' onClick = {() => this.props.history.push('/events/technical')} style = {{marginTop: '-20px'}}>
                                    <LazyLoadImage src = {TechnicalImage}  alt = 'Technical events image' effect = 'blur' />
                                </div>
                            </div>
                            <div className = 'column has-text-centered' style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}} onClick = {() => this.props.history.push('/events/non-technical')}>
                                <div className = 'event-image'>
                                    <LazyLoadImage src = {NonTechnicalImage}  alt = 'Non-technical events image' effect = 'blur' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )  
    }
}

export default withRouter(Events)
