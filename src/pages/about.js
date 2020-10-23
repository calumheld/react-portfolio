import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
function About(){
    return(
    <div>
    <div class="container">
        <div class="row">
          <div class="col-lg-9 col-sm-12">
            <figure>
              <h1>About Me</h1>
              <div class="row">
                <img src="https://i.imgur.com/Uogst7h.jpg?1" alt=""></img>
                <summary>I spent three years learning to code in highschool in java and python and spent about seven years thinking about actually making something of it. I've used the current health crisis to try to pick up some more useful skills.
                  I used my stimulus check to buy a nice drawing tablet to hopefully learn how to make assets for the kidns of projects I want to do in the future. I am not very good yet. I've also used the time to get back into learning Japanes. I can read
                  and speak it with some compitence, but very slowly. I'm hoping to get a decent job so that I can fund the lifestyle I truly desire, which is making art and games for myself in a dark room.</summary>
                </div>
                <div class="row"></div>
                  <a class="stuff" href="https://docs.google.com/document/d/e/2PACX-1vQBb7Hf6BUpWpRLilDP-26gzF3ojKzbz6xHJUaHWUbT6_AkGRLvoIOFL7VoGZLoFjJtPdte3QVFgeox/pub">My Resume</a>
                  <a href="https://github.com/calumheld">My Github</a>
                  <a href="https://www.linkedin.com/in/calum-held-4294381b5/">My linkedin</a>
                
            </figure>
          </div>
        </div>
      </div>

      </div>);
}
export default About;