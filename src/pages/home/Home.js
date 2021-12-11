import { useFetch } from "../../hooks/useFetch";

//styles
import './Home.css';

//components
import ActivityList from "../../componenets/ActivityList";

export default function Home() {
    const {data, isPending, error} = useFetch('http://localhost:8000/activities');
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <ActivityList activities={data}/>}
        </div>
    )
}


