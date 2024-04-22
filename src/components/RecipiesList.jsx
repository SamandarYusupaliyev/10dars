

function RecipiesList({recipies}) {
  return <ul>
    {recipies.map((recipie)=>{
      return 
      <li key={recipie.id}>
        <h3>{recipie.title}</h3>
      </li>
    })}
  </ul>
}

export default RecipiesList