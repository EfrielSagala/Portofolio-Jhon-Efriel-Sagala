import React from "react"
import { Fade } from "react-awesome-reveal";

class About extends React.Component{
    render(){
        if(!this.props.data) return null

        const name = this.props.data.name;//ngambil data dari props --> json
        const profilpic =`/images/${this.props.data.profilpic}`;
        const bio = this.props.data.bio;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const phone = this.props.data.phone;
        const email = this.props.data.email;
        const resumeDownload = this.props.data.resumeDownload;

        return (
            <section id="about">
                <Fade duration={1000}>
                    <div className="row">
                        <div className="three columns tengah">
                            {/* jadi didalam div baris ada 3 colom*/}
                            <img
                            className="profile-pic"
                            src={profilpic}
                            alt="Efriel"
                            />
                        </div> 


                        <div className="nine columns main-col">
                            <h2 className="aboutme">About Me</h2>
                            <p>{bio}</p>
                            
                           <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span> <br/>
                                    <span>{street}</span><br/>
                                    <span>{city} {state},{zip}</span> <br/>
                                    <span>{phone}</span><br/>
                                    <span>{email}</span><br/>
                                
                                </p>
                            </div>

                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button">
                                        <i className="fa fa-download"> Download CV</i>
                                        </a>
                                </p>
                            </div>


                           </div>
                        </div>


                    </div>
                </Fade>

                

            </section>
        )


    }

}

export default About;
