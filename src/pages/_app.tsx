import { ActionProvider } from '@/context/action'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ActionProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
      
          // Default options for specific types
          success: {
            duration: 3000,
          },
      }}
      />
      <Component {...pageProps} />
    </ActionProvider>
  </>
  )
}
