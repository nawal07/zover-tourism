import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-midnight text-pearl">
        <div className="text-center">
          <h1 className="text-4xl font-heading">404</h1>
          <p className="mt-2 text-muted">Page not found</p>
          <Link
            href="/"
            className="mt-6 inline-block text-gold underline-offset-4 hover:underline"
          >
            Return home
          </Link>
        </div>
      </body>
    </html>
  );
}
