import { createContext, useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HostCar from './pages/HostCar'
import Dashboard from './pages/Dashboard'
import { useAuth } from './hooks/useAuth'
import { useCars } from './hooks/useCars'
import { useBookings } from './hooks/useBookings'
import { useScrollToTop } from './hooks/useScrollToTop'

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AVATAR_COLORS = [
  { color: '#ede8fc', textColor: '#5b3db5' },
  { color: '#e8f4fd', textColor: '#1a6fa8' },
  { color: '#edf7ed', textColor: '#1e7e34' },
  { color: '#fef3e2', textColor: '#b06000' },
  { color: '#fce8f3', textColor: '#a0196e' },
]

function App() {
  useScrollToTop()
  const { user, login, register, logout: authLogout } = useAuth()
  const { cars, myCars, favorites, addCar, toggleFavorite, resetCars } = useCars(user)
  const { bookings, addBooking: addBookingBase, resetBookings } = useBookings()
  const [reviews, setReviews] = useState([])

  const logout = () => {
    authLogout()
    resetBookings()
    resetCars()
  }

  const addBooking = (booking) => addBookingBase(booking, user?.id)

  const addReview = (carId, { rating, comment }) => {
    const c = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
    setReviews(prev => [{
      id: Date.now(),
      carId,
      author: user.name,
      name: user.name,
      avatar: user.name[0].toUpperCase(),
      color: c.color,
      textColor: c.textColor,
      rating,
      comment,
      text: comment,
      date: new Date().toLocaleDateString('az-AZ', { month: 'long', year: 'numeric' }),
    }, ...prev])
  }

  return (
    <AppContext.Provider value={{
      user, cars, bookings, favorites, myCars, reviews,
      login, register, logout, addBooking, toggleFavorite, addCar, addReview,
    }}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/car/:id"   element={<CarDetail />} />
            <Route path="/search"    element={<Search />} />
            <Route path="/signin"    element={<SignIn />} />
            <Route path="/signup"    element={<SignUp />} />
            <Route path="/host"      element={<HostCar />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
