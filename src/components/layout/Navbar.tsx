import Link from "next/link"
import { ReactChild, ReactNode, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { SITE_TITLE } from "../../constants/constants"
import { UserContext } from "../../contexts/UserContext"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import Logo from "../Logo"

const Navbar = () => {
  const { username, setUsername } = useContext(UserContext)
  const {
    systemTheme,
    theme,
    setTheme
  } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    setUsername("")
  }

  const renderThemeChanges = () => {
    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "light") {
      return (
        <MoonIcon className="w-5 h-5 fill-white-200" role="button" onClick={() => setTheme("dark")} />
      )
    } else {
      return (
        <SunIcon className="w-5 h-5 fill-white-200" role="button" onClick={() => setTheme("light")} />
      )
    }
  }

  return (
    <header className="flex justify-between items-center bg-green-600 text-white py-4 px-4 dark:bg-black">
      <h2 className="text-lg">
        <Logo siteTitle={SITE_TITLE}/>
      </h2>
      <nav>
        <ul className="flex items-center">
          {username ? (
            <>
              <NavLink href="/">Timer</NavLink>
              <NavLink href="/stats">Stats</NavLink>
              <button
                onClick={handleLogout}
                className="border py-1 px-3 ml-8 rounded hover:bg-green-700"
                type="button"
              >
                Logout
              </button>
            </>
            ) : (
              <>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/signup">Signup</NavLink>
                </>
            )}
            <NavLink title={theme === "light" ? "Dark Mode" : "Light Mode"}>
              {renderThemeChanges()}
            </NavLink>
            <NavLink
              target="_blank"
              title="Github"
              href="https://github.com/tuanluu-agilityio/timer-app"
            >
              <span className="sr-only">Super Simple Task Timer on Github</span>
              <svg viewBox="0 0 16 16" className="w-5 h-5 hover:fill-lime-200" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </NavLink>
        </ul>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href?: string
  children: ReactNode
  extraClasses?: string
  target?: string
  title?: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, extraClasses, target, title }) => {
  return (
    <li className="ml-8">
      {href ? (
        <Link href={href}>
          <a className={extraClasses} target={target} title={title}>{children}</a>
        </Link>
      ) : (
        <a className={extraClasses} target={target} title={title}>{children}</a>
      )}
    </li>
  )
}

export default Navbar