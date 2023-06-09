import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Loginpage";
import Register from "./pages/Registerpage";
import React from "react";
import { useSelector } from "react-redux";
import Spinner from "./components/spinner";
import ProtectedRoutes from "./components/protectedRoutes";
import PublicRoutes from "./components/publicRoutes";
import Notificationpage from "./pages/Notificationpage";
import Users from "./pages/admin/Users";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import ApplyAttendee from "./pages/ApplyAttendee";
import ApplyVolunteer from "./pages/applyVolunteer";
import Volunteers from "./pages/admin/Volunteers";
import Attendees from "./pages/doctor/attendees";
// import DashBoard from "./pages/admin/DashBoard";
import Attendance from "./pages/doctor/attendance"; 
import CreateSession from "./pages/admin/createSession";
import AttendeeProfile from "./pages/doctor/attendeeProfile";
import Sessions from "./pages/session/sessions";
import SessionInfo from "./pages/session/sessionInfo"; 
import DashBoard from "./pages/admin/Dashboard/src/DashBoard";
import CreateCommunity from "./pages/admin/createCommunity";
import AttendeeSession from "./pages/admin/attendeeSession";
import CommunityPage from "./pages/admin/createCommunity";
import Community from "./pages/admin/Community";
// import Doughnut from "./pages/admin/Dashboard/src/Doughnut";
import fetchCommunityData from "./pages/admin/Community";
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
      {loading ? (

      <Spinner/>) : 
      (
      <Routes>
          <Route path="/" 
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          } 
        /> 
        <Route path="/apply-attendee" 
          element={
            <ProtectedRoutes>
              <ApplyAttendee />
            </ProtectedRoutes>
          } 
        />  
        <Route path="/sessionInfo" 
          element={
            <ProtectedRoutes>
              <SessionInfo />
            </ProtectedRoutes>
          } 
        /> 
        <Route path="/admin/volunteers" 
          element={
            <ProtectedRoutes>
              <Volunteers />
            </ProtectedRoutes>
          } 
        />    
        <Route path="/admin/community" 
          element={
            <ProtectedRoutes>
              <CommunityPage />
            </ProtectedRoutes>
          } 
        />   
          <Route path="/createcommunity" 
          element={
            <ProtectedRoutes>
             <Community/>
            </ProtectedRoutes>
          } 
        />   
         <Route path="/admin/dashboard" 
          element={
            <ProtectedRoutes>
              <DashBoard />
            </ProtectedRoutes>
          } 
        />   
        <Route path="/attendeeProfile/:id" 
          element={
            <ProtectedRoutes>
              <AttendeeProfile />
            </ProtectedRoutes>
          } 
        /> 
        <Route path="/sessions" 
          element={
            <ProtectedRoutes>
              <Sessions />
            </ProtectedRoutes>
          } 
        />  
        <Route path="/attendees" 
          element={
            <ProtectedRoutes>
              <Attendees />
            </ProtectedRoutes>
          } 
        />  
        <Route path="/attendance/:sessionId" 
          element={
            <ProtectedRoutes>
              <Attendance />
            </ProtectedRoutes>
          } 
        />   
        <Route path="/admin/sessionAttended/:id" 
          element={
            <ProtectedRoutes>
              <AttendeeSession />
            </ProtectedRoutes>
          } 
        />  
         <Route path="/admin/sessions" 
          element={
            <ProtectedRoutes>
              <CreateSession />
            </ProtectedRoutes>
          } 
        /> 
        <Route path="/admin/users" 
          element={
            <ProtectedRoutes> 
              <Users /> 
            </ProtectedRoutes>
          } 
        />
        <Route path="/notification" 
          element={
            <ProtectedRoutes>
              <Notificationpage />
            </ProtectedRoutes>
          } 
        /> 
        <Route path="/apply-volunteer" 
          element={
            <ProtectedRoutes>
              <ApplyVolunteer />
            </ProtectedRoutes>
          } 
        />
          <Route path="/login" 
          element={
            <PublicRoutes>
            <Login />
            </PublicRoutes>
          } w
        />
          <Route path="/register"
           element={
            <PublicRoutes>
             <Register />
            </PublicRoutes>
          }
        /> 
        <Route path="/doctor/profile/:id"
           element={
            <ProtectedRoutes>
             <Profile />
            </ProtectedRoutes>
          }
        />  
        <Route path="/doctor/updateProfile/:id"
           element={
            <ProtectedRoutes>
             <Profile />
            </ProtectedRoutes>
          }
        /> 
        <Route path="/doctor/book-appointment/:doctorId"
           element={
            <ProtectedRoutes>
             <BookingPage />
            </ProtectedRoutes>
          }
        />
        </Routes>
      )}
      </BrowserRouter>
    </>
  );
}

export default App;