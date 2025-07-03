"use client"
import "./imp.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
  const handleSmoothScroll = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    alert("Download Resume clicked!")
  }

  const handlePortfolioClick = (title) => {
    alert(`Clicked portfolio item: ${title}`)
  }

  const handleSocialClick = (platform) => {
    alert(`Clicked social icon: ${platform}`)
  }

  const heroStyle = {
    position: "relative",
    backgroundImage: "url(/assets/Character.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  const heroOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    filter: "grayscale(100%)",
  }

  return (
    <>
      <div className="container">
        <header>
          <div className="logo">KR</div>
          <nav>
            <ul>
              <li>
                <button onClick={handleHomeClick} className="btn-link-style">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll("about")} className="btn-link-style">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll("projects")} className="btn-link-style">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll("contact")} className="btn-link-style">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <button onClick={() => handleSocialClick("LinkedIn")} className="btn-icon">
              <i className="fab fa-linkedin"></i>
            </button>
            <button onClick={() => handleSocialClick("Facebook")} className="btn-icon">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button onClick={() => handleSocialClick("Twitter")} className="btn-icon">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </header>

        <section className="hero" style={heroStyle}>
          <div style={heroOverlayStyle}></div>
          <div className="hero-content">
            <h1>Katie Reed</h1>
            <p>Web Developer & Designer</p>
            <button onClick={() => handleSmoothScroll("contact")} className="btn">
              Contact Me
            </button>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <h2 className="section-title">About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <button onClick={handleDownloadResume} className="download-btn">
              Download Resume
            </button>
          </div>
        </section>

        <section className="skills" id="skills">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-description">Lorem ipsum dolor sit amet...</p>
          <div className="skills-container">
            <div className="focus-areas">
              <h3 className="focus-title">MY FOCUS</h3>
              <ul className="focus-list">
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Web Design</li>
                <li>Mobile App Design</li>
              </ul>
            </div>
            <div className="skill-bars">
              {[
                { name: "HTML", className: "html" },
                { name: "CSS", className: "css" },
                { name: "JavaScript", className: "javascript" },
                { name: "React", className: "react" },
                { name: "Photoshop", className: "photoshop" },
                { name: "Adobe XD", className: "adobe-xd" },
                { name: "Node.js", className: "nodejs" },
                { name: "WordPress", className: "wordpress" },
              ].map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="skill-name">{skill.name}</div>
                  <div className={`skill-bar ${skill.className}`}>
                    <div className="skill-level"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio" id="projects">
          <h2 className="portfolio-title">Projects</h2>
          <div className="portfolio-grid">
            {[
              "Web Design",
              "Mobile Design",
              "Logo Design",
              "Web Application Development",
              "Mobile Application Development",
              "PWA Development",
            ].map((title, idx) => (
              <button key={idx} className="portfolio-item btn-link-style" onClick={() => handlePortfolioClick(title)}>
                <h3>{title}</h3>
              </button>
            ))}
          </div>
        </section>
      </div>

      <footer id="contact" className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <button onClick={() => handleSocialClick("Twitter")} className="me-4 text-reset btn-icon">
              <i className="fab fa-twitter"></i>
            </button>
            <button onClick={() => handleSocialClick("Instagram")} className="me-4 text-reset btn-icon">
              <i className="fab fa-instagram"></i>
            </button>
            <button onClick={() => handleSocialClick("LinkedIn")} className="me-4 text-reset btn-icon">
              <i className="fab fa-linkedin"></i>
            </button>
          </div>
        </section>

        <section className="footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i> infokatie@mail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +01 234 567 88
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2021 Copyright:
          <div className="social-icons">
            <button onClick={() => handleSocialClick("LinkedIn")} className="btn-icon">
              <i className="fab fa-linkedin"></i>
            </button>
            <button onClick={() => handleSocialClick("Facebook")} className="btn-icon">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button onClick={() => handleSocialClick("Twitter")} className="btn-icon">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;