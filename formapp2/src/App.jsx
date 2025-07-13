import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({firstName: "",lastName: "",address:"",city:""});
 console.log(formData)

  function changeHandler(event){
    const{name,type,value,checked} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked :value
      }
    })
  }

  return (
    <div>
      <div className='App'>
        <form action="">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input 
          type="text" 
          name='firstName' 
          placeholder='Jai'
          value={formData.firstName}
          onChange={changeHandler}/>
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input 
          type="text" 
          name='lastName' 
          placeholder='Verma'
          value={formData.lastName}
          onChange={changeHandler}/>
          <br />

          <label htmlFor="address">Street address</label>
          <br />
          <input 
          type="text" 
          name='address' 
          placeholder='1234 Main St'
          value={formData.address}
          onChange={changeHandler}/>
          <br />

          <label htmlFor="city">City</label>
          <select 
          name="city" 
          id="city"
          value={formData.city}
          onChange={changeHandler}>
            <option value="Lucknow">Lucknow</option>
            <option value="Pune">Pune</option>
            <option value="Noida">Noida</option>
            <option value="Bangluru">Bangluru</option>
            <option value="Gurgao">Gurgao</option>
          </select>
          <br />

          <label htmlFor="counntry">Country</label>
          <select 
          name="country" 
          id="country"
          value={formData.city}
          onChange={changeHandler}>
            <option value="India">India</option>
            <option value="USA">USa</option>
            <option value="Germany">Germany</option>
            <option value="Russia"></option>
            <option value="Paris"></option>
          </select>
          <br />
        </form>
      </div>
    </div>
  )
}

export default App
