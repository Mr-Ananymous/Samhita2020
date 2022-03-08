import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Logo from '../assets/Samhita-Navbar-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faHome, faCalendarDay, faChalkboardTeacher, faUser, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {

    componentDidMount() {
        const isLogged = localStorage.getItem('loggedIn')
        if(isLogged === 'true') {
            document.querySelector('.login-shortcut').style.display = 'none'
        } else {
            document.querySelector('.login-shortcut').style.display = 'initial'
        }
        if(this.props.name) {
            const title = this.props.name
            document.querySelector(`.${title}`).classList.add('bottom-border')
        }
    }

    componentWillUnmount() {
        if(this.props.name) {
            const title = this.props.name
            document.querySelector(`.${title}`).classList.remove('bottom-border')
        }
    }

    redirect = (url) => {
        this.props.history.push(url)
    }

    render() {
        return (
            <nav className = 'navbar is-fixed-top has-shadow'>
                <div className = 'navbar-brand' style = {{display: 'flex', flexDirection: 'row'}}>
                    <div className = 'navbar-item is-hidden-touch'>                            <img style = {{cursor: 'pointer'}} onClick = {() => this.redirect('/')} className = 'logo' src = {Logo} alt = "Samhita '20 Logo"/>
                    </div>
                    <div className = 'navbar-item is-hidden-desktop' style = {{alignSelf: 'flex-start', flexBasis: '80%'}}>
                        <img style = {{cursor: 'pointer'}} onClick = {() => this.redirect('/')} className = 'logo' src = {Logo} alt = "Samhita '20 Logo"/>
                    </div>
                    <div className = 'navbar-item login-shortcut is-hidden-tablet' style = {{cursor: 'pointer', justifySelf: 'center', alignSelf: 'center'}} onClick = {() => this.props.history.push('/login')}>
                        <FontAwesomeIcon className = 'is-size-3' style = {{marginLeft: 'auto', marginRight: 'auto'}} icon = {faSignInAlt} color = 'gray'/>
                    </div>
                </div>
                <div className = 'navbar-menu is-active'>
                    <div className = 'navbar-end' style = {{display: 'flex'}}>
                        <div className = 'navbar-item menu-item menu-item-first has-text-centered is-uppercase home' onClick = {() => this.redirect('/')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faHome} size = 'sm'/>
                            </span>
                            home
                        </div>
                        <div className = 'navbar-item menu-item menu-item has-text-centered is-uppercase event' onClick = {() => this.redirect('/events')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faCalendarDay} size = 'sm'/>
                            </span>
                            events
                        </div>
                        <div className = 'navbar-item menu-item has-text-centered is-uppercase workshop' onClick = {() => this.redirect('/workshops')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faChalkboardTeacher} size = 'sm' />
                            </span>
                            workshops
                        </div>
                        <div className = 'navbar-item menu-item has-text-centered is-uppercase account' onClick = {() => this.redirect('/login')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faUser} size = 'sm' />
                            </span>
                            account
                        </div>
                        <div className = 'navbar-item menu-item menu-item-last has-text-centered is-uppercase contact' onClick = {() => this.redirect('/contact')}>
                            <span className = 'navbar-icon'>
                                <FontAwesomeIcon icon = {faMobileAlt} size = 'sm' />
                            </span>
                            contact
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}   

export default withRouter(Navbar)