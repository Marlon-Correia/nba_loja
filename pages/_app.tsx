import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthProvider'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
    
  )
  }

export default MyApp
