import { useFetch } from "../../hooks/useFetch";

//styles
import './Home.css';

//components
import RecipeList from "../../componenets/RecipeList";

export default function Home() {
    const {data, isPending, error} = useFetch('http://localhost:8000/recipes');
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}


