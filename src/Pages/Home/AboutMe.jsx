export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/img/omeshpic.jpg" alt="About Me" style={{ width: "600px", height: "auto", borderRadius: "10px" }} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a passionate <strong>Java Full Stack Developer</strong> with expertise in 
            <strong>Spring Boot, React.js, MySQL, and AWS</strong>. I specialize in building 
            scalable, secure, and efficient web applications that deliver seamless user experiences.
          </p>
          <p className="hero--section-description">
            With hands-on experience in developing enterprise-grade applications, I focus on 
            implementing robust authentication, data management, and cloud-based solutions. 
            My recent project, <strong>Needsforyou</strong>, showcases my ability to integrate 
            <strong>JWT-based authentication, CI/CD pipelines, and role-based access control</strong>.
          </p>
          <p className="hero--section-description">
            Apart from development, I have contributed as an organizer for the 
            <strong>Smart India Hackathon (SIH)</strong>, where I managed event logistics and 
            coordinated teams from various colleges. Always eager to learn and innovate, I am 
            excited to collaborate on new and impactful projects!
          </p>

        </div>
      </div>
    </section>
  );
}
