'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Metadata is now imported in separate metadata.js file
// since we're using 'use client' directive

const AboutPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitEmail = async () => {
    // Validate email
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://sheetdb.io/api/v1/7zrr0lffxfa6x', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'Emails': email
            }
          ]
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      

      <main>
        <section className="bg-secondary position-relative pt-xl-8">
          <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
            <img src="assets/images/elements/grad-shape/blur-decoration.svg" className="blur-7 opacity-2" alt="Grad shape" />
          </div>

          <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
            <img src="assets/images/elements/grad-shape/blur-decoration.svg" className="blur-8 opacity-1" alt="Grad shape" />
          </div>
                
          <div className="container position-relative pt-4 pt-sm-5">
            <div className="position-absolute top-50 start-0 translate-middle mt-5">
              <img src="assets/images/elements/clay-decoration.png" alt="Clay-decoration" />
            </div>

            <div className="inner-container text-center align-items-center mb-5 mb-md-7">
              <h1 className="display-5 mb-4">About <span className="text-primary-grad">Seefunnel</span></h1>

              <div className="md-5">
                <p>Seefunnel allows you to create stunning B2B sales pages that you can use in your marketing campaigns.</p>
                <p>If you are just sending messages to your leads no one will engage to your content<b> Draft B2B Sales Pages</b> that make a lasting impact. From concept to execution, we ensure your brand stands out in a crowded marketplace.</p>
                <p>We focus on creating high-impact visuals that leave a lasting impression.</p>

                <p>Also we should work here with a image of the founders (us 3) so we make it more personal. People sell to people not business to business.</p>
                            
                <p>
                  Seefunnel also helps you to draft professional Cold Emails & Cold DMs for your campagins. You just need to bring the LinkedIn URL from which our system scrape the prospect data and use it to make messages personalized.
                </p>

                <p>
                  <b>
                    What are you waiting for? 🚀
                  </b>
                </p>

                <a className="btn btn-primary icon-link icon-link-hover mt-3" href="https://app.seefunnel.com/auth/firebase/register" target="_blank">Create free account<i className="bi bi-arrow-right"></i> </a>
              </div>
            </div>

            <div className="row position-relative g-4 g-lg-5"></div>
          </div>
        </section>

        <section style={{ marginTop: '-80px' }} className="bg-secondary position-relative overflow-hidden">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-5">
                <h2 className="mb-3">Stay updated with our newsletter</h2>
                <p className="mb-0">Our newsletter provides valuable content to help you stay ahead in your marketing.</p>
              </div>

              <div className="col-md-6 col-xl-5 ms-auto">
                <div className="bg-body rounded-2 position-relative z-index-2 p-2 mb-2">
                  <div className="input-group">
                    <input 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="form-control bg-transparent border-0 me-1" 
                      type="email" 
                      placeholder="Enter your email address" 
                    />
                    <button 
                      onClick={submitEmail} 
                      type="button" 
                      className="btn btn-primary rounded-2 mb-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe!'}
                    </button>
                  </div>
                </div>
                <div className="form-text">✌️ No Spam — We Promise!</div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default AboutPage;