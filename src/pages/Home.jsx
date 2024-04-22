import { useCollection } from "../hooks/useCollection"
import RecipiesList from "../components/RecipiesList";

function Home() {
  const {data:recipies} =useCollection()
  console.log(recipies && recipies.length);
  return(
  <div>
    <h1>All Recipies-{recipies && recipies.length}</h1>
    {recipies && <RecipiesList recipies={recipies}/>}
  </div>
  )
}

export default Home