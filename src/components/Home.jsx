import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import html from '../assets/html.png'
import css from '../assets/css.jpg'
import js from '../assets/JS.png'
import reactjs from '../assets/React.png'
import angular from '../assets/angular.jpeg'
import jquerypic from '../assets/jquery.png'
import tailwindcss from '../assets/tailwind.jpeg'
import bootstrappic from '../assets/Bootstrap.jpeg'
import wordpress from '../assets/wordpress.jpg'
import nodepic from '../assets/node.png'
import php from '../assets/php.jpeg'
import mysqlpic from '../assets/mysql.png'
import c_programming from '../assets/C_programming.jpeg' 
import cpp_img from '../assets/cpp_programming.jpeg'
import pyhton_img from '../assets/python.jpeg'
import java_img from '../assets/java.jpg'
import figma from '../assets/figma.jpeg'
import vsCode from '../assets/vc_code_icon.jpg'
import canva from '../assets/canva.png'
import mscopilot from '../assets/copilot.png'
import RestAPI from '../assets/rest_api.jpg'
import JSON_pic from '../assets/json_img.jpg'
function Home(){
    return(
        <div className="home composeElement" id="home">
            <div className="social_media homeElement" id="social_media">
                <div className="icon" id="git"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></div>
            <div className="icon" id="linked"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></div>
            </div>
            <div className="intro homeElement">
                <h1 className="myName">Gaurav Heera</h1>
                <p>I'm a Web developer with a focus on UI/UX design. While I can handle both front-end and back-end development, I enjoy crafting visually appealing, intuitive, and user-friendly interfaces that enhance digital experiences. I continuously learn and explore new technologies to stay up-to-date in the ever-evolving web landscape.</p>
            </div>

            <div className="homeButtonWrap">
                <button className="homeButton homeElement CV">Download CV</button>
                <Link to="/contact" style={{textDecoration: "none"}}><button className="homeButton homeElement contact-btn">Contact Me</button></Link>
            </div>

            <div className="skillSet homeElement">
                <h2>Development Technologies I Use</h2>
                <div className="skill" style={{backgroundImage: `url(${html})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${css})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${js})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${reactjs})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${angular})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${jquerypic})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${tailwindcss})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${bootstrappic})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${wordpress})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${nodepic})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${php})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${mysqlpic})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${RestAPI})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${JSON_pic})`}}></div>
            </div>

            <div className="toollist homeElement">
                <h2>Software(s) I Use</h2>
                <div className="skill" style={{backgroundImage: `url(${figma})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${vsCode})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${canva})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${mscopilot})`}}></div>
                <h3>I use AI to learn, brainstorm ideas and generate examples</h3>
            </div>
            
            <div className="moreIntro homeElement" id='about'>
                <h1 className='homeElement'>More About Me</h1>
                <p>
                    <ul>
                        <li className='homeElement'>Skills And Technologies :
                            <ul>
                                <li className='homeElement'>Completed a certificate course covering <i>HTML, CSS, JavaScript, Wordpress, PHP, and MySQL</i> from Raj Software Technology India Limited (Mumbai), building a strong foundation in web development and I have independently learned and practiced <i>JSON, React, Tailwind CSS, Bootstrap, Angular, Node.js, and jQuery</i> through extensive online research and hands-on development. Constant experimentation and project building have helped me refine my understanding and apply these technologies effectively.</li>
                            </ul>
                        </li>
                        <li className='homeElement'>Education :
                            <ul>
                                <li className='homeElement'>Currently pursuing a <i>Bachelor of Computer Applications (BCA)</i> from <i>Chandigarh University</i>, continuously enhancing my technical and problem-solving skills.</li>
                            </ul>
                        </li>
                        <li className='homeElement'>Experience & Learning Approach :
                            <ul>
                                <li className='homeElement'>As a fresher, my hands-on experience comes from dedicated practice, personal projects, and continuous experimentation. I explore UI/UX design, front-end development, and troubleshooting complex challenges to refine my skills.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
            </div>
            <div className='learning homeElement'>
                <h2>New Skills I am focused on</h2>
                <div className="skill" style={{backgroundImage: `url(${c_programming})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${cpp_img})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${pyhton_img})`}}></div>
                <div className="skill" style={{backgroundImage: `url(${java_img})`}}></div>
            </div>
            
            <div className="aboutCompose " id='contact'>
                <h2 className='homeElement'>About COMPOSE</h2>
                <h4 className='homeElement'>As a fresher without official projects to showcase, I have focused on developing reusable, customizable, and responsive web elements and templates as part of my practice. These components not only demonstrate my expertise in front-end development but also serve as helpful resources for fellow developers, simplifying workflows and enhancing web design efficiency.</h4>
                <div className="exploreButtonsWrap">
                    <a href="#" style={{textDecoration: "none"}}><button className="exploreElements exploreButton homeElement">Explore Elements</button></a>
                    <Link to="/templates" style={{textDecoration: "none"}}><button className="exploreTemplates exploreButton homeElement">Explore Templates</button></Link>
                </div>
            </div>

            <a href="#" className="move-top"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg></a>
        </div>
        
    )
}
export default Home