'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
});

const AuthLayout = ({children}: PropsWithChildren) => {
  return (
    <React.Fragment>
         <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999
        }}
        toastOptions={{
          style: {
            pointerEvents: "none"
          }
        }}
      />
      <SessionProvider>
          <QueryClientProvider client={queryClient}>
              {children}
          </QueryClientProvider>
      </SessionProvider>
      </React.Fragment>
  )
}

export default AuthLayout