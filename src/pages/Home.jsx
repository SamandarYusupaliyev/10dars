import { useCollection } from "../hooks/useCollection"
import RecipiesList from "../components/RecipiesList";

function Home() {
  const {data:recipies} =useCollection()
  return(
  <div>
    <h1>All Recipies</h1>
    {recipies && <RecipiesList recipies={recipies}/>}
  </div>
  )
}

export default Home