let page = window.location.pathname;


class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header class="flex">
        <h1><a href="index.html">Nicolas Romano</a></h1>
        <div id="remote-div">
            
            
        </div>
        </header>
        <div id="remote-dropdown" style="display: none;" class="flex-col">
          <div id="remote-screen">
            <h2 id="screen-name">Latest Project</h2>
          </div>
          <div class="remote-button-row">
            <a href="/experience.html" class="remote-link">
              <div class="remote-button-group">
                <p>Experience</p>
                <div class="remote-button"></div>
              </div>
            </a>
            <a href="/projects.html" class="remote-link">
              <div class="remote-button-group">
                <p>Projects</p>
                <div class="remote-button"></div>
              </div>
            </a>
            
          </div>

          <div class="remote-button-row">
          <a href="/community.html" class="remote-link">
              <div class="remote-button-group">
                <p>Community Engagement</p>
                <div class="remote-button"></div>
              </div>
            </a> 
            <a href="/essays.html" class="remote-link">
              <div class="remote-button-group">
                <p>Essays</p>
                <div class="remote-button"></div>
              </div>
            </a>
          </div>

          <div class="remote-button-row">
            <a href="/resume.html" class="remote-link">
              <div class="remote-button-group">
                <p>Resume</p>
                <div class="remote-button"></div>
              </div>
            </a>
            <a href="/contact.html" class="remote-link">
              <div class="remote-button-group">
                <p>Contact</p>
                <div class="remote-button"></div>
              </div>
            </a> 
          </div>

        
          
        </div>
        
        </div> 
        <img src="/assets/images/three-dots.svg" class="dots">
    `;
  }
}

customElements.define('header-component', Header);
