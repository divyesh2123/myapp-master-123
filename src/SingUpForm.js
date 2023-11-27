import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function SingUpForm() {

    let d = {
        firstName : "",
        lastName :"",
        email:"",
        acceptterms : false,
        hobbies:[],
        gender:"",
        city : ""
    }
  return (
    <div>
        <h1>Sign Up</h1>

        <Formik initialValues={d}
        
        onSubmit={(values)=>{

            console.log(values)
            
        }}
        >

            <Form>

                <label>FirstName</label>
                <Field id="firstName" name="firstName" 
                placeholder="please Enter FirstName"></Field>


<label>LastName</label>
                <Field id="lastName" name="lastName" 
                placeholder="please Enter LastName"></Field>


<label>Email</label>
                <Field id="email" name="email" 
                placeholder="please Enter email" ></Field>



<label>
            <Field type="checkbox" name="acceptterms" />
           
          </label>


          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hobbies" value="Cricket" />
              Cricket
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="Music" />
              Music
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="Traveling" />
              Traveling
            </label>
          </div>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            
          </div>

        
 

 <Field name="city" as="select">
   <option value="vadodara">vadodara</option>
   <option value="pune">pune</option>
   <option value="bangloor">bangloor</option>
 </Field>


<button type="submit">Submit</button>

            </Form>


        </Formik>

    </div>
  )
}
