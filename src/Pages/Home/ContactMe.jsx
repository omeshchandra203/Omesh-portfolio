// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//         Feel free to reach out for any inquiries, collaborations, or just to say hello!
//         </p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">phone-number</span>
//             <input
//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="choode-topic" className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select id="choose-topic" className="contact--input text-md">
//             <option>Select One...</option>
//             <option>General Inquiry</option>
//             <option>Freelance Project</option>
//             <option>Job Opportunity</option>
//             <option>Technical Support</option>
//             <option>Feedback/Suggestions</option>
//           </select>
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>
//         <label htmlFor="checkboc" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           Feel free to reach out for any inquiries, collaborations, or just to say hello!
//         </p>
//       </div>
//       <form 
//         action="omeshc49@gmail.com" 
//         method="POST" 
//         className="contact--form--container"
//       >
//         <div className="container">
//           <label className="contact--label">
//             <span className="text-md">First Name</span>
//             <input type="text" name="first-name" required className="contact--input text-md" />
//           </label>
//           <label className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input type="text" name="last-name" required className="contact--input text-md" />
//           </label>
//           <label className="contact--label">
//             <span className="text-md">Email</span>
//             <input type="email" name="email" required className="contact--input text-md" />
//           </label>
//           <label className="contact--label">
//             <span className="text-md">Phone Number</span>
//             <input type="tel" name="phone-number" required className="contact--input text-md" />
//           </label>
//         </div>
//         <label className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select name="topic" className="contact--input text-md" required>
//             <option value="">Select One...</option>
//             <option value="General Inquiry">General Inquiry</option>
//             <option value="Freelance Project">Freelance Project</option>
//             <option value="Job Opportunity">Job Opportunity</option>
//             <option value="Technical Support">Technical Support</option>
//             <option value="Feedback/Suggestions">Feedback/Suggestions</option>
//           </select>
//         </label>
//         <label className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea name="message" rows="5" required className="contact--input text-md" placeholder="Type your message..."></textarea>
//         </label>
//         <input type="hidden" name="_captcha" value="false" />
//         <div>
//           <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out for any inquiries, collaborations, or just to say hello!
        </p>
      </div>
      <form 
        action="https://formsubmit.co/omeshc49@gmail.com" 
        method="POST" 
        className="contact--form--container"
      >
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" name="first-name" required className="contact--input text-md" />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" name="last-name" required className="contact--input text-md" />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" name="email" required className="contact--input text-md" />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="tel" name="phone-number" required className="contact--input text-md" />
          </label>
        </div>
        <label className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select name="topic" className="contact--input text-md" required>
            <option value="">Select One...</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Freelance Project">Freelance Project</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Feedback/Suggestions">Feedback/Suggestions</option>
          </select>
        </label>
        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea name="message" rows="5" required className="contact--input text-md" placeholder="Type your message..."></textarea>
        </label>

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Success Redirect (Optional) */}
        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

