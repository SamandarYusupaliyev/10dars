import { Form } from "react-router-dom"
import FormInput from "../components/FormInput"

// action


function Create() {
  return (
   <div className="grid place-items-center">
      <div className="max-w-96 w-full">
         <h1 className="text-3xl text-center font-bold">Creata New Recipe</h1>
         <Form method="POST">
            <FormInput name="title" label="Title" type="text"/>
               <div className="flex justify-center flex-col">
                 <div className="flex items-center gap-5 w-full">
                 <FormInput name="title" label="Ingredient" type="text"/>
                 <button className="btn btn-secondary mt-5">Add</button>
                 </div>
                 <p className="text-left -mt-2 mb-3">
                   Inredients
                  <span>:Tuz Go'sht</span>
                 </p>
               </div>
            <FormInput name="cooking Time" label="Cooking Time" type="number"/>
            <FormInput name="method" label="Method" type="text"/>
            <FormInput name="image" label="Image" type="url"/>
            <div>
            <button  className="btn btn-secondary w-full mb-3" type="submit">
              Submit
            </button>
            </div>
         </Form>
      </div>
   </div>
  )
}

export default Create