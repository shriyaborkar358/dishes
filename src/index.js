import { createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))

const Dishes = ({menu, emoji}) =>{
    return (<h1>{menu} - {emoji}</h1>)
}

root.render(<>
<h1>Dishes</h1>

<Dishes menu="Pizaa" emoji="🍕"/>
<Dishes menu="Cakes" emoji="🎂"/>
<Dishes menu="Pestry" emoji="🍰"/>
<Dishes menu="Maggie" emoji="🍜"/>
<Dishes menu="French Fries" emoji="🍟"/>
</>)