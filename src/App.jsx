export default function Resume() {
  return (
    <>
      <Navbar />
      
      <Hero />

      <Aboutme />

      <Qualifications />

      <Experience />

      <Contacts />
    </>
  )
}

function Navbar() {
  return (
          <nav>
              <h1 className="inline">Munawar Ali</h1>
              <div id="nav-p" className="inline">
                  <p className="inline"><a href="/">Home</a></p>
                  <p className="one"><a href="#About-me">About Me</a></p>
                  <p className="one"><a href="#Qualifications">Qualifications</a></p>
                  <p className="one"><a href="#Experiences">Experiences</a></p>
                  <p className="one"><a href="#Contacts">Contacts</a></p>
              </div>
          </nav>
  )
};

function Hero() {
  return (
          <div id="one">
              <div id="h2">
                  <h2 id="one">I am Munawar Ali,</h2>
                  <h2 id="two">based in India.</h2>
              </div>
              <p className="inline">I am currently working in Indian regions.</p>
              <img src="./img/munawar-ali.JPG" className="inline" />
          </div>
  )
};

function Aboutme() {
  return(
          <div className="about-me" id="About-me">
              <h2>About me</h2>
              <p>I got my basics from Odin Project and have many
                  projects under my name.<br /><br />

                  I graduated plus two from SIHSS Ummathur with full grade.<br />
                  <br />
              </p>
          </div>
  )
};

function Qualifications() {
  return(
      <div className="qualifications" id="Qualifications">
          <h2>Qualifications</h2>
          <p>I have my qualifications from completed many
              projects from Odin Project and others.
          </p>
      </div>
  )
};

function Experience() {
  return(
      <div className="experience" id="Experiences">
          <h2>Experience</h2>
          <p>Experience by doing many projects.</p>
      </div>
  )
};

function Contacts() {
  return(
      <div className="contacts" id="Contacts">
          <h2>Contacts</h2>
          <div>
              <p className="inline">Mobile : 9961313991</p>
              <p className="inline">Email : munawaraliv07@gmail.com</p>
              <p className="inline">LinkedIn :</p>
          </div>
      </div>
  )
};