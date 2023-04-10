import './globals.css'
import MySessionProvider from './mySessionProvider'

export const metadata = {
  title: 'Instagram App',
  description: 'An Instagram clone in Nextjs 13 and Tailwind v3',

}

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  
  return (
    <html lang="en">
      <body>
        <MySessionProvider>
          {children}
        </MySessionProvider>
      </body>
    </html>
  )
}
