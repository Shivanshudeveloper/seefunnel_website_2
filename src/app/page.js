import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const serviceItems = [
  {
    icon: "bi-rocket-takeoff-fill",
    color: "success",
    title: "B2B Sales Pages",
    description: "Craft engaging sales pages with Videos, AI-Reps, Carousels, Messages, and more."
  },
  {
    icon: "bi-award",
    color: "info",
    title: "Deep AI Analysis",
    description: "Understand how your sales pages perform with our AI Analytics."
  },
  {
    icon: "bi-person-lines-fill",
    color: "pink",
    title: "Emails & Phone Numbers",
    description: "Use our tool to scrape emails and phone numbers from internet."
  },
  {
    icon: "bi-fire",
    color: "warning",
    title: "A/B Testing",
    description: "Compare diffrent sales pages and see which one performs better."
  },
  {
    icon: "bi-lightning-charge-fill",
    color: "purple",
    title: "Contact Collection",
    description: "Collect your leads' contact information with our tool."
  }
];

const Home = () => {
  return (
    <>
      <section className="py-0">
        <div className="bg-secondary bg-opacity-50 position-relative overflow-hidden pb-7 pt-8">
          <div className="position-absolute start-0 top-0">
            <img src="https://folio.webestica.com/assets/images/elements/grad-shape/blur-decoration-2.svg" className="opacity-2 blur-9 h-300px rotate-335" alt="Grad shape" />
          </div>
          <div className="position-absolute top-0 end-0 z-index-2 mt-6 me-n6 d-none d-lg-block">
            <img src="assets/images/elements/grad-shape/05.png" className="h-250px" alt="" />
          </div>
          <div className="position-absolute top-50 start-0 mt-n6 d-none d-lg-block">
            <img src="assets/images/elements/clay-decoration.png" className="h-300px" alt="Clay-decoration" />
          </div>
          
          <div className="container position-relative">
            <div className="row">
              <div className="col-xxl-8 text-center mx-auto">
                <h1 className="small fw-medium bg-secondary-grad rounded px-2 px-sm-3 py-2 mb-3 d-inline-flex">AI Agents, Leads & Sales pages</h1>
          
                <h2 className="mb-3 lh-base">Build Your AI Sales Team for
                  <span className="h1 fw-bold text-primary-grad ityped-cursor-opacity mb-0 d-block">
                    <span className="typed" 
                    data-type-text="Email Marketing&&Social Media&&Promotion&&Agency&&Product Launch&&Personal Portfolio&&App Showcase&&Blog Website&&any purpose"></span>
                  </span>
                </h2>

                <p className="mb-4 lead">Create your own AI sales agents to automate lead scraping, <br /> personalized outreach, and AI-driven cold calling while you focus on closing deals.</p>

                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <a href="https://app.seefunnel.com/auth/firebase/register" target="_blank" className="btn btn-dark icon-link icon-link-hover mb-0">Create a free account<i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="position-relative overflow-hidden">
          <div className="h-300px w-100 bg-secondary bg-opacity-50 position-absolute top-0 start-0"></div>

          <div className="swiper swiper-outside-n5 px-4 px-sm-5" data-swiper-options='{
            "spaceBetween": 50,
            "loop": true,
            "speed": 7000,
            "autoplay":{
              "delay": 0, 
              "disableOnInteraction": false
            },
            "breakpoints": { 
              "576": {"slidesPerView": 2},
              "768": {"slidesPerView": 3},
              "992": {"slidesPerView": 3},
              "1200": {"slidesPerView": 4},
              "1300": {"slidesPerView": 5}
            }}'>
            
            <div className="swiper-wrapper ticker pb-5">
              <div className="swiper-slide">
                <img src="assets/images/landing/1.png" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/2.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/3.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/4.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/5.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>

              <div className="swiper-slide">
                <img src="assets/images/landing/6.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/7.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/8.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>

              <div className="swiper-slide">
                <img src="assets/images/landing/9.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
            </div>	
          </div>

          <div className="swiper swiper-outside-n5 px-4 px-sm-5" dir="rtl" data-swiper-options='{
            "spaceBetween": 50,
            "loop": true,
            "speed": 7000,
            "autoplay":{
              "delay": 0, 
              "disableOnInteraction": false
            },
            "breakpoints": { 
              "576": {"slidesPerView": 2},
              "768": {"slidesPerView": 3},
              "992": {"slidesPerView": 3},
              "1200": {"slidesPerView": 4},
              "1300": {"slidesPerView": 5}
            }}'>
            
            <div className="swiper-wrapper ticker pb-5">
              <div className="swiper-slide">
                <img src="assets/images/landing/10.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/11.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/12.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/13.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/14.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/15.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>

              <div className="swiper-slide">
                <img src="assets/images/landing/16.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
        
              <div className="swiper-slide">
                <img src="assets/images/landing/17.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>

              <div className="swiper-slide">
                <img src="assets/images/landing/18.jpg" className="rounded-2 shadow-lg" alt="portfolio-img" />
              </div>
            </div>	
          </div>
        </div>

      </section>

      <section className="pb-0">
      <div className="container position-relative">
        {/* Title */}
        <div className="inner-container-small text-center mb-6 mb-lg-7">
          <h2 className="mb-0">Take a look at our features</h2>
        </div>

        {/* Services */}
        <div className="row g-4 g-xl-5">
          {/* Service Items */}
          {serviceItems.map((service, index) => (
            <div key={index} className="col-sm-6 col-lg-4 mb-4">
              <div className="card card-hover-shadow card-icon-transition text-center bg-body bg-opacity-50 bg-blur rounded-4 h-100 p-4">
                {/* Icon */}
                <div className="card-icon icon-xl d-flex justify-content-center align-items-center text-white rounded-circle">
                  <div className={`icon-lg bg-body text-${service.color} shadow-primary rounded-circle ${index !== 0 ? 'mb-4' : ''}`}>
                    <i className={`bi ${service.icon} fa-lg`}></i>
                  </div>
                </div>

                {/* Card body */}
                <div className="card-footer bg-transparent mt-6 p-0">
                  <h6 className="mb-3">{service.title}</h6>
                  <p>{service.description}</p>
                  <Link 
                    href="https://app.seefunnel.com/auth/firebase/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-primary-grad icon-link icon-link-hover stretched-link mb-0"
                  >
                    Check now <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Explore More Button */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
              <Image
                src="/assets/images/elements/emoji.png"
                alt="emoji"
                width={60}
                height={60}
                className="mb-3"
              />
              <p>Not satisfied yet?</p>
              <Link 
                href="https://app.seefunnel.com/auth/firebase/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-grad mb-0"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>


      <section className="pt-5">
        <div className="container position-relative">
          <div className="bg-secondary position-relative rounded-4 overflow-hidden p-5 py-md-7">
            <span className="position-absolute end-0 top-0 me-n5 mt-3">
              <svg className="text-primary opacity-1" width="453" height="138" viewBox="0 0 453 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M452.303 -0.000286079V0.792195H337.93L303.294 35.4047H202.253L196.613 29.7642L130.255 29.7642L106.527 53.5151L26.2305 53.5151V52.7227L106.201 52.7227L129.928 28.995L196.939 28.995L202.58 34.6356H302.968L337.603 -0.000286079H452.303Z" fill="currentColor"></path>
                <path d="M452.297 78.3851V79.1543L354.473 79.1543L328.321 53.0026H273.617L263.502 42.9102L213.436 42.9102L180.921 75.425L87.6186 75.425L81.5818 69.3882H51.9805V68.5957H81.9081L87.9449 74.6558H180.595L213.109 42.1177L263.828 42.1177L273.944 52.2334H328.648L354.799 78.3851L452.297 78.3851Z" fill="currentColor"></path>
                <path d="M452.299 90.7848V91.554L348.531 91.554L323.405 66.4279L220.127 66.4279L177.706 108.849L137.64 108.849L128.806 100.038H41.75V99.2457H129.132L137.966 108.079L177.38 108.079L219.801 65.6587L323.731 65.6587L348.858 90.7848L452.299 90.7848Z" fill="currentColor"></path>
                <path d="M452.301 111.437V112.23L297.302 112.23L281.732 96.6364L209.29 96.6364L183.931 121.996H80.0469V121.226H183.605L208.964 95.8672L282.058 95.8672L297.628 111.437L452.301 111.437Z" fill="currentColor"></path>
                <path d="M271.641 108.08V108.849H216.191L192.207 132.833H119.648V132.064H191.88L215.864 108.08H271.641Z" fill="currentColor"></path>
                <path d="M197.777 45.2641L175.704 67.3369H119.648V66.5677H175.378L197.218 44.7281L197.777 45.2641Z" fill="currentColor"></path>
                <path d="M180.202 83.4674V84.2365L95.8964 84.2365L90.2092 89.9004H5.46094V89.1312H89.9062L95.5701 83.4674L180.202 83.4674Z" fill="currentColor"></path>
                <path d="M44.5774 97.3488C43.0482 95.8196 40.5689 95.8196 39.0398 97.3488C37.5106 98.878 37.5106 101.357 39.0398 102.886C40.5689 104.416 43.0482 104.416 44.5774 102.886C46.1066 101.357 46.1066 98.878 44.5774 97.3488Z" fill="currentColor"></path>
                <path d="M8.3079 86.6461C6.77872 85.1169 4.29941 85.1169 2.77023 86.6461C1.24104 88.1753 1.24104 90.6546 2.77023 92.1838C4.29941 93.713 6.77871 93.713 8.3079 92.1838C9.83708 90.6546 9.83709 88.1753 8.3079 86.6461Z" fill="currentColor"></path>
                <path d="M54.761 66.5524C53.2318 65.0232 50.7525 65.0232 49.2234 66.5524C47.6942 68.0816 47.6942 70.5609 49.2234 72.0901C50.7525 73.6192 53.2318 73.6192 54.761 72.0901C56.2902 70.5609 56.2902 68.0816 54.761 66.5524Z" fill="currentColor"></path>
                <path d="M30.0721 53.0713C30.0311 50.9091 28.2451 49.1896 26.0829 49.2306C23.9207 49.2716 22.2012 51.0576 22.2422 53.2198C22.2832 55.382 24.0692 57.1015 26.2314 57.0605C28.3936 57.0195 30.1131 55.2335 30.0721 53.0713Z" fill="currentColor"></path>
                <path d="M123.492 66.9646C123.492 64.802 121.739 63.0488 119.576 63.0488C117.413 63.0488 115.66 64.802 115.66 66.9646C115.66 69.1272 117.413 70.8804 119.576 70.8804C121.739 70.8804 123.492 69.1272 123.492 66.9646Z" fill="currentColor"></path>
                <path d="M84.0815 121.506C84.0815 119.343 82.3284 117.59 80.1658 117.59C78.0031 117.59 76.25 119.343 76.25 121.506C76.25 123.669 78.0031 125.422 80.1658 125.422C82.3284 125.422 84.0815 123.669 84.0815 121.506Z" fill="currentColor"></path>
                <path d="M123.652 129.693C122.122 128.164 119.643 128.164 118.114 129.693C116.585 131.223 116.585 133.702 118.114 135.231C119.643 136.76 122.122 136.76 123.652 135.231C125.181 133.702 125.181 131.223 123.652 129.693Z" fill="currentColor"></path>
                <path d="M221.777 80.112C220.247 78.5828 217.768 78.5828 216.239 80.112C214.71 81.6411 214.71 84.1204 216.239 85.6496C217.768 87.1788 220.247 87.1788 221.777 85.6496C223.306 84.1204 223.306 81.6411 221.777 80.112Z" fill="currentColor"></path>
                <path d="M169.945 49.2281V54.9619H175.679V49.2281H169.945Z" fill="currentColor"></path>
                <path d="M155.848 49.2281V54.9619H161.581V49.2281H155.848Z" fill="currentColor"></path>
                <path d="M141.766 49.2281V54.9619H147.499V49.2281H141.766Z" fill="currentColor"></path>
                <path d="M308.512 80.0182V85.752H314.246V80.0182H308.512Z" fill="currentColor"></path>
                <path d="M283.973 80.0182V85.752H289.706V80.0182H283.973Z" fill="currentColor"></path>
                <path d="M259.449 80.0182V85.752H265.183V80.0182H259.449Z" fill="currentColor"></path>
              </svg>
            </span>

            <span className="position-absolute start-0 bottom-0 mb-3 ms-n5">
              <svg className="text-primary opacity-1" width="453" height="138" viewBox="0 0 453 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.00186092 -0.000286079V0.792195H114.371L149.007 35.4047H250.047L255.688 29.7642L322.046 29.7642L345.774 53.5151L426.07 53.5151V52.7227L346.1 52.7227L322.373 28.995L255.362 28.995L249.721 34.6356H149.333L114.697 -0.000286079H-0.00186092Z" fill="currentColor"></path>
                <path d="M0.00357036 78.3851V79.1543L97.8277 79.1543L123.979 53.0026H178.684L188.799 42.9102L238.865 42.9102L271.38 75.425L364.682 75.425L370.719 69.3882H400.32V68.5957H370.393L364.356 74.6558H271.706L239.191 42.1177L188.473 42.1177L178.357 52.2334H123.653L97.5014 78.3851L0.00357036 78.3851Z" fill="currentColor"></path>
                <path d="M0.00180058 90.7848V91.554L103.769 91.554L128.896 66.4279L232.174 66.4279L274.595 108.849L314.661 108.849L323.495 100.038H410.551V99.2457H323.169L314.335 108.079L274.921 108.079L232.5 65.6587L128.569 65.6587L103.443 90.7848L0.00180058 90.7848Z" fill="currentColor"></path>
                <path d="M0.000130941 111.437V112.23L154.999 112.23L170.569 96.6364L243.01 96.6364L268.37 121.996H372.254V121.226H268.696L243.337 95.8672L170.243 95.8672L154.673 111.437L0.000130941 111.437Z" fill="currentColor"></path>
                <path d="M180.66 108.08V108.849H236.11L260.094 132.833H332.652V132.064H260.421L236.436 108.08H180.66Z" fill="currentColor"></path>
                <path d="M254.524 45.2641L276.596 67.3369H332.652V66.5677H276.923L255.083 44.7281L254.524 45.2641Z" fill="currentColor"></path>
                <path d="M272.099 83.4674V84.2365L356.404 84.2365L362.092 89.9004H446.84V89.1312H362.395L356.731 83.4674L272.099 83.4674Z" fill="currentColor"></path>
                <path d="M407.723 97.3488C409.253 95.8196 411.732 95.8196 413.261 97.3488C414.79 98.878 414.79 101.357 413.261 102.886C411.732 104.416 409.253 104.416 407.723 102.886C406.194 101.357 406.194 98.878 407.723 97.3488Z" fill="currentColor"></path>
                <path d="M443.993 86.6461C445.522 85.1169 448.001 85.1169 449.531 86.6461C451.06 88.1753 451.06 90.6546 449.531 92.1838C448.001 93.713 445.522 93.713 443.993 92.1838C442.464 90.6546 442.464 88.1753 443.993 86.6461Z" fill="currentColor"></path>
                <path d="M397.54 66.5524C399.069 65.0232 401.548 65.0232 403.077 66.5524C404.607 68.0816 404.607 70.5609 403.077 72.0901C401.548 73.6192 399.069 73.6192 397.54 72.0901C396.011 70.5609 396.011 68.0816 397.54 66.5524Z" fill="currentColor"></path>
                <path d="M422.229 53.0713C422.27 50.9091 424.056 49.1896 426.218 49.2306C428.38 49.2716 430.1 51.0576 430.059 53.2198C430.018 55.382 428.232 57.1015 426.069 57.0605C423.907 57.0195 422.188 55.2335 422.229 53.0713Z" fill="currentColor"></path>
                <path d="M328.809 66.9646C328.809 64.802 330.562 63.0488 332.725 63.0488C334.887 63.0488 336.641 64.802 336.641 66.9646C336.641 69.1272 334.887 70.8804 332.725 70.8804C330.562 70.8804 328.809 69.1272 328.809 66.9646Z" fill="currentColor"></path>
                <path d="M368.219 121.506C368.219 119.343 369.972 117.59 372.135 117.59C374.298 117.59 376.051 119.343 376.051 121.506C376.051 123.669 374.298 125.422 372.135 125.422C369.972 125.422 368.219 123.669 368.219 121.506Z" fill="currentColor"></path>
                <path d="M328.649 129.693C330.178 128.164 332.658 128.164 334.187 129.693C335.716 131.223 335.716 133.702 334.187 135.231C332.658 136.76 330.178 136.76 328.649 135.231C327.12 133.702 327.12 131.223 328.649 129.693Z" fill="currentColor"></path>
                <path d="M230.524 80.112C232.053 78.5828 234.533 78.5828 236.062 80.112C237.591 81.6411 237.591 84.1204 236.062 85.6496C234.533 87.1788 232.053 87.1788 230.524 85.6496C228.995 84.1204 228.995 81.6411 230.524 80.112Z" fill="currentColor"></path>
                <path d="M282.355 49.2281V54.9619H276.622V49.2281H282.355Z" fill="currentColor"></path>
                <path d="M296.453 49.2281V54.9619H290.719V49.2281H296.453Z" fill="currentColor"></path>
                <path d="M310.535 49.2281V54.9619H304.801V49.2281H310.535Z" fill="currentColor"></path>
                <path d="M143.789 80.0182V85.752H138.055V80.0182H143.789Z" fill="currentColor"></path>
                <path d="M168.328 80.0182V85.752H162.594V80.0182H168.328Z" fill="currentColor"></path>
                <path d="M192.852 80.0182V85.752H187.118V80.0182H192.852Z" fill="currentColor"></path>
              </svg>
            </span>

            <div className="row position-relative">
              <div className="col-md-8 mx-auto">
                <div className="swiper mt-2 mt-md-4" data-swiper-options='{
                  "spaceBetween": 30,
                  "autoplay":{
                    "delay": 4000, 
                    "disableOnInteraction": false,
                    "pauseOnMouseEnter": true
                  },
                  "pagination":{
                    "el":".swiper-pagination",
                    "clickable":"true"
                  }}'>
                  
                  <div className="swiper-wrapper mb-5">
                    <div className="swiper-slide">
                      <div className="text-center">
                        <ul className="list-inline mb-3">
                          <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-fill text-warning"></i></li>
                          <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-fill text-warning"></i></li>
                          <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-fill text-warning"></i></li>
                          <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-fill text-warning"></i></li>
                          <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-fill text-warning"></i></li>
                        </ul>
                        <blockquote className="mb-4">
                          <p className="fs-6 heading-color mb-0">
                            I used to send thousands of cold emails and don't get any response. Seefunnel helped me to create a sales page and and to track how people are engaging with my page. Now I am getting 30-40% response rate.
                          </p>
                        </blockquote>	
                        <div>
                          <h6 className="mb-0">Rishit Agarwal</h6>
                          <span>SkillifyMe.tech</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="swiper-pagination swiper-pagination-primary position-absolute bottom-0 mb-3"></div>
                </div>		
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="price-wrap overflow-hidden pt-0">
        <div className="container">
          <div className="row">
      <div className="col-xl-8 position-relative">
              
          <div className="position-absolute end-0 top-0 me-xl-n4 z-index-2 d-none d-sm-block">
              <img src="assets/images/elements/money-hand.png" alt="decoration" />
          </div>

          <div className="inner-container-small ms-0 mb-4 mb-lg-6">
              <h2 className="mb-sm-4">Affordable solutions for every budget</h2>
              <p>Need guidance? <a target="_blank" href="https://calendly.com/seefunnelofficials/30min" className="link-purple hover-underline-animation">Reserve a 30-minute call</a></p>
          </div>

          <form className="d-flex align-items-center mb-4">
              <span className="fw-semibold">Monthly</span>
              <div className="form-check form-switch form-check-lg mx-2 mb-0">
                  <input className="form-check-input mt-0 price-toggle" type="checkbox" id="flexSwitchCheckDefault" />
              </div>
              <div className="position-relative">
                  <span className="fw-semibold">Lifetime</span>
              </div>
          </form>

          <ul className="nav nav-pills-secondary nav-responsive gap-3 gap-xxl-4" id="myTab" role="tablist">
              <li className="nav-item col" role="presentation" style={{ minWidth: '14rem' }}>
                  <a href="#!" className="nav-link p-4 rounded-4 active" id="starter-plan" role="tab" data-bs-toggle="tab" data-bs-target="#starter-plan-pane" aria-controls="starter-plan-pane" aria-selected="true">
                      <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                          <img src="assets/images/elements/rocket.png" className="h-40px" alt="rocket image" />
                      </div>
                      <p className="heading-color fw-semibold mb-3">Basic</p>
                      <span className="mb-0 price-text">
                          <span className="h2 mb-0 plan-price" data-monthly-price="$9.99" data-annual-price="$99.99">$9.99</span>
                          <br /><span className="billing-cycle">/month</span>
                      </span>
                  </a>
              </li>

              <li className="nav-item col" role="presentation" style={{ minWidth: '14rem' }}>
                  <a href="#!" className="nav-link p-4 rounded-4" id="professional-plan" role="tab" data-bs-toggle="tab" data-bs-target="#professional-plan-pane" aria-controls="professional-plan-pane" aria-selected="false">
                      <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                          <img src="assets/images/elements/thunder.png" className="h-40px" alt="" />
                      </div>
                      <p className="heading-color fw-semibold mb-3">Starter</p>
                      <span className="price-text">
                          <span className="h2 plan-price fw-bold" data-monthly-price="$29.99" data-annual-price="$249.99">$29.99</span>
                          <span className="billing-cycle">/month</span>
                      </span>
                  </a>
              </li>

              <li className="nav-item col" role="presentation" style={{ minWidth: '14rem' }}>
                  <a href="#!" className="nav-link p-4 rounded-4" id="enterprise-plan" role="tab" data-bs-toggle="tab" data-bs-target="#enterprise-plan-pane" aria-controls="enterprise-plan-pane" aria-selected="false">
                      <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                          <img src="assets/images/elements/fire.png" className="h-40px" alt="fire image" />
                      </div>
                      <p className="heading-color fw-semibold mb-3">Premium</p>
                      <span className="price-text">
                          <span className="h2 plan-price fw-bold" data-monthly-price="$49.99" data-annual-price="$499.99">$49.99</span>
                          <span className="billing-cycle">/month</span>
                      </span>
                  </a>
              </li>
          </ul>
      </div>


            <div className="col-xl-4 mt-5 mt-xl-0">
              <div className="tab-content" id="myTabContent" data-bs-theme="dark">
                <div className="tab-pane fade show active" id="starter-plan-pane" role="tabpanel" aria-labelledby="starter-plan" tabIndex="0">
                  <div className="card bg-dark p-4 p-sm-5 rounded-4">
                    <div className="card-body p-0">
                      <h5 className="mb-3">Included features</h5>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>2 Sales Pages</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>200 Valid Leads</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>800 Engagements</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>A/B Testing</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Unlimited Contacts</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>9 AM - 5 PM PST Support</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Reports</li>
                      </ul>
                    </div>
          
                    <div className="card-footer bg-transparent text-center mt-0 mt-xl-6 p-0">
                      <a href="https://app.seefunnel.com/auth/firebase/register" target="_blank" className="btn btn-primary w-100 mb-2">Get started</a>
                    </div>
                  </div>
                </div>	

                <div className="tab-pane fade" id="professional-plan-pane" role="tabpanel" aria-labelledby="professional-plan" tabIndex="0">
                  <div className="card bg-dark p-4 p-sm-5 rounded-4">
                    <div className="card-body p-0">
                      <h5 className="mb-3">Included features</h5>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>5 Sales Pages</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>800 Valid Leads</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>1,200 Engagements</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>A/B Testing</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Unlimited Contacts</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>24/7 Support</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Reports</li>
                      </ul>
                    </div>
          
                    <div className="card-footer bg-transparent text-center mt-0 mt-xl-6 p-0">
                      <a href="https://app.seefunnel.com/auth/firebase/register" target="_blank" className="btn btn-primary w-100 mb-2">Get started</a>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="enterprise-plan-pane" role="tabpanel" aria-labelledby="enterprise-plan" tabIndex="0">
                  <div className="card bg-dark p-4 p-sm-5 rounded-4">
                    <div className="card-body p-0">
                      <h5 className="mb-3">Included features</h5>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>12 Sales Pages
      </li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>2,000 Valid Leads
      </li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>2,500 Engagements</li>

                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>A/B Testing
      </li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Unlimited Contacts
      </li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Dedicated Support Person</li>
                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-success me-1"></i>Reports</li>
                      </ul>
                    </div>
          
                    <div className="card-footer bg-transparent text-center mt-0 mt-xl-6 p-0">
                      <a href="https://app.seefunnel.com/auth/firebase/register" target="_blank" className="btn btn-primary w-100 mb-2">Get started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-0">
        <div className="container">
          <div className="bg-dark position-relative rounded-4 overflow-hidden p-4 p-sm-6" data-bs-theme="dark">
            <div className="position-absolute top-0 end-0 mt-n6">
              <img src="assets/images/elements/grad-shape/blur-decoration.svg" className="blur-8 opacity-3" alt="Grad shape" />
            </div>

            <div className="row g-4 align-items-center position-relative">
              <div className="col-lg-6">
                <h2 className="mb-3">Experience the Power of <span className="text-purple">AI Reps</span></h2>
                <p className="mb-4">Our AI reps offers enhancing customer satisfaction and boosting your business efficiency.</p>
                <a href="https://app.seefunnel.com/auth/firebase/register" target="_blank" className="btn btn-outline-secondary mb-0">Create free account</a>
              </div>

              <div className="col-lg-6 position-absolute end-0 top-0 mt-n3 me-n5 d-none d-lg-block">
                <img src="assets/images/elements/chatbot-cta.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home