export const metadata = {
  title: "Hi3els Lab",
  description: "Premium digital brand by Anees"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white font-sans">
        <header className="p-4 bg-slate-800 shadow-md flex items-center">
          <img src="/logo.png" alt="Hi3els Lab Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold">Hi3els Lab</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-slate-800 text-center text-sm">
          © {new Date().getFullYear()} Hi3els Lab. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
