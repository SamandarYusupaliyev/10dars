import { useCollection } from "../hooks/useCollection"
import RecipiesList from "../components/RecipiesList";
import { useState } from "react";

function Home() {






const deleteRecipie =(id)=>{
  fetch("http://localhost:3000/recipies/"+id,{
    method:"DELEtE",
  }).then((data)=>{
    return data.json()
  }).then((data)=>{
    console.log(data);
  })
  .catch((error)=>console.log(error))
}










  const {data:recipies} =useCollection()
  console.log(recipies && recipies.length);
  return(
  <div>
    <h1 className="text-3xl font-bold">All Recipies-{recipies && recipies.length}</h1>
    {recipies && <RecipiesList recipies={recipies}/>}
  </div>
  )
}

export default Home