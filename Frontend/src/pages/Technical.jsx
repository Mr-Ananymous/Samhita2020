import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import Scroll from 'react-scroll'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faCloudDownloadAlt, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Tooltip, Drawer } from 'antd'
import Navbar from '../components/Navbar'
import Event from '../components/Event'
import Hackathon from '../assets/Events/Hackathon.png'
import HelloWorld from '../assets/Events/Helloworld.png'
import PaperPresentation from '../assets/Events/Paperpresentation.png'
import OSPC from '../assets/Events/Ospc.png'
import Codegolfing from '../assets/Events/Codegolfing.png'
import CodeObfus from '../assets/Events/Codeobfus.png'
import ReverseCoding from '../assets/Events/Reversecoding.png'
import TechTravel from '../assets/Events/Techtravel.png'
import UnboxImage from '../assets/Events/Unbox.png'
import DcodeImage from '../assets/Events/Dcode.png'
import AcidityImage from '../assets/Events/Acidity.png'
import OLPC from '../assets/Events/Olpc.png'
import StreetCoding from '../assets/Events/Streetcoding.png'
import WebDevImage from '../assets/Events/Webdev.png'
import UIUXImage from '../assets/Events/UIUX.png'
import PythoniteImage from '../assets/Events/Pythonite.png'
import CoffeeWithJavaImage from '../assets/Events/Coffeewithjava.png'

class Technical extends Component {

    constructor() {
        super()
        this.state = {
            isDrawerVisible: false
        }
    }

    setDrawerVisible = isDrawerVisible => this.setState({ isDrawerVisible })

    onDrawerClose = () => this.setState({ isDrawerVisible: false })

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
            <React.Fragment>
                <Helmet>
                    <title>Samhita 20 - Technical events</title>
                </Helmet>
                <Navbar name = 'event'/>
                <section className = 'section' style = {{backgroundColor: 'rgba(199, 44, 65, 0.863)', minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className = 'container events-outer-container'>
                        <div data-aos = 'fade-up'>
                            <div className = 'title is-3 is-lato has-text-centered' style = {{marginBottom: '55px'}}>
                                Technical events
                                <Tooltip placement = 'right' title = 'Non-technical events' >
                                    <span className = 'icon event-navigation-icon-right' onClick = {() => this.props.history.replace('/events/non-technical')}>
                                        <FontAwesomeIcon icon = {faArrowAltCircleRight} />
                                    </span>
                                </Tooltip>
                            </div>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {Hackathon} 
                                    title = 'Hackathon' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    fullTime
                                    size = {2} 
                                    description = "Bring your skills to the fore and build an innovative solution to a real-time problem. Show your clever skills and build your own software."
                                    contactName = 'Aswin'
                                    contactNumber = {<><a href = 'tel:+917200792223'>+91 7200792223</a></>}
                                >
                                    <>
                                        <ul>
                                            <li>• Problem statements are given at the end of rules.</li>
                                            <li>• Purchase of Samhita ticket for entry is mandatory.</li>
                                            <li>• Time for solving the problems are between 25<sup>th</sup> and 30<sup>th</sup> of January 2020.</li>
                                            <li>• The shortlisted teams must prepare a PPT and present it on January 31<sup>st</sup> at Samhita '20.</li>
                                        </ul>
                                        <button className = 'button is-lato is-link is-rounded' style = {{margin: '12px 0px'}} onClick = {() => this.setDrawerVisible(true)}>Problem statements</button>
                                        <Drawer                                                  
                                            className = 'is-lato'
                                            title="Problem statements for Hackathon"
                                            width = '90%'
                                            placement = 'left'
                                            closable={true}
                                            onClose={this.onDrawerClose}
                                            visible={this.state.isDrawerVisible}
                                            >
                                            <p style = {{marginBottom: '1rem'}}><strong className = 'is-size-6'>Note: Participants can solve as much as problems as they can. The more they solve the higher chance of getting shortlisted.</strong></p>
                                            <p><strong className = 'is-size-5 has-text-danger'>Blockchain</strong></p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                            Imagine a scenario, a farmer wants to claim insurance for his crops that was
                                            affected by drought or flood. Using the past weather data of the particular
                                            period to check the validation of the insurance and create a smart contract for
                                            the insurance claim using blockchain. You can use some mock data to create the
                                            prototype. Add your own contribution to the problem to get additional points.
                                            </p>
                                            <p style = {{margin: '10px 0px'}}>Submissions will be evaluated on the following, not in any particular order:</p>
                                            <ul>
                                                <li>● Working UI, Blockchain and smart contract implementation.</li>
                                                <li>● It works end to end!</li>
                                                <li>● Accuracy of drought detection.</li>
                                                <li>● User experience.</li>
                                                <li>● Innovation.</li>
                                                <li>● Scale and performance.</li>
                                                <li>● Extensibility.</li>
                                                <li>● Teamwork.</li>
                                            </ul>
                                            <hr/>
                                            <p style = {{marginTop: '1rem'}}>
                                                <strong className = 'is-size-5 has-text-danger'>
                                                    Machine Learning
                                                </strong>
                                            </p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                Predict number of upvotes (Stackoverflow)
                                            </p>
                                            <p style = {{margin: '1rem 0rem'}}>
                                            Crowdsourced online content platforms have a constant need to identify the best content in
                                            time to appropriately promote and thereby improve the engagement at the website. This
                                            challenge involves a similar problem of predicting the upvote count for a query posted and
                                            identify the parameters that affect it the most.                             </p>
                                            <p style = {{fontWeight: 'bold', margin: '10px 0px'}}>Rules:</p>
                                            <ul>
                                                <li>● You are free to use any tool and machine you have rightful access to.</li>
                                                <li>● You can use any programming language or statistical software.</li>
                                                <li>● You are free to use solution checker as many times as you want.</li>           
                                            </ul>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                Problem statement:
                                            </p>
                                            <p style = {{margin: '10px 0px'}}>
                                                An online question and answer platform has hired you as a data scientist to identify the best
                                                question authors on the platform. This identification will bring more insight into increasing
                                                the user engagement. Given the tag of the question, number of views received, number of
                                                answers, username and reputation of the question author, the problem requires you to predict
                                                the upvote count that the question will receive.
                                            </p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                Data dictionary:
                                            </p>
                                            <table className = 'table is-bordered'>
                                                <thead>
                                                    <th>Variable</th>
                                                    <th>Definition</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ID</td>
                                                        <td>Question ID</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tag</td>
                                                        <td>Anonymised tags representing question category</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Reputation</td>
                                                        <td>Reputation score of question author</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Answers</td>
                                                        <td>Number of times question has been answered</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Username</td>
                                                        <td>Anonymised user id of question author</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Views</td>
                                                        <td>Number of times question has been viewed</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Upvotes</td>
                                                        <td>(Target) Number of upvotes for the question</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                Evaluation metric:
                                            </p>
                                            <p style = {{margin: '5px 0px'}}>The evaluation metric for this competition is <strong>RMSE (Root Mean Squared Error)</strong></p>
                                            <p className = 'is-size-6' style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                <a href = 'https://drive.google.com/folderview?id=1jL3Wxi343ZISwlLX9tZj32kDK2v9Fj66' target = '_blank' rel = 'noreferrer noopener'>
                                                    You can find sample datasets here
                                                </a>
                                            </p>
                                            <hr/>
                                            <p style = {{marginTop: '1rem'}}>
                                                <strong className = 'is-size-5 has-text-danger'>
                                                    Deep Learning
                                                </strong>
                                            </p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                You are given a large class of flowers, 102 to be precise. Build a flower classification model which
                                                is discriminative between classes but can correctly classify all flower images belonging to the
                                                same class. There are a total of 20549 (train + test) images of flowers. Predict the category of
                                                the flowers present in the test folder with good accuracy.
                                            </p>
                                            <p style = {{margin: '10px 0px'}}>The data folder consists of 2 folders and 3 CSV files.</p>
                                            <ul>
                                                <li>● train - Contains 18540 images from 102 categories of flowers.</li>
                                                <li>● test  - Contains 2009 images.</li>
                                                <li>● train.csv - Contains 2 columns and 18541 rows (including the headers), which consists of image id and the true label for each of the images in the train folder.</li>
                                                <li>● test.csv - Contains the image id for the images present in test folder for which the true label needs to be predicted.</li>
                                            </ul>
                                            <p className = 'is-size-6' style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                <a href = 'https://he-public-data.s3-ap-southeast-1.amazonaws.com/HE_Challenge_data.zip' rel = 'noreferrer noopener'>
                                                    <span className = 'icon' style = {{position: 'relative', top: '1px', marginRight: '4px'}}>
                                                        <FontAwesomeIcon icon = {faCloudDownloadAlt} />
                                                    </span>
                                                    Download dataset (905MB)
                                                </a>
                                            </p>
                                            <hr/>
                                            <p style = {{marginTop: '1rem'}}>
                                                <strong className = 'is-size-5 has-text-danger'>
                                                    Open innovation
                                                </strong>
                                            </p>
                                            <p style = {{fontWeight: 'bold', margin: '1rem 0rem'}}>
                                                You are welcome to submit a creative novel project of your own too, other than the above. Grab your Samhita '20 ticket and submit your project now!
                                            </p>
                                            <hr/>
                                            <div className = 'has-text-centered'>
                                                <a href = 'https://forms.gle/Lm7x9orkxTUeB1ny9' rel = 'noopener noreferrer'>
                                                    <button className = 'button has-text-centered is-lato is-success is-rounded has-text-weight-semibold' onClick = {this.handleSubmit}>
                                                        <span>Submit your solutions</span>
                                                        <span className = 'icon'>
                                                            <FontAwesomeIcon icon = {faUpload}/>
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                        </Drawer>
                                    </>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {PaperPresentation} 
                                    title = 'Paper presentation' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    fullTime
                                    size = {3}
                                    description = "Research is exploring the unexplored and presenting a whole phenomenal idea to the world. Come to Samhita '20 and present your innovative ideas and win prizes upto 5K!"
                                    contactName = 'Sruthi'
                                    contactNumber = {<><a href = 'tel:+919840291913'>+91 9840291913</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• Paper must be in IEEE format.</li>
                                            <li>• Papers must be submitted to <a href = 'mailto: papers@samhita.org.in'>papers@samhita.org.in</a> before 28/01/2020</li>
                                            <li>• Mail should contain the unique Samhita ID received on purchase of Samhita '20 ticket.</li>
                                            <li>• Plagiarism of any kind is strictly prohibited.</li>
                                            <li style = {{marginTop: '10px'}}><strong>Note: One Samhita ticket is enough for participation of a team consisting three members. But only one certificate will be issued for the person who has purchased Samhita ticket (Certificate will contain the names of all three members). Seperate tickets should be bought for individual certificates.</strong></li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {HelloWorld} 
                                    title = '<Hello World/>' 
                                    date = {<><span>1<sup>st</sup> February, 2020</span></>}
                                    prelims = '9 AM - 12 PM'
                                    finals = '1 PM - 4:30 PM'
                                    size = {2} 
                                    onsite
                                    description = "For all the newcomers and rookies out there, Hello World is a special event for the first years. Start and build your career in programming here."
                                    contactName = 'Manoj Kumar'
                                    contactNumber = {<><a href = 'tel:+917448746107'>+91 7448746107</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise of maximum 2 members.</li>
                                            <li>• Preliminary round: Paper based.</li>
                                            <li>• Final round: Paper based.</li>
                                            <li>• Any programming language can be used.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {OSPC} 
                                    title = 'OSPC (OnSite Programming Contest)' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'OSPC will test the proficiency in cracking logics, framing algorithms and data structures.'
                                    contactName = 'Durairaj'
                                    contactNumber = {<><a href = 'tel:+919487376430'>+91 9487376430</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• First round will be a pen and paper round.</li>
                                            <li>• For the second round you will be asked to code on <a href = 'https://www.hackerrank.com/' target = '_blank' rel = 'noreferrer noopener'>hackerrank</a>.</li>
                                            <li>• Every team must have an hackerrank account.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {Codegolfing} 
                                    title = 'Code Golfing' 
                                    date= {<><span>1<sup>st</sup> February, 2020</span></>}
                                    prelims = '9 AM - 12 PM'
                                    finals = '1 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'The code with fewest amount of characters wins. The best solution is the one that has the fewest characters or fewest lines of code.'
                                    contactName = 'Manoj'
                                    contactNumber = {<><a href = 'tel:+918680919117'>+91 8680919117</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Paper based.</li>
                                            <li>• Programming languages allowed: C, C++, C#, Java, HTML, Python, JavaScript, R, MATLAB.</li>
                                            <li>• Internet access is not allowed.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {CodeObfus} 
                                    title = 'Code Obfuscation' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2}
                                    description = 'The technique of making the code extremely hard to read by others is called Code Obfuscation.'
                                    contactName = 'Abinaya'
                                    contactNumber = {<><a href = 'tel:+917358803408'>+91 7358803408</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {ReverseCoding} 
                                    title = 'Reverse Coding' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'Building the blocks backward. With the given input and the expected output, the code should be cracked. This event tests his/ her expertise in cracking patterns and rapid coding skills.'
                                    contactName = 'Ganesh Kumar'
                                    contactNumber = {<><a href = 'tel:+917845149635'>+91 7845149635</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Each team can comprise a maximum of 2 members.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• No use of any electronic gadgets.</li>
                                            <li>• Any programming language can be used.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {TechTravel} 
                                    title = 'Tech Travel' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'To code a series of problems with a powerful competition. More the speed, Closer the win.'
                                    contactName = 'Mohamed Adhil'
                                    contactNumber = {<><a href = 'tel:+919952567290'>+91 9952567290</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be many connected paths of questions leading to a same destination.</li>
                                            <li>• A candidate can choose any path to reach the final destination.</li>
                                            <li>• Each node in the connected graph of questions, has a separate weightage.</li>
                                            <li>• A candidate's total points is the highest aggregate of points along any path.</li>
                                            <li>• There will be 2 rounds. First round is eliminative.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {UnboxImage} 
                                    title = 'Unbox' 
                                    date = {<><span>1<sup>st</sup> February, 2020</span></>}
                                    prelims = '9 AM - 12 PM'
                                    finals = '1 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'Multiple choices to choose the problem. But with a twist of facing a penalty at the cost of the chosen problem being unsolved.'
                                    contactName = 'Sindhukavi'
                                    contactNumber = {<><a href = 'tel:+917305794164'>+91 7305794164</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• The candidate is allowed to swap upto 3 questions before answering one.</li>
                                            <li>• Both rounds are a rolling event where each candidate maximum gets to unbox for not more than given time limit.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {DcodeImage} 
                                    title = 'D-Code' 
                                    date = {<><span>1<sup>st</sup> February, 2020</span></>}
                                    prelims = '9 AM - 12 PM'
                                    finals = '1 PM - 4:30 PM'
                                    size = {2}
                                    description = 'Breaking the security. This event tests the Cryptography and Security Skills of the participants.'
                                    contactName = 'Abarna'
                                    contactNumber = {<><a href = 'tel:+918610341976'>+91 8610341976</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Paper based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite 
                                    avatar = {AcidityImage} 
                                    title = 'Acidity' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'SQL queries, ER Diagrams, Normalisation and so forth.'
                                    contactName = 'Sridharan'
                                    contactNumber = {<><a href = 'tel:+918939195177'>+91 8939195177</a></>} 
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {OLPC} 
                                    title = 'OLPC (OnLine Programming Contest)' 
                                    size = 'Solo' 
                                    online
                                    description = 'OLPC will test the proficiency in cracking logics, framing algorithms and data structures.'
                                    contactName = 'Pradeep'
                                    contactNumber = {<><a href = 'tel:+919092534794'>+91 9092534794</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be a single round.</li>
                                            <li>• You will be asked to code on <a href = 'https://www.hackerrank.com/' target = '_blank' rel = 'noreferrer noopener'>hackerrank</a>.</li>
                                            <li>• Every participant must have an hackerrank account.</li>
                                            <li>• The time limit for the round is 2 hours.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {StreetCoding} 
                                    title = 'Street Coding' 
                                    date = {<><span>1<sup>st</sup> February, 2020</span></>}
                                    prelims = '9 AM - 12 PM'
                                    finals = '1 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'Street coding will test the focus of the participants as they’ll be subjected to distractions in the environment.'
                                    contactName = 'Madhan'
                                    contactNumber = {<><a href = 'tel:+919994223635'>+91 9994223635</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary round: Paper based.</li>
                                            <li>• Final round: Computer based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    avatar = {WebDevImage} 
                                    title = 'Web Development' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = 'Solo' 
                                    description = 'Participants will be asked to create a web app or website for a given scenario in the final round. First round will test the participants’ basic knowledge about various web development frameworks and scripting languages.'
                                    contactName = 'Meena'
                                    contactNumber = {<><a href = 'tel:+919488085260'>+91 9488085260</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based (Multiple Choice Questions).</li>
                                            <li>• Final Round: Computer based.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {UIUXImage} 
                                    title = 'UI/UX Designing' 
                                    date = {<><span>1<sup>st</sup> February, 2020</span></>}
                                    uxTime
                                    size = 'Solo' 
                                    description = 'Participants will be asked to create UI/UX Front End Design for an app or a website for a given scenario.'
                                    contactName = 'Rajesh'
                                    contactNumber = {<><a href = 'tel:+917358345745'>+91 7358345745</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Online (Elimination).</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Selected candidates should bring their own laptop to the final round along with necessary softwares (Photoshop, Illustrator, etc.).</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {PythoniteImage} 
                                    title = 'Pythonite' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'Pythonite will test the proficiency of the participants in the language of Python.'
                                    contactName = 'Ramya'
                                    contactNumber = {<><a href = 'tel:+919094599843'>+91 9094599843</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be a rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                            <LazyLoadComponent>
                                <Event 
                                    onsite
                                    avatar = {CoffeeWithJavaImage} 
                                    title = 'Coffee with Java' 
                                    date = {<><span>31<sup>st</sup> January, 2020</span></>}
                                    prelims = '9 AM - 1 PM'
                                    finals = '2 PM - 4:30 PM'
                                    size = {2} 
                                    description = 'This event will test the proficiency of the participants in the core concepts of Java and other associated frameworks.'
                                    contactName = 'Vinodhini'
                                    contactNumber = {<><a href = 'tel:+919941279491'>+91 9941279491</a></>}
                                >
                                    <div>
                                        <ul>
                                            <li>• There will be 2 rounds.</li>
                                            <li>• Preliminary Round: Paper based.</li>
                                            <li>• Final Round: Computer based.</li>
                                            <li>• Discussion of strategies or plagiarism of any kind will lead to disqualification.</li>
                                        </ul>
                                    </div>
                                </Event>
                            </LazyLoadComponent>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(Technical)