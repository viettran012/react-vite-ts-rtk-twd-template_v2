import { Fragment, ReactNode } from "react"
import { routeConfig } from "./routeConfig"
import { InvitationCard } from "../pages/InvitationCard"

export interface IRoute {
  path: string
  component: React.FC<{}> | null
  layout: React.FC<{ children: ReactNode }>
  useMenu?: boolean
  useFullScreen?: boolean
  useMonitor?: boolean
  useTab?: boolean
  hiddenBreadcrumbHead?: boolean
}

export const routes: IRoute[] = [
  {
    path: routeConfig?.invitedCard,
    component: InvitationCard,
    layout: Fragment,
  },
]
