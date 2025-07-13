import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({firstName: "",lastName: "",email:"",address:"",country:"",state:"",city:"",zip:"",isComments: false,isCandidates: false, isOffers: false,pushNotification:""});

  function changeHandler(event){
    const{name,type,value,checked} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked :value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing whole form")
    console.log(formData)
  }

  return (
    <div>
      <div className='App'>
        <form onSubmit={submitHandler}>
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

          <label htmlFor="email">email</label>
          <br />
          <input 
          type="email" 
          name='email' 
          placeholder='Hellow@emaildomain.com'
          value={formData.email}
          onChange={changeHandler}/>
          <br />
          <br />

           <label htmlFor="counntry">Country</label>
          <select 
          name="country" 
          id="country"
          value={formData.country}
          onChange={changeHandler}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Russia">Russia</option>
            <option value="Paris">Paris</option>
          </select>
          <br />
          <br />

           <label htmlFor="State">State</label>
          <select 
          name="state" 
          id="state"
          value={formData.state}
          onChange={changeHandler}>
            <option value="UP">UP</option>
            <option value="Uttrakhand">Uttrakhand</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
            <option value="Haryana">Haryana</option>
          </select>
          <br />
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
          <br />

          <label htmlFor="zip">Zip/Postal Code</label>
          <br />
          <input 
          type="text" 
          name='zip' 
          placeholder='226002'
          value={formData.zip}
          onChange={changeHandler}/>
          <br />
          <br />
         <fieldset>
         <legend>By Email</legend>
         <br />
         <input 
         type="checkbox"
         name='isComments'
         id='isComments'
         onChange={changeHandler}
         checked ={formData.isComments}/>
        <label htmlFor="isComments"><legend>Comments</legend><p>Get notified when someone posts a comments on a posting</p></label>
        <br />
         <input 
         type="checkbox"
         name='isCandidates'
         id='isCandidates'
         onChange={changeHandler}
         checked ={formData.isCandidates}/>
        <label htmlFor="is"><legend>Candidates</legend><p>Get notified when a candidate applies for a job</p></label>
        <br />
         <input 
         type="checkbox"
         name='isOffers'
         id='isOffers'
         onChange={changeHandler}
         checked ={formData.isOffers}/>
        <label htmlFor="isOffers"><legend>Offers</legend><p>Get notified when a candidate accepts or rejects an offer</p></label>
        <br />
        </fieldset>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your Machine Phone</p>
          <br />
          
          <input type="radio" 
          onChange={changeHandler}
          name='pushNotification'
          id='Everything'
          value= "Everything"
          checked={formData.pushNotification == "Everything"}
          /><label htmlFor="Everything">Everything</label>
          <br />
          <input type="radio" 
          onChange={changeHandler}
          name='pushNotification'
          id='Same-as-email'
          value= "Same-as-email"
          checked={formData.pushNotification == "Same-as-email"}
          /><label htmlFor="Same-as-email">Same as Email</label>
          <br />
          <input type="radio" 
          onChange={changeHandler}
          name='pushNotification'
          id='No-push-notifications'
          value= "No-push-notifications"
          checked={formData.pushNotification == "No-push-notifications"}
          /><label htmlFor="No-push-notifications">No push Notifications</label>
        </fieldset>
        <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
