import './globals.css'

export const metadata = {
  title: 'Instagram App',
  description: 'An Instagram clone in Nextjs 13 and Tailwind v3',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        
        {children}</body>
    </html>
  )
}
