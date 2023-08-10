import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const root = ReactDOM.createRoot(document.getElementById("app"));

const ACTIVITY = [
    {
        title: "Activity 1",
        team: "support specialists",
        department: "customer support"
    },
    {
        title: "Activity 2",
        team: "accounting",
        department: "economy"
    }
];

function FrontPage() {
    return (
        <div>
            <h1>Time Management</h1>
            <ul>
                <li><Link to="/managers">Managers</Link></li>
                <li><Link to="/activities">List activities</Link></li>
                <li><Link to="/activities/new">New activity</Link></li>
            </ul>
        </div>
    )
}

function ListActivities({activities}){
    return (
        <div>
            <h1>Listing all activities</h1>
            {
                activities.map( m =>
                    <>
                        <h2>{m.title} - {m.team}</h2>
                        <div>
                            {m.department}
                        </div>
                    </>
                )
            }
        </div>
    )
}

function AddActivity({onAddActivity}) {
    const [title, setTitle] = useState("");
    const [team, setTeam] = useState("");
    const [department, setDepartment] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        onAddActivity({title, team, department });
        console.log(ACTIVITY);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>New activity details</h1>
            <div>
                <label> Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
            </div>
            <div>
                <label> Team: <input value={team}  onChange={e => setTeam(e.target.value)} /></label>
            </div>
            <div>
                <label> Department: <input value={department}  onChange={e => setDepartment(e.target.value)} /></label>
            </div>
            <button>Submit</button>
        </form>
    );
}

function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/activities" element={<ListActivities activities={ACTIVITY}/>}></Route>
            <Route path="/activities/new" element={<AddActivity onAddActivity={m => ACTIVITY.push(m)}/>}></Route>
        </Routes>
    </BrowserRouter>
}

root.render(
    <Application />
);