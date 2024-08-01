


import React from 'react'
import Banner from '../assets/images/mobile.png';
import wlogo from '../assets/images/w-logo.jpg';
import blogo from '../assets/images/b-logo.jpg';
import sbutext from '../assets/images/sbl-logo.jpg';
import csslogo from '../assets/images/css-logo.jpg';
import adlogo from '../assets/images/ad-logo.jpg';
import vcode from '../assets/images/vc-logo.jpg';
import pslogo from '../assets/images/ps-logo.jpg';
import ailogo from '../assets/images/ai-logo.jpg';
import htmllogo from '../assets/images/h5-logo.jpg';
import sklogo from '../assets/images/sk-logo.jpg';
import fglogo from '../assets/images/fg-logo.jpg';
import axdlogo from '../assets/images/axd-logo.jpg';
import webflow from '../assets/images/wf-logo.jpg';
import shyam from '../assets/images/no-image.jpg';
import bfly from '../assets/images/befly.png'

const Body = () => {
  return (
    <>
    <div className='banner'>
      <div className='banner-containt'>
        <div className='banner-title'>
        <h1>
        Hello,
        </h1>
        <h3>
        I am ProLife Web Developer & UI/UX Designer
        </h3>
        <h2>
         Web and Mobile Design / HTML Developer
        </h2>
        </div>
        <div className='buttonsWrap'>
        <button className='button' type='button'>More About Me</button>
        </div>
      </div>
    <div className='banner-img'>
      <div className='befly'>
      </div>
        <div className='circle'></div>
        <img src={Banner} alt="" />
      </div>
    </div>
    <div className='meAbout-wrap clearfix'>
    <div className='title-wrap clearfix mb'>
      <div className='meAbout'>
      <img src={shyam} alt="" />
      </div>
      <div className='meAbout-text'>
      <div className='page-title'>
        <h1>
        About Me
        </h1>
        </div>
        <div className='Page-pare'>
        <p>
        I Have specialize in These Fields, and i didt compromise in quality of Work.
        </p>
        </div>
      </div>        
      </div>
      <div className='btn-center btn-mrg'>
      <button className='button' type='button'>More About Me</button>
      </div>
    </div>

    <div className='title-wrap'>
        <div className='page-title'>
        <h1>
        My Featured Skills
        </h1>
        </div>
        <div className='Page-pare'>
        <p>
        I Have specialize in These Fields, and i didt compromise in quality of Work.
        </p>
        </div>
      </div>
    <div className='WrapMain'>
    <div className='wrap'>
      <div className="Bx-container skill-block">

      <div className='BrandWrap' style={{display:'none'}}>
          <div className='BrandImg'>
          <img src={pslogo} alt="" className='Brandradius' />
          </div>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          WordPress
          </div>
          <div className="skill-item">
            <div className="skill-header clearfix">
            <div className="skill-percentage"><div className="count-box counted">
              <span className="count-text" data-speed="2000" data-stop="95">95</span>%</div></div>
            </div>
            <div className="skill-bar">
              <div className="bar-inner">
                <div className="bar progress-line" data-width="95" style={{width:'95%'}}></div>
                </div>
							</div>
						</div>
            <div className='Brand-pare'>
            <p>
          Developed Your theme & customization Work
website with WordPress.
            </p>
          </div>
        </div>
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={fglogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Figma
          </div>         
          </div>
        </div> 
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={sklogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Sketch
          </div>         
          </div>
        </div> 
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={axdlogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Adobe XD
          </div>         
          </div>
        </div>
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={pslogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Adobe Photoshop
          </div>         
          </div>
        </div> 
        
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={ailogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Adobe illustrator
          </div>         
          </div>
        </div> 
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={adlogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Adobe Dreamweaver
          </div>         
          </div>
        </div>  
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={blogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Boostrap
          </div>         
          </div>
        </div>   
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={csslogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          CSS 3
          </div>         
          </div>
        </div>    
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={htmllogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          HTML 5
          </div>         
          </div>
        </div>
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={webflow} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Webflow
          </div>         
          </div>
        </div> 
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={vcode} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Visual studio code
          </div>         
          </div>
        </div> 
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={wlogo} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Wordpress
          </div>         
          </div>
        </div>
        <div className='BrandWrap'>
          <div className='BrandImg'>
          <img src={sbutext} alt="" className='Brandradius' />
          </div>
          <div className='BarndDtls'>
          <div className='BrandExp'>
          Seninor
          </div>
          <div className='BarndName'>
          Sublime Code Editor
          </div>         
          </div>
        </div>
      </div>
     </div>
    </div>
  <div>
    
<div className='title-wrap'>
        <div className='page-title'>
        <h1>
        My Journey
        </h1>
        </div>
        <div className='Page-pare'>
        <p>
        I Have specialize in These Fields, and i didt compromise in quality of Work.
        </p>
        </div>
      </div>
<ul class="timeline">
<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag vt-logo">
      Varna Technologies
        </span>
    </div>
    <div class="desc">Worked as a Web designer in Varna Technologies (Hyderabad), from Januray 2007 to 2009 November.</div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag sfa-logo">Softforce Apps</span>
    </div>
    <div class="desc">Worked as a Web designer in Softforceapps (Hyderabad), from Januray 2009 to 2014 December.</div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag inds-logo">Induco solutions</span>
    </div>
    <div class="desc">Worked as a Web designer in Induco Solutions (Hyderabad), from Januray 2014 to 2016 Januray.</div>
  </div>
</li>
<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag reh-logo">Rehlat Online Service</span>
    </div>
    <div class="desc">Worked as a UI/UX designer in Rehlat Online Services (Hyderabad), from February 2016 to 2020 June.</div>
  </div>
</li>
<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag sf-logo">Softforce Apps</span>
    </div>
    <div class="desc">Presently working Softforceapps (Hyderabad), as a UI/UX designer July 2020 to till date. I have working in UI designs projects mobile apps and web site designs.</div>
  </div>
</li>

</ul>
     </div>
    </>
  )
}

export default Body
