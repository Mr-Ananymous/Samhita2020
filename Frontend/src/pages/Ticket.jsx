import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import AES from 'crypto-js/aes'
import AOS from 'aos'
import Scroll from 'react-scroll'
import { Spin, Icon, notification, Radio } from 'antd'
import RadioGroup from 'antd/lib/radio/group'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CheckoutImage from '../assets/Checkout.png'

class Ticket extends Component {

    constructor() {
        super()
        this.state = {
            userId : '',
            isLoading: false,
            data: '',
            originalId: '', 
            amount: '',
            userData: '',
			ticketBought: false,
			radio: ''
        }
    }

    componentWillMount() {
        const isLogged = localStorage.getItem('loggedIn')
        if(isLogged === 'true') {
            return
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        const scroll = Scroll.animateScroll
        scroll.scrollToTop({
            duration: 100
        })
        AOS.init({
            delay: 150,
            duration: 300,
            once: true
		})
        const paymentObject = {
            s1: 'dl*',
            m1: 'wb%',
            e1: 'yo@',
            i1: 'wb%',
            p1: 'qp-',
            a1: 'yo@'
        }
        const encryptedId = this.props.match.params.id
        const originalId = encryptedId.substr(5,2)
        const amount = paymentObject[originalId]
        this.setState({ 
            originalId: originalId,
            amount: amount
		})
        const userId = localStorage.getItem('id')
        this.setState({ isLoading: true, userId: userId }, () => {
            axios.post('https://samhita-backend.herokuapp.com/details', {
                userid: userId
            }).then(res => {
                this.setState({ userData: res.data })
                const isPaid = res.data.status
                if(isPaid === 0) {
                    this.setState({
                        isLoading: false                        
                    })
                    return
                } else if(isPaid === 1) {
                    if (originalId === 's1') {
                        this.setState({
                            isLoading: false,
                            ticketBought: true
                        })
                    } else {
                        this.setState({
                            isLoading: false
                        })
                    }
                }
            }).catch(err => {
                this.setState({isLoading: false})
                console.log(err.message)
                notification.error({
                    message: 'Oops',
                    description: 'An error occurred. Try again',
                    placement: 'topRight',
                    duration: 3,
                    top: 90,
                    className: 'notification',
                    onClose: this.props.history.goBack()
                })
            })
        })
        if(originalId === 's1') {
            if(this.state.ticketBought) {
                notification.info({
                    message: 'Slots changed!',
                    description: 'Please note that Placement Training Workshop is available in the slot 1 PM - 4:30 PM.',
                    placement: 'topRight',
                    duration: 0,
                    top: 10,
                    style: {
                        backgroundColor: 'white',
                        fontWeight: 'bold',
                        fontFamily: 'Lato'
                    }
                })
            }
		}
	}
	
	onRadioChange = e => {this.setState({ radio: e.target.value })}

    handlePurchase = () => {
		let { amount, userId, originalId, radio } = this.state
		const userID = userId.toString()
		const appendedString = `250z${userID}`
		let encryptedString = AES.encrypt(appendedString, 'firebase')
		let firstPart = encryptedString.toString().substr(0,3)
		let remainingPart = encryptedString.toString().substr(3)
		if(originalId === 's1') {
			if(!radio) {
				notification.warning({
					message: 'Oops',
					description: 'You need to choose the purpose of buying your Samhita ticket!',
					placement: 'topRight',
					duration: 3,
					style: {
						backgroundColor: 'white',
						fontWeight: 'bold',
						fontFamily: 'Lato'
					}
				})
			} else {
				document.querySelector('.purchase-button').classList.add('is-loading')
				document.querySelector('.purchase-button').disabled = true
				let samhitaString
				if(radio === 1) {
					samhitaString = `${firstPart}${amount}${remainingPart}${userID}s9`
				} else if(radio === 2) {
					samhitaString = `${firstPart}${amount}${remainingPart}${userID}${originalId}`
				} 
				window.location.assign(`https://samhita-backend.herokuapp.com/paywithcashfree?redirect=${samhitaString}`)
			}
		} else {
			document.querySelector('.purchase-button').classList.add('is-loading')
			document.querySelector('.purchase-button').disabled = true
			let samhitaString = `${firstPart}${amount}${remainingPart}${userID}${originalId}` 
			window.location.assign(`https://samhita-backend.herokuapp.com/paywithcashfree?redirect=${samhitaString}`)
		}
    }

    render() {
        const { isLoading, ticketBought, originalId, userData, radio } = this.state
        const loadingIcon = <Icon type="loading" style={{ fontSize: 40 }} spin/>
        return (
            <React.Fragment>
                <Helmet>
                    <title>Samhita 20 - Checkout</title>
                </Helmet>
                <section className = 'section' style = {{minHeight: '100vh', backgroundColor: '#FCC156'}}>
                    <div data-aos = 'fade-down' className = 'title is-3 is-lato has-text-centered'>
                        Checkout 
                        <span className = 'icon' style = {{marginLeft: '10px'}}>
                            <FontAwesomeIcon icon = {faShoppingCart} size = 'sm' />
                        </span>
                    </div>
                    {
                        isLoading ? 

                        <div className = 'container has-text-centered buy-ticket-container'>
                            <div className = 'checkout-image'>
                                <LazyLoadImage src = {CheckoutImage} effect = 'blur'/>
                            </div>
                            <div className = 'field'>
                                <div className = 'control has-text-centered' style = {{marginTop: '20px'}}>
                                    <Spin indicator = {loadingIcon} />
                                </div>
                            </div>
                        </div>
                        

                        :

                        ticketBought ? 

                        <div className = 'container has-text-centered buy-ticket-container'>
                            <div className = 'checkout-image'>
                                <LazyLoadImage src = {CheckoutImage} effect = 'blur'/>
                            </div>
                            <div className = 'title is-5 has-text-centered is-lato' style = {{marginTop: '17px'}}>
                                You have already purchased your Samhita '20 ticket.
                            </div>
                            <button className = 'button is-rounded is-lato has-text-weight-medium' style = {{backgroundColor: 'white', border: '1.5px solid #0071BC', color: '#0071BC'}} onClick = {() => this.props.history.goBack()}>
                                Go back
                            </button>
                        </div>

                        :

                        <div className = 'container has-text-centered buy-ticket-container'>
                            {
                                originalId === 's1' || originalId === 'm1' || originalId === 'e1' || originalId === 'i1' || originalId === 'p1' || originalId === 'a1' ?

                                <div className = 'title is-3 has-text-link is-lato has-text-centered'>Just one step away!</div>
                               
                                :

                                null
                            }
                            <div className = 'columns' style = {{display: 'flex', flexDirection: 'column'}}>
                                <div className = 'column' style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <div className = 'checkout-image'>
                                        <LazyLoadImage src = {CheckoutImage} effect = 'blur'/>
                                    </div>
                                </div>
                                <div className = 'column is-narrow'>
                                    <table className = 'table is-lato is-hoverable is-fullwidth'>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td className = 'has-text-right'>{userData.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Samhita ID</th>
                                                <td className = 'has-text-right'>{userData.userid}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td className = 'has-text-right'>{userData.mailid}</td>
                                            </tr>
                                            <tr>
                                                <th>Mobile</th>
                                                <td className = 'has-text-right'>+91 {userData.phone}</td>
                                            </tr>
                                            <tr>
                                                <th>College</th>
                                                <td className = 'has-text-right'>{userData.college}</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td className = 'has-text-right'>{userData.dept}</td>
                                            </tr>
                                            <tr>
                                                <th>Year</th>
                                                <td className = 'has-text-right'>{userData.year}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <table className = 'table checkout-table is-lato is-size-5 is-bordered is-fullwidth is-striped'>
                                <tbody style = {{borderRadius: '20px'}}>
                                    {
                                        originalId === 's1' ?

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Samhita '20 ticket</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Admit: 1</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Price: ₹ 250</th>
                                        </tr>
                                        
                                        :

                                        originalId === 'm1' ?

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Machine Learning Workshop</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Admit: 1</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Price: ₹ 849</th>
                                        </tr>

                                        :

                                        originalId === 'e1' ?

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Ethical Hacking Workshop</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Admit: 1</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Price: ₹ 799</th>
                                        </tr>

                                        :

                                        originalId === 'i1' ?

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Artificial Intelligence Workshop</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Admit: 1</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Price: ₹ 849</th>
                                        </tr>

                                        :

                                        originalId === 'p1' ?

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Python Programming Workshop</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Admit: 1</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Price: ₹ 749</th>
                                        </tr>

                                        :

                                        originalId === 'a1' ?

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Android App Development Workshop</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Admit: 1</th>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Price: ₹ 799</th>
                                        </tr>

                                        :

                                        <tr className = 'checkout-detail-row'>
                                            <th style = {{border: '1.5px solid #0071BC'}} className = 'has-text-centered'>Not available</th>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            {
                                originalId === 's1' ?

								<>
									<div className = 'columns'>
                                        <div className = 'column'>
											<div className = 'title is-6 has-text-centered has-text-link is-lato'>What do you wish to attend on buying Samhita '20 ticket?</div>
                                            <RadioGroup className = 'has-text-left is-lato' onChange = {this.onRadioChange} value = {radio}>
                                                <Radio style = {{display: 'block', height: '30px'}} value={2}>
                                                    <span className = 'is-size-6'>Events + Paper Presentation</span>
                                                </Radio>
                                            </RadioGroup>
											<div className = 'title is-6 has-text-centered is-lato' style = {{marginTop: '1.5rem'}}>Note: Placement training workshop seats are sold out.</div>
                                        </div>
                                    </div>
									<button className = 'button is-rounded is-link is-lato has-text-weight-medium purchase-button' style = {{color: 'white', marginRight: '10px'}} onClick = {this.handlePurchase}>
										Buy ticket
									</button>
								</>

                                :

                                originalId === 'm1' || originalId === 'e1' || originalId === 'i1' || originalId === 'p1' || originalId === 'a1' ?

                                <button className = 'button is-rounded is-link is-lato has-text-weight-medium purchase-button' style = {{color: 'white', marginRight: '10px'}} onClick = {this.handlePurchase}>
                                    Buy ticket
                                </button>

                                :

                                null

                            }
                            <button className = 'button is-rounded is-lato has-text-weight-medium' style = {{backgroundColor: 'white', border: '1.5px solid #0071BC', color: '#0071BC'}} onClick = {() => this.props.history.goBack()}>
                                Go back
                            </button>
                            <div className = 'field' style = {{marginTop: '1.5rem'}}>
                                <div className = 'control'>
                                    <div className = 'subtitle is-lato is-6 has-text-centered'>
                                        <strong className = 'has-text-danger'>
                                            Note: UPI payments are not advised, kindly choose other payment methods such as debit card, credit card or netbanking for successful payments without any issues.
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Ticket)
