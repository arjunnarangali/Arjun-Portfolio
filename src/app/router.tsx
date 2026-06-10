import { Suspense, lazy } from "react"
import type { ComponentType, LazyExoticComponent } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const HomePage = lazy(() => import("../pages/home-page"))
const NotFoundPage = lazy(() => import("../pages/not-found-page"))

function RouteLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-muted-foreground">
      Loading portfolio experience...
    </div>
  )
}

function renderLazyPage(Page: LazyExoticComponent<ComponentType>) {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Page />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: renderLazyPage(HomePage),
    errorElement: renderLazyPage(NotFoundPage),
  },
  {
    path: "*",
    element: renderLazyPage(NotFoundPage),
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
