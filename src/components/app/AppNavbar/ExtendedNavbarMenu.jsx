import React, {useState} from 'react'
import Link from 'next/link'

/**
 * Dropdown menu for navbar.
 * @returns {JSX.Element}
 */
const ExtendedNavbarMenu = (visible) => {
  function hide() {
    visible = false
  }

  const [mobileNavPosition, toggleMobileNavPosition] = useState(false)

  return (
    <div className="dropdown-menu" style={visible ? {} : {display: 'none'}}>
      <div className={'navbar-extended-mobile-container'}>
        <div className={`navbar-extended-mobile-content`} style={mobileNavPosition ? {display: 'none'} : {}}>
          <Link className={'mobile-nav-link'} href="/">Home</Link>
          <Link className={'mobile-nav-link'} href="/about">About</Link>
          <Link className={'mobile-nav-link'} href="/contact">Contact</Link>
          <Link className={'mobile-nav-link'} href="#">Donate</Link>
          <div>
           <span className={'navbar-extended-mobile-content-button-01'}
                 onClick={() => toggleMobileNavPosition(!mobileNavPosition)}>Get Involved</span>
          </div>
        </div>
        <div className={'navbar-extended-mobile-content'} style={!mobileNavPosition ? {display: 'none'} : {}}>
          <Link className={'mobile-nav-link'} href="/get-started">Get Started</Link>
          <Link className={'mobile-nav-link'} href="/projects">Projects</Link>
          <Link className={'mobile-nav-link'} href="/pitch">Pitch a Project</Link>
          <Link className={'mobile-nav-link'} href="https://www.meetup.com/code4sac/">Meetup</Link>
          <Link className={'mobile-nav-link'} href="/faq">FAQs</Link> 
          <div>
           <span className={'navbar-extended-mobile-content-button-02'}
                 onClick={() => toggleMobileNavPosition(!mobileNavPosition)}>Back</span>
          </div>
        </div>

      </div>
      <div className={'navbar-extended-desktop-container container-xxl'}>
        <div className="navbar-extended-desktop-section-item">
          <div className="navbar-extended-text-wrapper-2">Get Started</div>
          <p className="navbar-extended-desktop-section-content">
            Get started today and volunteer with us to drive positive change through technology, making a meaningful
            impact in your community!
          </p>
          <Link href="/get-started" className="navbar-extended-button" onClick={hide}>Get Started</Link>
        </div>
        <div className="navbar-extended-desktop-section-item">
          <div className="navbar-extended-text-wrapper-2">Projects</div>
          <p className="navbar-extended-desktop-section-content">
            Explore our projects and discover how you can contribute your skills to drive innovation and create positive
            change.
          </p>
          <Link href="/projects" className="navbar-extended-button">See Projects</Link>
        </div>
        <div className="navbar-extended-desktop-section-item">
          <div className="navbar-extended-text-wrapper-2">Pitch a Project</div>
          <p className="navbar-extended-desktop-section-content">
            Get the latest information and guidance for anyone who want to propose new projects or ideas to the Open
            Fresno community.
          </p>
          <Link href="/pitch" className="navbar-extended-button">Pitch a Project</Link>
        </div>
        <div className="navbar-extended-desktop-section-item">
          <p className="section-content-2">
            Join us for our weekly meetings on <Link href="https://www.meetup.com/code4sac/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-wrapper-3">meetup</Link>.
          </p>
          <p className="section-content-2">
            For any questions, visit our <Link href="/faq" className="text-wrapper-3">FAQs</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExtendedNavbarMenu