export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm K Omesh Chandra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p>
            I am a passionate and skilled <strong>Java Full Stack Developer</strong> with expertise in 
            <strong> Spring Boot, React.js, MySQL, and AWS</strong>. I love building scalable, efficient, and 
            user-friendly web applications that solve real-world problems.
          </p>
          <p>
            With hands-on experience in developing enterprise-grade applications, I specialize in 
            backend development, REST APIs, and secure authentication. I thrive on learning new 
            technologies and delivering high-quality software solutions.
          </p>
        
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.href = "mailto:omesh49@gmail.com"}>
            Get In Touch
          </button>
        
       
        </div>
      </div>
      
    
      <div className="hero--section--img">
        
        <img src="/img/Ompic.jpg" alt="Hero Section" style={{ width: "600px", height: "auto", borderRadius: "10px" }} />


      </div>
    </section>
  );
}
