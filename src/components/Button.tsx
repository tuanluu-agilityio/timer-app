interface Props {
  children: React.ReactNode
  color: "primary" | "success" | "secondary" | "warning" | "danger"
  handleClick?: () => void
  type?: "button" | "submit"
  extraClasses?: string
}

const Button: React.FC<Props> = ({
  children,
  color,
  handleClick,
  type,
  extraClasses,
}) => {
  let colors: string
  switch(color) {
    case "primary":
      colors = "bg-blue-500 hover:bg-blue-600"
      break
    case "success":
      colors = "bg-green-500 hover:bg-green-600"
      break
    case "warning":
      colors = "bg-yellow-300 hover:bg-yellow-400 text-black dark:text-white"
      break
    case "secondary":
      colors = "bg-pink-500 hover:bg-pink-600"
      break
    default:
      colors = "bg-red-500 hover:bg-red-600"
  }

  const classes = `rounded text-white py-2 px-4 ${colors} ${extraClasses} dark:bg-gray-800`

  return (
    <button className={classes} type={type} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button