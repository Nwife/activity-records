import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

//styles
import './ActivityList.css';

export default function ActivityList({activities}) {
    const { mode } = useTheme();

    if(activities.length === 0){
        return <div className="error">No activitys to load...</div>
    }
    return (
        <div className="activity-list">
            {activities.map((activity) => (
                <div key={activity.id} className={`card ${mode}`}>
                    <h3>{activity.title}</h3>
                    <p>{activity.date}</p>
                    <div>{activity.details.substring(0, 100)}...</div>
                    <Link to={`/activities/${activity.id}`}>more details</Link>
                </div>
            ))}
        </div>
    )
}
