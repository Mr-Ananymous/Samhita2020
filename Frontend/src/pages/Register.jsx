import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import AOS from 'aos'
import Scroll from 'react-scroll'
import Navbar from '../components/Navbar'
import { notification, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import RegisterImage from '../assets/Register.png'
import UniqLogo from '../assets/UniqLogo.jpg'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            college: '',
            department: '',
            year: '',
            password: '',
            confirmPassword: '',
            isModalVisible: false,
            isPrivacyModalVisible: false,
            isLoading: false
        }
    }

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
        const isLogged = localStorage.getItem('loggedIn')
        if(isLogged === 'true') {
            this.props.history.replace('/account')
        } else {
            return
        }
    }

    handleMouseDown = element => {
        document.getElementById(element).type = 'text'
    }

    handleMouseUp = element => {
        document.getElementById(element).type = 'password'
    }

    handleName = name => {
        this.setState({name: name.target.value})
    }

    handleEmail = email => {
        this.setState({email: email.target.value})
    }

    handleMobile = mobile => {
        this.setState({mobile: mobile.target.value})
    }

    handleCollege = college => {
        this.setState({college: college.target.value})
    }

    handleDepartment = department => {
        this.setState({department: department.target.value})
    }

    handleYear = year => {
        this.setState({year: year.target.value})
    }

    handlePassword = password => {
        this.setState({password: password.target.value})
    }

    handleConfirmPassword = confirmPassword => {
        this.setState({confirmPassword: confirmPassword.target.value})
    }

    handleKeyPress = e => {
        if(e.keyCode === 13) {
            this.handleRegister()
        }
    }

    handleRegister = () => {
        const { name, email, mobile, college, department, year, password, confirmPassword } = this.state
        if(name && email && mobile && college && department && year && password && confirmPassword) {
            if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                if(mobile.match(/^\d{10}$/)) {
                    if(password === confirmPassword) {
                        this.setState({ isLoading: true }, () => {
                            axios.post('https://samhita-backend.herokuapp.com/register', {
                                name: name,
                                mailid: email.toLowerCase(),
                                contactnum: mobile,
                                pass: password,
                                collegename: college,
                                dept: department,
                                year: parseInt(year) 
                            }).then(res => {
                                this.setState({ 
                                    name: '',
                                    email: '',
                                    mobile: '',
                                    college: '',
                                    department: '',
                                    year: '',
                                    password: '',
                                    confirmPassword: '',
                                    isLoading: false 
                                })
                                if(res.data.status === 'success') {
                                    setTimeout(() => this.props.history.replace('/login'), 3000)
                                    notification.success({
                                        message: 'Yay!',
                                        description: 'Registration is successful!',
                                        placement: 'topRight',
                                        duration: 3,
                                        top: 90,
                                        style : {
                                            color: 'rgb(0, 110, 0)'
                                        },
                                        className: 'notification',
                                        onClose: this.props.history.replace('/login')                                
                                    })
                                } else if(res.data.status === 'failure') {
                                    setTimeout(() => this.props.history.replace('/login'), 3000)
                                    notification.info({
                                        message: 'Attention!',
                                        description: 'It seems that you have already registered. Please login',
                                        placement: 'topRight',
                                        duration: 3,
                                        top: 90,
                                        className: 'notification',
                                        onClose: this.props.history.replace('/login')                                
                                    })
                                }
                            }).catch(err => {
                                this.setState({ isLoading: false })
                                console.log(err.message)
                                notification.error({
                                    message: 'Oops!',
                                    description: 'An error occurred. Try again',
                                    placement: 'topRight',
                                    duration: 3,
                                    top: 90,
                                    style : {
                                        color: 'rgb(207, 0, 0)'
                                    },
                                    className: 'notification'
                                })
                            })
                        })
                    }
                    else {
                        notification.warn({
                            message: 'Not yet!',
                            description: 'Passwords mismatch. Please check and try again',
                            placement: 'topRight',
                            duration: 3,
                            top: 90,
                            className: 'notification'
                        })
                    }
                } else {
                    notification.warn({
                        message: 'Oops!',
                        description: 'Enter a valid mobiler number',
                        placement: 'topRight',
                        duration: 3,
                        top: 90,
                        className: 'notification'
                    })
                }
            } else {
                notification.warn({
                    message: 'Oops!',
                    description: 'Enter a valid e-mail address',
                    placement: 'topRight',
                    duration: 3,
                    top: 90,
                    className: 'notification'
                })
            }
        } else {
            notification.warn({
                message: 'Oops!',
                description: 'Please fill in all the fields',
                placement: 'topRight',
                duration: 3,
                top: 90,
                className: 'notification'
            })
        }
    }

    setModalVisible = isModalVisible => {this.setState({ isModalVisible })}

    setPrivacyModalVisible = isPrivacyModalVisible => {this.setState({ isPrivacyModalVisible })}

    render() {
        const options = [
            { 'id': 1, 'year': 1 },
            { 'id': 2, 'year': 2},
            { 'id': 3, 'year': 3},
            { 'id': 4, 'year': 4}
        ]
        const { name, email, mobile, college, department, password, confirmPassword, isModalVisible, isPrivacyModalVisible, isLoading } = this.state
        return (
            <div>
                <Helmet>
                    <title>Samhita 20 - Sign up</title>
                </Helmet>
                <Navbar name = 'account'/>
                <section className = 'section register-outer-container'>
                    <div data-aos = 'fade-down' className = 'container register-inner-container'>
                        <div className = 'columns'>
                            <div className = 'column' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div className = 'register-picture has-text-centered'>
                                    <LazyLoadImage src = {RegisterImage} alt = 'Register' effect = 'blur' />
                                    <LazyLoadImage src = {UniqLogo} alt = 'Uniq Technologies' effect = 'blur' />
                                </div>
                            </div>
                            <div className = 'column'>
                                <section className = 'section'>
                                    <div className = 'container register-form-container'>
                                        <div className = 'register-form'>
                                            <div className = 'title is-3 is-lato has-text-danger'>
                                                Sign up
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {name} onChange = {this.handleName} />
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded'  value = {email} onChange = {this.handleEmail} />
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Mobile
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field has-addons'>
                                                <p className = 'control'>
                                                    <a className = 'button is-static' style = {{borderRadius: '20px 0px 0px 20px', paddingRight: '5px'}}>+91</a>
                                                </p>
                                                <div className = 'control is-expanded'>
                                                    <input type = 'text' className = 'input is-rounded mobile-input' value = {mobile} onChange = {this.handleMobile}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        College
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {college} onChange = {this.handleCollege}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Department
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <input type = 'text' className = 'input is-rounded' value = {department} onChange = {this.handleDepartment}/>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Year
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                   <div className = 'select is-rounded is-fullwidth'>
                                                        <select onChange={this.handleYear}>
                                                            <option style = {{paddingTop: '10px'}} disabled selected hidden>Select</option>
                                                            {options.map((value)=>{
                                                                return(
                                                                    <option key={value.id}>{value.year}</option>
                                                                )
                                                            })}
                                                        </select>
                                                   </div>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control' style = {{display: 'flex'}}>
                                                    <input id = 'password' type = 'password' className = 'input is-rounded' value = {password} onChange = {this.handlePassword} style = {{paddingRight: 35}}/>
                                                    <span onMouseDown = {() => {this.handleMouseDown('password')}} onMouseUp = {() => {this.handleMouseUp('password')}} onTouchStart = {() => {this.handleMouseDown('password')}} className = 'icon' style = {{cursor: 'pointer', position: 'absolute', right: 10, top: 8}}>
                                                        <FontAwesomeIcon icon = {faEye} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    <label className = 'label is-size-5 is-lato'>
                                                        Confirm password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control' style = {{display: 'flex'}}>
                                                    <input id = 'confirm-password' type = 'password' className = 'input is-rounded' value = {confirmPassword} onKeyDown = {this.handleKeyPress} onChange = {this.handleConfirmPassword} style = {{paddingRight: 35}}/>
                                                    <span onMouseDown = {() => {this.handleMouseDown('confirm-password')}} onMouseUp = {() => {this.handleMouseUp('confirm-password')}} onTouchStart = { () => {this.handleMouseDown('confirm-password')}} className = 'icon' style = {{cursor: 'pointer', position: 'absolute', right: 10, top: 8}}>
                                                        <FontAwesomeIcon icon = {faEye} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control'>
                                                    {
                                                        isLoading ? 

                                                        <button className = 'button is-rounded is-fullwidth is-danger is-lato has-text-weight-semibold register-button is-loading' disabled>
                                                            Register
                                                        </button>

                                                        :
                                                        
                                                        <button className = 'button is-rounded is-fullwidth is-danger is-lato has-text-weight-semibold register-button' onClick = {this.handleRegister}>
                                                            Register
                                                        </button>

                                                    }
                                                </div>
                                            </div>
                                            <div className = 'field'>
                                                <div className = 'control policy' style = {{margin: '2rem', marginBottom: '-1rem'}}> 
                                                    <div className = 'subtitle is-lato is-6'>
                                                        By signing up, you accept Samhita 20's <span className = 'has-text-link' style = {{cursor: 'pointer'}} onClick = {() => this.setModalVisible(true)}>Terms & conditions</span> and <span className = 'has-text-link' style = {{cursor: 'pointer'}} onClick = {() => this.setPrivacyModalVisible(true)}>Privacy policy</span>, and agree to receive occasional emails and text message updates about Samhita 2020
                                                    </div>
                                                </div>
                                                <Modal className = 'is-lato' width = '90%' title = 'Terms & Conditions' centered visible = {isModalVisible} onOk = {() => this.setModalVisible(false)} closable = {false} okButtonProps = {{shape: 'round', type: 'danger'}} okText = 'Accept and close' cancelButtonProps = {{hidden: true}}>
                                                    <p className = 'title is-4'>Welcome to Samhita 20!</p>

                                                    <p>These terms and conditions outline the rules and regulations for the use of Samhita 20's Website, located at <mark>https://samhita.org.in</mark>.</p>

                                                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Samhita 20 if you do not agree to take all of the terms and conditions stated on this page. </p>

                                                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>Cookies</strong></h3>

                                                    <p>We employ the use of cookies. By accessing Samhita 20, you agreed to use cookies in agreement with the Samhita 20's Privacy Policy.</p>

                                                    <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>License</strong></h3>

                                                    <p>Unless otherwise stated, Samhita 20 and/or its licensors own the intellectual property rights for all material on Samhita 20. All intellectual property rights are reserved. You may access this from Samhita 20 for your own personal use subjected to restrictions set in these terms and conditions.</p>

                                                    <p>You must not:</p>
                                                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                                                        <li>Republish material from Samhita 20</li>
                                                        <li>Sell, rent or sub-license material from Samhita 20</li>
                                                        <li>Reproduce, duplicate or copy material from Samhita 20</li>
                                                        <li>Redistribute content from Samhita 20</li>
                                                    </ul>

                                                    <p>This Agreement shall begin on the date hereof.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>Hyperlinking to our Content</strong></h3>

                                                    <p>The following organizations may link to our Website without prior written approval:</p>

                                                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                                                        <li>Government agencies;</li>
                                                        <li>Search engines;</li>
                                                        <li>News organizations;</li>
                                                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                                                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                                                    </ul>

                                                    <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                                                    <p>We may consider and approve other link requests from the following types of organizations:</p>

                                                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                                                        <li>commonly-known consumer and/or business information sources;</li>
                                                        <li>dot.com community sites;</li>
                                                        <li>associations or other groups representing charities;</li>
                                                        <li>online directory distributors;</li>
                                                        <li>internet portals;</li>
                                                        <li>accounting, law and consulting firms; and</li>
                                                        <li>educational institutions and trade associations.</li>
                                                    </ul>

                                                    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Samhita 20; and (d) the link is in the context of general resource information.</p>

                                                    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

                                                    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Samhita 20. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                                                    <p>Approved organizations may hyperlink to our Website as follows:</p>

                                                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                                                        <li>By use of our corporate name; or</li>
                                                        <li>By use of the uniform resource locator being linked to; or</li>
                                                        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                                                    </ul>

                                                    <p>No use of Samhita 20's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>iFrames</strong></h3>

                                                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>Reservation of Rights</strong></h3>

                                                    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>Removal of links from our website</strong></h3>

                                                    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                                                    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                                                    <h3 style = {{margin: '1rem 0rem'}}><strong>Disclaimer</strong></h3>

                                                    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                                                    <ul style = {{listStyleType: 'square', marginLeft: '15px'}}>
                                                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                                                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                                                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                                                    </ul>

                                                    <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

                                                    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                                                </Modal>
                                                <Modal className = 'is-lato' width = '90%' title = 'Privacy policy' centered visible = {isPrivacyModalVisible} onOk = {() => this.setPrivacyModalVisible(false)} closable = {false} okButtonProps = {{shape: 'round', type: 'danger'}} okText = 'Okay' cancelButtonProps = {{hidden: true}}>
                                                    <p>At Samhita 20, accessible from <mark>https://samhita.org.in</mark>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Samhita 20 and how we use it.</p>

                                                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Log Files</strong></h2>

                                                    <p>Samhita 20 follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Cookies and Web Beacons</strong></h2>

                                                    <p>Like any other website, Samhita 20 uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Privacy Policies</strong></h2>

                                                    <p>You may consult this section to find the Privacy Policy for each of the advertising partners of Samhita 20.</p>

                                                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Samhita 20, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                                                    <p>Note that Samhita 20 has no access to or control over these cookies that are used by third-party advertisers.</p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Third Party Privacy Policies</strong></h2>

                                                    <p>Samhita 20's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                                                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. <a href = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies' target = '_blank' rel = 'noreferrer noopener'>What Are Cookies?</a></p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Children's Information</strong></h2>

                                                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                                                    <p>Samhita 20 does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Online Privacy Policy Only</strong></h2>

                                                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Samhita 20. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                                                    <h2 style = {{margin: '1rem 0rem'}}><strong>Consent</strong></h2>

                                                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                                                </Modal>
                                            </div>
                                            <div className = 'box login-redirect-box'>
                                                <div className = 'field'>
                                                    <div className = 'control'>
                                                        <div className = 'subtitle is-6 has-text-centered is-lato has-text-weight-semibold' onClick = {() => this.props.history.push('/login')}>
                                                            Have an account? <a>Login</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Register)
