import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";


function Navbar() {
  return (
    <nav className=''>
      <div>
        <LinksDropdown/>
      </div>
      <div>
        <ThemeToggle/>
        <UserButton/>
      </div>
    </nav>
  )
}

export default Navbar