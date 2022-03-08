import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ErrorImage from '../assets/ErrorImage.png'
import { withRouter} from 'react-router-dom'

class NotFound extends Component {

    componentDidMount() {
        AOS.init({
            duration: 750,
            delay: 1000
        })
    }

    render() {
        const styles = {
            outerContainer : {
                position: 'absolute',
                width: '100%',
                height: '100% ',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            innerContainer: {
                position: 'relative',
                width: '60%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'white',
                boxShadow: '0px 0px 23px -4px rgba(0,0,0,0.75)',
                textAlign: 'center'
            },
            errorImage: {
                height: 'auto',
                width: '65%',
                alignSelf: 'center',
                justifyContent: 'center'
            },
            caption: {
                marginBottom: '20px',
                marginLeft: '5px',
                marginRight: '10px',
                fontSize: '15pt',
                fontWeight: 500
            },
            button: {
                color: 'white',
                fontWeight: '500',
                fontSize: '13pt',
                borderColor: '#405FD3',
                borderRadius: 25,
                width: '90px',
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10
            }
        }
        const { outerContainer, innerContainer, errorImage, caption, button } = styles
        return (
            <React.Fragment>
                <Helmet>
                    <title>Page not found</title>
                </Helmet>
                <div className = 'outer-container-404' style = {outerContainer}>
                    <div className = 'inner-container-404' data-aos = 'zoom-in' style = {innerContainer}>
                        <div style = {errorImage} className = 'error-404-image'>
                            <LazyLoadImage src = {ErrorImage} alt = '404 Error' effect = 'blur' />    
                        </div>    
                        <div className = 'caption is-unselectable' style = {caption}>Oops! The page you are looking for is either not found or removed.</div>
                        <button className = 'button is-link mobile-404-button has-text-centered' style = {button} onClick = {() => this.props.history.goBack()}>
                            Back
                        </button> 
                    </div>     
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(NotFound)