import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { AppRouter } from './router'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: 'Inter, sans-serif',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          },
        }}
      />
    </BrowserRouter>
  )
}

export default App
