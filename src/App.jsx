import Footer from "./Components/Footer"
import Header from "./Components/Header"
import StudentForm from "./Components/StudentForm"
import StudentCard from "./Components/StudentCard"
import StudentProfile from "./Components/StudentProfile"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<StudentProfile/>}/>
    {/* <Route path="/Studentmanager" element={<Studen} */}
    <Route path="/studentform" element={<StudentForm/>}/>
  </Routes>
    </>
  )
}

export default App
