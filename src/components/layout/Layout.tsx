import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col grow">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Layout