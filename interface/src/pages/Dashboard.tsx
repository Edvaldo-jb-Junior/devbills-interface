import { use, useEffect } from "react";
import { api } from "../services/api";

const Dashboard = () => {

    useEffect(() => {
        async function getTransactions(){
            const response = await api.get("/transactions");

            console.log(response);
        }
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
