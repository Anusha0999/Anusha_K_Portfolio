
import './App.css'

const PROFILE_PHOTO = '/Profile.jpeg'
const RESUME_PDF = '/ANUSHA_K_Resume.pdf'

const githubProfile = 'https://github.com/Anusha0999'
const linkedinProfile = 'https://www.linkedin.com/in/anusha-k-3205a3349/'

// ABOUT ME
const strengths = [
  {
    icon: '✦',
    title: 'Creative Problem Solving',
    description: 'Enjoy finding practical solutions to real-world technical and business challenges.',
  },
  {
    icon: '⌘',
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, development practices and analytical tools.',
  },
  {
    icon: '↗',
    title: 'Analytical Thinking',
    description: 'Turning information into meaningful insights through structured analysis.',
  },
]

// TECHNOLOGIES
const skillGroups = [
  {
    number: '01',
    icon: '🌐',
    title: 'Frontend Development',
    description: 'Creating responsive and engaging user interfaces.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Bootstrap'],
  },
  {
    number: '02',
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Developing application logic and server-side functionality.',
    skills: ['Python', 'Django', 'PHP', 'Java', 'REST API', 'OOP'],
  },
  {
    number: '03',
    icon: '📊',
    title: 'Data Analytics',
    description: 'Exploring data and communicating insights visually.',
    skills: ['Power BI', 'Excel', 'SQL', 'Python', 'Data Analysis', 'VBA'],
  },
  {
    number: '04',
    icon: '🗄️',
    title: 'Database & Tools',
    description: 'Managing information and collaborating on projects.',
    skills: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Firebase', 'VS Code'],
  },
]

// INTERNSHIPS
const internships = [
  {
    number: '01',
    role: 'Web Developer Intern',
    company: 'Manipal Institute of Technology',
    period: 'May 2026 – September 2026',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Modern professional office workspace',
    certificate: '/Internship%20Certificates/Internship%20Certificate%20MIT.pdf',
    details: [
      'Developed a web-based Faculty and Adjunct Faculty Management Portal.',
      'Worked on faculty profiles, academic activities and event management.',
      'Improved frontend interfaces and application functionality.',
    ],
    technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
  },
  {
    number: '02',
    role: 'Data Analyst Intern',
    company: 'Codveda Technologies',
    period: 'July 2026 – August 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Data analytics dashboard on a computer',
    certificate: '/Internship%20Certificates/Internship%20Certificate%20Codveda%20Technologies.pdf',
    details: [
      'Performed data cleaning and exploratory data analysis.',
      'Worked on machine learning and sentiment analysis.',
      'Created interactive Power BI dashboards.',
    ],
    technologies: ['Python', 'Power BI', 'Machine Learning'],
  },
  {
    number: '03',
    role: 'Business Analyst Intern',
    company: 'Saiket Systems',
    period: 'July 2026 – August 2026',
    image: 'https://www.edumerge.com/images/college-staff-info-system.webp',
    imageAlt: 'Business analytics and performance charts',
    certificate: '/Internship%20Certificates/Internship%20Certificate%20Saiket%20System.pdf',
    details: [
      'Performed customer churn analysis and segmentation.',
      'Explored business data to identify useful patterns.',
      'Prepared dashboards and business insights.',
    ],
    technologies: ['Python', 'SQL', 'Power BI'],
  },
  {
    number: '04',
    role: 'Data Analyst Intern',
    company: 'Innobyte Services',
    period: 'April 2026 – May 2026',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Data visualization and business reporting',
    certificate: '/Internship%20Certificates/Internship%20Certificate%20InnoByte%20Services.pdf',
    details: [
      'Analyzed sales datasets using Python and Excel.',
      'Performed exploratory data analysis.',
      'Created Power BI dashboards and visualizations.',
    ],
    technologies: ['Python', 'Excel', 'Power BI'],
  },
]

// EDUCATION
const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    college: 'Poornaprajna Institute of Management',
    period: '2024 – 2026',
    result: 'CGPA: 8.63',
    location: 'Udupi, Karnataka',
    image: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9717/2019/5/7/College%20Building%20View%20of%20Poornaprajna%20Institute%20of%20Management%20Udupi_Campus-View.JPG',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    college: 'Bhandarkars Arts & Science College',
    period: '2021 – 2024',
    result: 'CGPA: 9.20',
    location: 'Kundapura, Karnataka',
    image: 'https://www.basck.in/images/main-slider/fr1.jpg',
  },
]

// PROJECTS
const projects = [
  {
    number: '01',
    category: 'WEB DEVELOPMENT',
    title: 'Faculty and Adjunct Faculty Portal',
    description: 'A centralized academic management application for faculty records, subject allocation, timetables, leave applications, examination duties and academic activities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/Anusha0999/Faculty-and-Adjunct-Faculty-Portal',
  },
  {
    number: '02',
    category: 'AGRICULTURE TECHNOLOGY',
    title: 'Agro-Connect',
    description: 'An agricultural platform connecting farmers, sellers and customers with product management, purchase tracking, authentication and payment integration.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Razorpay'],
    github: 'https://github.com/agroconnect899-code/agroconnect-1',
  },
  {
    number: '03',
    category: 'WEB APPLICATION',
    title: 'Doctor Appointment System',
    description: 'An online appointment application that allows patients to book appointments and doctors to manage requests through an administrative interface.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: 'https://github.com/Anusha0999/Doctor-Appointment-System',
  },
  {
    number: '04',
    category: 'MANAGEMENT SYSTEM',
    title: 'Employee Leave Management System',
    description: 'An employee management application with secure authentication, leave applications, approval workflows and administrative management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: 'https://github.com/Anusha0999/Employee-Leave-Management-system',
  },
  {
    number: '05',
    category: 'ANDROID APPLICATION',
    title: 'Blood Donation App – LifeLink',
    description: 'An Android application connecting blood donors and recipients through donation tracking and emergency blood request management.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=85',
    technologies: ['Java', 'XML', 'Android', 'SQLite'],
    github: 'https://github.com/Anusha0999/Blood-Donations-App',
  },
]

// CERTIFICATES
// PDF files are stored inside public/Certificates/
const certificates = [
  {
    title: 'Big Data 201',
    file: '/Certificates/Infosys-Big Data 201.pdf',
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    file: '/Certificates/Forage-Cybersecurity Analyst Job Simulation.pdf',
  },
  {
    title: 'Introduction to Generative AI',
    file: '/Certificates/SimpliLearn-Generative AI.pdf',
  },
  {
    title: 'Personality Value Assessment',
    file: '/Certificates/Goodspace certificate.pdf',
  },
  {
    title: 'Introduction to PHP Programming',
    file: '/Certificates/Infosys-Introduction to PHP Programming.pdf',
  },
  {
    title: 'Big Data 101',
    file: '/Certificates/Infosys-Big data101.pdf',
  },
  {
    title: 'PHP for Web Development',
    file: '/Certificates/Infosys- PHP for Web Development.pdf',
  },
  {
    title: 'JavaScript Programming',
    file: '/Certificates/Mindluster_Certificate- JavaScript Programming.pdf',
  },
  {
    title: 'Machine Learning for Beginners',
    file: '/Certificates/SimpliLearn- Machine Learning for Beginners.pdf',
  },
  {
    title: 'NPTEL – Machine Learning',
    file: '/Certificates/NPTEL-Machine Learning.pdf',
  },
  {
    title: 'The Joy of Computing Using Python',
    file: '/Certificates/NPTEL-The Joy of Computing using Python.pdf',
  },
]

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">AK<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">Let's Talk ↗</a>
      </header>

      <main>

        {/* HOME */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

            <h1>
              Building Ideas.
              <br />
              Creating <span>Impact.</span>
            </h1>

            <h2>Hi, I'm Anusha K. — Full-Stack Developer & Data Analyst</h2>

            <p className="hero-description">
              MCA graduate with practical experience in web development,
              data analytics and business analysis. I enjoy creating
              meaningful applications, exploring technologies and
              transforming data into useful insights.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">Explore My Projects ↗</a>
              <a href={PROFILE_PHOTO} target="_blank" rel="noreferrer" className="secondary-button">View Photo ↗</a>
              <a href={RESUME_PDF} target="_blank" rel="noreferrer" className="secondary-button">View Resume ↗</a>
            </div>

            <div className="hero-status">
              <span className="status-dot"></span>
              Open to professional opportunities
            </div>

            <div className="hero-socials">
              <a href={githubProfile} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={linkedinProfile} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="photo-frame">
              <img src={PROFILE_PHOTO} alt="Anusha Karantha" className="profile-photo" />
            </div>

            <div className="photo-caption">
              <span>ANUSHA K.</span>
              <span>DEVELOPER · ANALYST</span>
            </div>

            <div className="floating-note note-one">✦ Creative Thinking</div>
            <div className="floating-note note-two">⌘ Problem Solving</div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="section about-section" id="about">
          <div className="about-layout">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
                alt="Technology and software development workspace"
                loading="lazy"
              />
              <div className="about-image-caption">
                <span>TECHNOLOGY</span>
                <span>CREATIVITY · INNOVATION</span>
              </div>
              <div className="about-image-decoration">01.</div>
            </div>

            <div className="about-content">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2 className="section-title">
                A Passion for <span>Technology.</span>
              </h2>

              <p className="about-paragraph">
                I am an MCA graduate with a strong interest in full-stack
                development, data analytics and solving real-world problems
                through technology.
              </p>

              <p className="about-paragraph">
                Through academic projects and internship experiences, I have
                gained practical exposure to developing web applications,
                managing databases, analyzing datasets and creating
                interactive dashboards. I enjoy understanding how technology
                can simplify processes and improve the way people work.
              </p>

              <p className="about-paragraph">
                I believe in continuous learning, collaboration and building
                solutions that combine functionality with a thoughtful
                user experience. My goal is to grow as a technology
                professional while contributing to meaningful projects.
              </p>

              <div className="about-facts">
                <div><strong>05+</strong><span>Projects</span></div>
                <div><strong>04</strong><span>Internships</span></div>
                <div><strong>02</strong><span>Degrees</span></div>
              </div>

              <a href={RESUME_PDF} target="_blank" rel="noreferrer" className="primary-button">
                Explore My Resume ↗
              </a>
            </div>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <span className="strength-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <p className="eyebrow">MY TECHNICAL TOOLKIT</p>
          <h2 className="section-title">Skills & <span>Technologies</span></h2>
          <p className="section-description">
            Technologies and tools I have worked with across development,
            analytics and academic projects.
          </p>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-icon">{group.icon}</span>
                  <span className="skill-index">{group.number}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section experience-section" id="experience">
          <p className="eyebrow">LEARNING THROUGH EXPERIENCE</p>
          <h2 className="section-title">Internship <span>Experience</span></h2>
          <p className="section-description">
            Practical experiences that helped me strengthen my technical
            knowledge, analytical thinking and professional skills.
          </p>

          <div className="internship-grid">
            {internships.map((item) => (
              <article className="internship-card" key={item.number}>
                <div className="internship-image">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                  <span className="internship-number">{item.number}</span>
                  <span className="internship-image-label">PROFESSIONAL EXPERIENCE</span>
                </div>

                <div className="internship-content">
                  <span className="timeline-tag">INTERNSHIP</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p className="timeline-period">{item.period}</p>

                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="project-tags">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                    style={{ display: 'inline-flex', marginTop: '20px' }}
                  >
                    <span>View Internship Certificate</span>
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section" id="education">
          <p className="eyebrow">MY ACADEMIC JOURNEY</p>
          <h2 className="section-title">Education & <span>Background</span></h2>
          <p className="section-description">
            My academic journey has helped me build a strong foundation
            in computer applications, programming and analytical thinking.
          </p>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.short}>
                <div className="education-image">
                  <img src={item.image} alt="College and university campus" loading="lazy" />
                  <span className="education-degree-label">{item.short}</span>
                </div>

                <div className="education-content">
                  <span className="timeline-tag">ACADEMIC QUALIFICATION</span>
                  <h3>{item.degree}</h3>
                  <h4>{item.college}</h4>

                  <div className="education-meta">
                    <span>◷ {item.period}</span>
                    <span>⌖ {item.location}</span>
                  </div>

                  <div className="education-result">
                    <span>Academic Performance</span>
                    <strong>{item.result}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="section-title">Projects That <span>Speak</span></h2>
          <p className="section-description">
            A collection of academic and practical applications that
            demonstrate my interest in building useful technology solutions.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-number">{project.number}</span>
                  <span className="project-image-category">{project.category}</span>
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a className="github-button" href={project.github} target="_blank" rel="noreferrer">
                    <span>View GitHub Repository</span>
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="section certificates-section" id="certifications">
          <p className="eyebrow">CONTINUOUS LEARNING</p>
          <h2 className="section-title">Courses & <span>Certifications</span></h2>
          <p className="section-description">
            Certificates earned through courses, training and professional learning.
          </p>

          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <article className="certificate-card" key={certificate.title}>
                <div className="certificate-icon">✧</div>
                <span>
                  {String(index + 1).padStart(2, '0')} / CERTIFICATE
                </span>
                <h3>{certificate.title}</h3>
                <p>Professional Learning & Development</p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                  style={{ display: 'inline-flex', marginTop: '16px' }}
                >
                  <span>View Certificate</span>
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2 className="section-title">
            Let's Create Something
            <br />
            <span>Meaningful Together.</span>
          </h2>

          <p className="section-description">
            Have an opportunity or an interesting project in mind?
            Feel free to contact me. I would love to connect with you.
          </p>

          <div className="contact-card-grid">

            <a className="contact-info-card email-card"
              href="mailto:anushakaranth39@gmail.com">
              <div className="contact-icon">✉</div>
              <span className="contact-card-label">EMAIL ME</span>
              <h3>Email Address</h3>
              <p>anushakaranth39@gmail.com</p>
              <span className="contact-card-action">Send an Email ↗</span>
            </a>

            <a className="contact-info-card phone-card"
              href="tel:+918277178372">
              <div className="contact-icon">☎</div>
              <span className="contact-card-label">CALL ME</span>
              <h3>Phone Number</h3>
              <p>+91 82771 78372</p>
              <span className="contact-card-action">Call Me ↗</span>
            </a>

            <div className="contact-info-card location-card">
              <div className="contact-icon">⌖</div>
              <span className="contact-card-label">MY LOCATION</span>
              <h3>Based In</h3>
              <p>Saligrama, Karnataka, India</p>
            </div>

            <a className="contact-info-card linkedin-card"
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer">
              <div className="contact-icon linkedin-symbol">in</div>
              <span className="contact-card-label">PROFESSIONAL NETWORK</span>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
              <span className="contact-card-action">Visit LinkedIn ↗</span>
            </a>

            <a className="contact-info-card github-card"
              href={githubProfile}
              target="_blank"
              rel="noreferrer">
              <div className="contact-icon">⌘</div>
              <span className="contact-card-label">MY PROJECTS</span>
              <h3>GitHub</h3>
              <p>Explore my projects and code</p>
              <span className="contact-card-action">Visit GitHub ↗</span>
            </a>

          </div>

          {/*
          <div className="contact-bottom">
            <p>Interested in working together?</p>
            <a className="primary-button"
              href="mailto:anushakaranth39@gmail.com">
              Let's Talk About Your Project ↗
            </a>
          </div>

          <div className="contact-socials">
            <a href={githubProfile} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={linkedinProfile} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
          */}
        </section>

      </main>

      <footer>
        <p>© 2026 Anusha K. All Rights Reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
