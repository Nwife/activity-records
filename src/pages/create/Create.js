import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

//styles
import './Create.css';

export default function Create() {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [newPeople, setNewPeople] = useState("");
    const [people, setPeople] = useState([]);
    const peopleInput = useRef(null);
    const history = useHistory();

    const {postData, data, error} = useFetch('http://localhost:8000/activities', 'POST');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        postData({title, people, details, date: date})
        console.log(title, details, date, people);
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newPeople.trim() //trim removes white space
        if (ing && !people.includes(ing)){
            setPeople(prevPeople => [...prevPeople, ing])
        }
        setNewPeople("");
        peopleInput.current.focus();
    }

    //redirect the user when we get a response
    useEffect(() => {
        if (data){
            history.push("/");
        }
    }, [data, history])
    
    return (
        <div className='create'>
            <h2 className="page-title">Add a New Activity</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Activity title:</span>
                    <input 
                        type= "text" 
                        onChange= {(e) => setTitle(e.target.value)}
                        value= {title}
                        required
                    />
                </label>

                <label>
                    <span>People involved:</span>
                    <div className="ingredients">
                        <input 
                            type="text" 
                            onChange= {(e) => setNewPeople(e.target.value)}
                            value= {newPeople}
                            ref= {peopleInput}
                        />
                        <button onClick={handleAdd} className="btn">add</button>
                    </div>
                </label>
                <p>Current people: {people.map(i => <em key={i}>{i},</em>)}</p>

                <label>
                    <span>Activity details:</span>
                    <textarea
                        onChange= {(e) => setDetails(e.target.value)}
                        value= {details}
                        required
                    />
                </label>

                <label>
                    <span>Activity date:</span>
                    <input 
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value= {date}
                        required
                    />
                </label>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}
