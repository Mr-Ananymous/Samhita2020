import React, { Component } from 'react'
import { Avatar } from 'antd'

class Event extends Component {

    render() {
        const { avatar, title, date, size, onsite, description, children, contactName, contactNumber, prelims, finals, fullTime, gameTime, treasureTime, online, eventTime, uxTime } = this.props
        return (
            <React.Fragment>
                <div className = 'field is-grouped'>
                    <div className = 'control' style = {{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                        <Avatar src = {avatar} size = {80} />
                    </div>
                    <div className = 'is-hidden-desktop' style = {{marginLeft: '10px'}}>
                        <div className = 'title is-5 is-lato' style = {{marginBottom: '12px'}}>
                            {title}
                        </div>
                        <div className = 'field is-grouped' style = {{marginTop: '5px'}}>
                            <div className = 'control'>
                                <label className = 'label is-lato'>Team size:</label>
                            </div>
                            <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-8px'}}>
                                <div className = 'subtitle is-6 is-lato'>{size}</div>
                            </div>
                        </div>
                        {
                            date ?
                            
                            <div className = 'field is-grouped' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>Date:</label>
                                </div>
                                <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-8px'}}>
                                    <div className = 'subtitle is-6 is-lato'>{date}</div>
                                </div>
                            </div>

                            :

                            null
                        }
                        {
                            fullTime ? 

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9:30 AM - 4:30 PM</span>
                                    </label>
                                </div>
                            </div>

                            : gameTime ? 

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9:30 AM - 3 PM</span>
                                    </label>
                                </div>
                            </div>

                            : treasureTime ?

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>2 PM - 4:30 PM</span>
                                    </label>
                                </div>
                            </div>

                            : eventTime ?

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9 AM - 1 PM</span>
                                    </label>
                                </div>
                            </div>

                            : uxTime ?

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9 AM - 12 PM</span>
                                    </label>
                                </div>
                            </div>

                            : online ?

                            null

                            :

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Prelims: <span style = {{fontWeight: 'normal'}}>{prelims}</span>
                                    </label>                            </div>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Finals: <span style = {{fontWeight: 'normal'}}>{finals}</span>
                                    </label>
                                </div>
                            </div>
                        }
                        {   
                            onsite ? 

                            <div className = 'field is-grouped' style = {{marginTop: '-8px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>Site:</label>
                                </div>
                                <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-7px'}}>
                                    <div className = 'subtitle is-6 is-lato'>Onsite</div>
                                </div>
                            </div>   

                            :

                            null
                        }
                    </div>
                    <div className = 'control is-hidden-touch' style = {{marginLeft: '10px'}}>
                        <div className = 'title is-4 is-lato' style = {{marginBottom: '12px'}}>
                            {title}
                        </div>
                        <div className = 'field is-grouped' style = {{marginTop: '5px'}}>
                            <div className = 'control'>
                                <label className = 'label is-lato'>Team size:</label>
                            </div>
                            <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-8px'}}>
                                <div className = 'subtitle is-6 is-lato'>{size}</div>
                            </div>
                        </div>
                        {
                            date ?

                            <div className = 'field is-grouped' style = {{marginTop: '-8px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>Date:</label>
                                </div>
                                <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-8px'}}>
                                    <div className = 'subtitle is-6 is-lato'>{date}</div>
                                </div>
                            </div>

                            :

                            null
                        }
                        {
                            fullTime ? 

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9:30 AM - 4:30 PM</span>
                                    </label>
                                </div>
                            </div>

                            : gameTime ? 

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9:30 AM - 3 PM</span>
                                    </label>
                                </div>
                            </div>

                            : treasureTime ?

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>2 PM - 4:30 PM</span>
                                    </label>
                                </div>
                            </div>

                            : eventTime ?

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9 AM - 1 PM</span>
                                    </label>
                                </div>
                            </div>

                            : uxTime ?

                            <div className = 'field' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Time: <span style = {{fontWeight: 'normal'}}>9 AM - 12 PM</span>
                                    </label>
                                </div>
                            </div>

                            : online ?

                            null

                            :

                            <div className = 'field is-grouped' style = {{marginTop: '-10px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>
                                        Prelims: <span style = {{fontWeight: 'normal'}}>{prelims}</span>
                                    </label>
                                </div>
                                <div className = 'control' style = {{marginLeft: '-7px'}}>
                                    <span className = 'is-lato'>•</span>
                                </div>
                                <div className = 'control' style = {{marginLeft: '-7px'}}>
                                    <label className = 'label is-lato'>
                                        Finals: <span style = {{fontWeight: 'normal'}}>{finals}</span>
                                    </label>
                                </div>
                            </div>
                        }
                        {   
                            onsite ? 

                            <div className = 'field is-grouped' style = {{marginTop: '-8px'}}>
                                <div className = 'control'>
                                    <label className = 'label is-lato'>Site:</label>
                                </div>
                                <div className = 'control' style = {{marginTop: '2.5px', marginLeft: '-7px'}}>
                                    <div className = 'subtitle is-6 is-lato'>Onsite</div>
                                </div>
                            </div>   

                            :

                            null
                        }
                    </div>
                </div>    
                <div className = 'field is-grouped'>
                    <div className = 'control'>
                        <label className = 'label is-lato'>Description:</label>
                    </div>
                    <div style = {{marginTop: '2.2px'}}>
                        <div className = 'subtitle is-6 is-lato has-text-justified'>
                            {description}
                        </div>
                    </div>
                </div>
                <div className = 'field'>
                    <div className = 'control'>
                        <label className = 'label is-lato'>
							Rules:
						</label>
                    </div>
                    <div className = 'is-lato' style = {{marginTop: '2px'}}>
                        {children}
                    </div>
                </div>
				<div className = 'field is-grouped is-hidden-mobile' style = {{marginBottom: '3rem'}}>
					<div className = 'control' style = {{marginBottom: '5px'}}>
						<label className = 'label is-lato'>
							Contact:
						</label>
					</div>
					<div className = 'subtitle is-6 is-lato' style = {{marginTop: '2.2px'}}>
						{contactName} ({contactNumber})
                    </div>
				</div>
                <div className = 'field is-hidden-tablet' style = {{marginBottom: '3rem'}}>
					<div className = 'control'>
						<label className = 'label is-lato'>
							Contact:
						</label>
					</div>
					<div className = 'subtitle is-6 is-lato' style = {{marginTop: '2.2px'}}>
						{contactName} ({contactNumber})
                    </div>
				</div>
            </React.Fragment>
        )
    }
}

export default Event
