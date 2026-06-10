import { Link } from "react-router-dom"
import { Button } from "@/components/atoms/button"

function NotFoundPage() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-16">
      <div className="surface-panel max-w-xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to portfolio</Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Prefer client-side navigation?{" "}
          <Link to="/" className="text-accent hover:text-accent/80">
            Go home
          </Link>
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
