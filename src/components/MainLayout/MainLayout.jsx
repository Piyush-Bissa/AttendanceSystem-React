import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function MainLayout({ children }) {
  return (
    <div className="bg-[#01000e] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout