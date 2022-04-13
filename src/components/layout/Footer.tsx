import { SITE_TITLE } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white text-center py-4 dark:bg-black">
      <p className="mb-1 dark:text-gray-100">{SITE_TITLE} &copy;</p>
      <p className="dark:text-gray-100">Designed & developed by Tuan.Luu</p>
    </footer>
  )
}

export default Footer