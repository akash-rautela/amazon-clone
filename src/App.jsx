import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import Header from './components/Header'
import Footer2 from './components/Footer2'
import Footer from './components/Footer'
import MainBody from './components/mainBody'

function App() {
  return (
    <>
      <Header />
      <MainBody/>

      <Footer2 />
      <Footer />

    </>
  )
}

export default App
