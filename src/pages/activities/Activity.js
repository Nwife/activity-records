import { useParams } from 'react-router';

//hooks
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme'

//styles
import './Activity.css';

export default function Activity() {
    const { id } = useParams();
    const url = 'http://localhost:8000/activities/' + id;
    const {data: activity, isPending, error} = useFetch(url);
    const { mode } = useTheme();

    return (
        <div className={`activity ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {activity &&  (
                <>
                    <h2 className="page-title">{activity.title}</h2>
                    <p>Date: {activity.date}</p>
                    <ul>
                        People involved: 
                        {activity.people.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{activity.details}</p>
                </>
            )}
        </div>
    )
}
