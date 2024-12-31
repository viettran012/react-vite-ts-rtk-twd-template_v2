import { ReactNode } from "react"
import { useHistory } from "../hooks/useHistory"

interface IProps {
  children: ReactNode
}

export const NavigationHoc: React.FC<IProps> = ({ children }) => {
  useHistory()
  return children
}
