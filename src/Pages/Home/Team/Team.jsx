import { useEffect, useState } from "react";
import TeamItem from "../../../Components/TeamItem/TeamItem";

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setTeam(data))
    },[])
    return (
        <div className="dark:bg-slate-800 dark:text-base-100 py-10 p-3 font-Normal">
            <div className="container mx-auto">
                <div className="text-center z-10 space-y-3">
                    <h2 className="font-Title text-4xl">Our Team</h2>
                    <p className="w-full md:w-1/2 mx-auto z-10">
                        With Roam Plus, you are not just visiting a destination; you are immersing yourself in its soul.
                    </p>
                </div>
                <div className="py-10 flex justify-center gap-5 flex-col md:flex-row text-center">
                    {
                        team.map(team => <TeamItem key={team._id} team={team}></TeamItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;