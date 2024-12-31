import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { NavigationHoc } from "./hocs/NavigationHoc"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const Layout: any = route.layout
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <NavigationHoc>
                  <Layout>{Page ? <Page /> : null}</Layout>
                </NavigationHoc>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
