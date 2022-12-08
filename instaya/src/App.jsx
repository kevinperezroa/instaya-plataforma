import { useState } from 'react'
import HeaderIndex from './components/HeaderIndex'
import Index from './components/Index'
import Navbar from './components/Navbar'
import TablaEnvios from './components/paginas/TablaEnvios'
import CreacionOrden from './components/paginas/CreacionOrden'
import ActualizacionOrden from './components/paginas/ActualizacionOrden'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />  
       <HeaderIndex />   
       <Index />   
        {/* <TablaEnvios/>    */}
         {/* <CreacionOrden/>   */}
      {/* <ActualizacionOrden/>    */}


     
    </>
  )
}
export default App
