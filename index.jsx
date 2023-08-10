import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

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

function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/activities" element={<ListActivities activities={ACTIVITY}/>}></Route>
            <Route path="/activities/new" element={<h1>Add new activity</h1>}></Route>
        </Routes>
    </BrowserRouter>
}

root.render(
    <Application />
);