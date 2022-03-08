import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ContactImage from '../assets/Contact.png'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import Scroll from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

class Contact extends Component {

    componentDidMount() {
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 250,
            once: true
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Samhita 20 - Contact us</title>
                </Helmet>
                <Navbar name = 'contact'/>
                <section className = 'section contact-outer-container'>
                    <div data-aos = 'fade-down' className = 'container contact-main-container'>
                        <div className = 'columns contact-columns'>
                            <div className = 'column contact-image' style = {{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                <LazyLoadImage src = {ContactImage} alt = 'Contact us' effect = 'blur' />
                            </div>
                            <div className = 'column' style = {{backgroundColor: 'white',	boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.75)'}}>
                                <section className = 'section'>
                                    <div className = 'container'>
                                        <div className = 'title is-3 is-lato has-text-link'>Contact us</div>
                                        <div className = 'field'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Address
                                                </label>
                                            </div>
                                            <div className = 'subtitle is-lato is-6' style = {{marginTop: '5px'}}>
                                                Madras Institute of Technology, Chromepet, Chennai, Tamil Nadu 600044<br/>
                                            </div>
                                        </div>
                                        <iframe title = 'MIT map' className = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3690307536344!2d80.13758551433395!3d12.94822181889539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20Of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1575779215663!5m2!1sen!2sin" width="500" height="300" frameborder="0" style={{border: '2px solid #276CDA', borderRadius: 10,marginBottom: '10px'}} allowfullscreen=""></iframe>
                                        <div className = 'field'>
                                            <div className = 'control' >
                                                <label className = 'label is-lato is-size-5'>
                                                    Mobile
                                                </label>
                                            </div>
                                            <div className = 'subtitle is-lato is-6' style = {{ marginTop: '10px'}}>
                                                <ul>
                                                    <li style = {{marginBottom: '15px'}}>
                                                        <span>Aakash Jacobs M (<strong>Chairman</strong>)</span>
                                                        <br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px', marginTop: '5px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +917397234527'>+91 7397234527</a><br/>
                                                        <span className = 'icon' style = {{position: 'relative', top: '3px',marginLeft: '-4px', marginRight: '2px'}}>
                                                            <FontAwesomeIcon icon = {faEnvelope} />
                                                        </span>
                                                        <a href = 'mailto: admin@samhita.org.in'>admin@samhita.org.in</a>
                                                    </li>
                                                    <li style = {{marginBottom: '15px'}}>
                                                        Gowtham M (<strong>Workshop coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px', marginTop: '5px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +917598130276'>+91 7598130276</a><br/>
                                                        <span className = 'icon' style = {{position: 'relative', top: '3px',marginLeft: '-4px', marginRight: '2px'}}>
                                                            <FontAwesomeIcon icon = {faEnvelope} />
                                                        </span>
                                                        <a href = 'mailto: workshop@samhita.org.in'>workshop@samhita.org.in</a>
                                                    </li>
                                                    <li style = {{marginBottom: '15px'}}>
                                                        Nachiappan AR (<strong>Event coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px', marginTop: '5px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +919790271224'>+91 9790271224</a><br/>
                                                        <span className = 'icon' style = {{position: 'relative', top: '3px',marginLeft: '-4px', marginRight: '2px'}}>
                                                            <FontAwesomeIcon icon = {faEnvelope} />
                                                        </span>
                                                        <a href = 'mailto: events@samhita.org.in'>events@samhita.org.in</a>
                                                    </li>
                                                    <li style = {{marginBottom: '15px'}}>
                                                        Annamalai C (<strong>Accommodation coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px', marginTop: '5px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +919698469969'>+91 9698469969</a><br/>
                                                        <span className = 'icon' style = {{position: 'relative', top: '3px',marginLeft: '-4px', marginRight: '2px'}}>
                                                            <FontAwesomeIcon icon = {faEnvelope} />
                                                        </span>
                                                        <a href = 'mailto: accommodation@samhita.org.in'>accommodation@samhita.org.in</a>
                                                    </li>
                                                    <li style = {{marginBottom: '15px'}}>
                                                        Parvathi Nathan K (<strong>Sponsorship coordinator</strong>)<br/>
                                                        <span className = 'icon' style = {{marginLeft: '-6px', marginTop: '5px'}}>
                                                            <FontAwesomeIcon icon = {faMobileAlt} />
                                                        </span>
                                                        <a href = 'tel: +919003044463'>+91 9003044463</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className = 'field'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Email
                                                </label>
                                            </div>
                                            <div className = 'subtitle is-lato is-6 email-label' style = {{marginTop: '6px', marginLeft: '0px'}}>
                                                <a href = 'mailto: chairmainita@mitindia.edu'>
                                                    chairmanita@mitindia.edu
                                                </a>
                                            </div>
                                        </div>
                                        <div className = 'field' style = {{margin: '25px auto'}}>
                                            <div className = 'control is-size-6 is-lato'>
                                                <strong>Staff incharge: </strong>Dr. B. Lydia Elizabeth
                                            </div>
                                            <div className = 'subtitle is-lato is-6 email-label' style = {{marginTop: '2px', marginLeft: '-6px'}}>
                                                <span className = 'icon staff' style = {{position: 'relative', top: '3px',marginLeft: '3px', marginRight: '2px'}}>
                                                    <FontAwesomeIcon icon = {faEnvelope} />
                                                </span>
                                                <a href = 'mailto: lydiajohn@annauniv.edu'>
                                                    lydiajohn@annauniv.edu
                                                </a>
                                            </div>
                                        </div>
                                        <div className = 'field'>
                                            <div className = 'control'>
                                                <label className = 'label is-lato is-size-5'>
                                                    Follow us on
                                                </label>
                                            </div>
                                        </div>
                                        <div className = 'field is-grouped' style = {{flexWrap: 'wrap'}}>
                                            <a href = 'https://www.facebook.com/samhitamit/' target = '_blank' rel = 'noopener noreferrer' className = 'control has-text-centered'>
                                                <FontAwesomeIcon icon = {faFacebook} size = 'lg' color = '#3B579D' style = {{marginRight: '7px'}} /><br/>
                                            </a>
                                            <a href = 'https://twitter.com/ITA_MIT_INDIA' target = '_blank' rel = 'noopener noreferrer' className = 'control has-text-centered'>
                                                <FontAwesomeIcon icon = {faTwitter} size = 'lg' color = '#55ACEF' style = {{marginRight: '7px'}} /><br/>
                                            </a>
                                            <a href = 'https://instagram.com/samhita_mit' target = '_blank' rel = 'noopener noreferrer' className = 'control has-text-centered'>
                                                <FontAwesomeIcon icon = {faInstagram} size = 'lg' color = '#A7005F' style = {{marginRight: '7px'}} /><br/>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className = 'navbar is-fixed-bottom'>
                    <div className = 'navbar-brand'>
                        <div className = 'navbar-item'>
                            <div className = 'field'>
                                <div className = 'credit-title'>
                                    <div className = 'subtitle is-6 is-lato'><strong>Site designed and developed by</strong><br/><a href = 'mailto: rtssaran@gmail.com' target = '_blank' rel="noopener noreferrer">Saran RTS</a> & <a href = 'mailto: gowtha0276bin@gmail.com' target = '_blank' rel="noopener noreferrer">Gowtham M</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Contact)
