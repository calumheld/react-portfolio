import React from "react";

function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="index.html"> Calum Held </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
    )
}
export default Navbar;