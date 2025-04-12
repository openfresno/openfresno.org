'use client'

import Link from 'next/link'
import ExtendedNavbarMenu from './ExtendedNavbarMenu'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import useBanner from '@/hooks/useBanner'

/**
 * Set toolbar opacity. Based on the scroll y-axis.
 * @param {number} currentScrollHeight
 * @returns {number} opacity Ranges from 0 to 1.
 */
function setOpacity(currentScrollHeight) {
  // Start transparent and reach full opacity by the amount in pixels.
  return Math.min(currentScrollHeight / 520, 1)
}

/**
 * Set the navbar to fade on scroll.
 * @param setFadeLayout
 * @param setCurrentScrollHeight
 * @returns {function(): void} Cleanup function to remove event listener
 */
function registerNavbarFadeLayout(setFadeLayout, setCurrentScrollHeight) {
  setFadeLayout(true)
  const onScroll = () => {
    setCurrentScrollHeight(window.scrollY)
  }
  window.removeEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

/**
 * Default application navigation bar. Links animate on page change. Extended menu that shows more text underneath the navbar.
 * - Desktop: Multiple navigation links in the center. Link on the right side to show extended menu.
 * - Mobile: All menu items are in collapsable menu.
 * @param {boolean} fade - Whether to enable fade effect on scroll
 * @returns {JSX.Element}
 */
export default function AppNavbar({ fade = false }) {
  const [extendedMenuVisible, showExtendedMenu] = useState(false)
  const [fadeLayout, setFadeLayout] = useState(fade)
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0)
  const backgroundOpacity = setOpacity(currentScrollHeight)
  const websiteURL = usePathname()
  const { dismissBanner } = useBanner({
    id: 'community-support-statement-2025-banner',
  })

  useEffect(() => {
    showExtendedMenu(false)
    if (currentScrollHeight === 0) setCurrentScrollHeight(window.scrollY)

    // Only register navbar fade layout if fade is true
    if (fade) {
      return registerNavbarFadeLayout(setFadeLayout, setCurrentScrollHeight)
    }
    return () => {}
  }, [websiteURL, fade])

  return (
    <div className="navbar-container">
      <nav
        className="navbar-toolbar"
        style={
          fadeLayout && !extendedMenuVisible
            ? {
                backgroundColor: `rgba(6, 7, 23, ${backgroundOpacity})`,
                boxShadow:
                  backgroundOpacity > 0.2
                    ? `0 2px 4px rgba(0, 0, 0, ${backgroundOpacity * 0.1})`
                    : 'none',
              }
            : { backgroundColor: 'rgba(6, 7, 23, 1)' }
        }
      >
        <div className={'navbar-toolbar-main'}>
          <div className={'navbar-toolbar-content container-xxl'}>
            <div className={'navbar-left-container'}>
              <Link className={'navbar-left-section'} href="/">
                <img
                  src="/img/logo_opensac_black_transparent_2.png"
                  alt="Open Fresno logo"
                  height="60"
                  width="200"
                />
              </Link>
            </div>

            <div className={'navbar-middle-container'}>
              <ul className={'navbar-middle-section'}>
                <li
                  className={`navbar-link ${
                    websiteURL === '/' ? 'navbar-link-selected one' : ''
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`navbar-link ${
                    websiteURL === '/about' ? 'navbar-link-selected two' : ''
                  }`}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`navbar-link ${
                    websiteURL === '/contact'
                      ? 'navbar-link-selected three'
                      : ''
                  }`}
                >
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={`navbar-link`}>
                  <Link href="/donate">Donate</Link>
                </li>
                <hr className={'navbar-underline'} />
              </ul>
            </div>

            <div
              className={`navbar-right-container ${
                extendedMenuVisible
                  ? 'navbar-extend-background-active'
                  : 'navbar-extend-background-inactive'
              }`}
            >
              <div
                className={`navbar-right-section`}
                onClick={() => {
                  showExtendedMenu(!extendedMenuVisible)
                }}
              >
                <div className={`navbar-nested-parent-link`}>
                  <div
                    className={`${
                      extendedMenuVisible
                        ? 'navbar-toggle-extend-button-extended'
                        : 'navbar-toggle-extend-button'
                    }`}
                  >
                    <span
                      className={`navbar-extend-button-text ${
                        extendedMenuVisible
                          ? 'navbar-extend-button-text-extended'
                          : null
                      }`}
                    >
                      Get Involved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {extendedMenuVisible ? (
          <div className={'navbar-toolbar-extended'}>
            <ExtendedNavbarMenu visible={extendedMenuVisible} />
          </div>
        ) : null}
      </nav>
    </div>
  )
}
