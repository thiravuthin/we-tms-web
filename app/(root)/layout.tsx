import { AuthLayout } from '@/components/layout'
import React, { PropsWithChildren } from 'react'

const Layout = async ({ children }: PropsWithChildren) => {
  return (
      <html lang="en">
          <body>
              <AuthLayout>
                  {children}
              </AuthLayout>
          </body>
      </html>
  )
}

export default Layout