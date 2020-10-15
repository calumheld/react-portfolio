import React from "react";

function Contact(){
    return(
    <div>
    <section class="container">
        <div class="row">
          <div class="col-lg-9 col-md-12">
            <figure>
              <div class="row">
                <h1>Contact</h1>
              </div>
              <form>
                <label for="name">Name</label><br/>
                <input type="text" id="name" name="Name" placeholder="Name"/><br/>
                <label for="email">Email</label><br/>
                <input type="text" id="email" name="Email" placeholder="Email"/><br/>
                <label for="message">Message</label><br/>
                <input type="text" id="message" name="Message" placeholder="Message"/><br/>
                <input id="Submit" type="reset" value="Submit"/>
              </form>
            </figure>
          </div>
        </div>
      </section>
      </div>);
}
export default Contact;