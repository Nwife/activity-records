import { useLocation } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

//styles
import './Search.css'

//components
import ActivityList from '../../componenets/ActivityList';

export default function Search() {
    const queryString = useLocation().search;
    //?q=pie
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const url = 'http://localhost:8000/activities?q=' + query;
    const {data, isPending, error } = useFetch(url);

    return (
        <div>
          <h2 className="page-title">Activities including "{query}"</h2>
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}
          {data && <ActivityList activities={data} />}
        </div>
    )
}
