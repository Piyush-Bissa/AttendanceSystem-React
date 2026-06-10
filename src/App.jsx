import './Animation.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import StudentDashboard from './Pages/StudentDashboard'
import FacultyDashboard from './Pages/FacultyDashboard'
import StudentLogin from './Pages/StudentLogin'
import StudentLayout from './components/Layout/StudentLayout'
import BunkCalculator from './Pages/BunkCalculator'
import MyAttendance from './Pages/MyAttendance'
import History from './Pages/History'
import MainLayout from './components/MainLayout/MainLayout'
import Features from './Pages/Features'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />

        <Route path='/features' element={
          <MainLayout>
            <Features />
          </MainLayout>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/student/login' element={<StudentLogin />} />

        <Route path='/student/dashboard' element={
          <ProtectedRoute>
          <StudentLayout>
            <StudentDashboard />
          </StudentLayout>
          </ProtectedRoute>
        } />

        <Route path='/student/attendance' element={
          <ProtectedRoute>
          <StudentLayout>
            <MyAttendance />
          </StudentLayout>
          </ProtectedRoute>
        } />

        <Route path='/student/bunk-calculator' element={
          <ProtectedRoute>
          <StudentLayout>
            <BunkCalculator />
          </StudentLayout>
          </ProtectedRoute>
        } />

        <Route path='/student/history' element={
          <ProtectedRoute>
          <StudentLayout>
            <History />
          </StudentLayout>
          </ProtectedRoute>
        } />

        <Route path='/faculty/dashboard' element={<FacultyDashboard />} />
        <Route path='*' element={<Navigate to='/' replace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App