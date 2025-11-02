import Dashboard from "../layouts/Dashboard";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ComponentMap: Record<string, React.ComponentType<any>> = {
  navbar: Navbar,
};

export default function ComponentPage() {
    const { name } = useParams<{ name : string }>();
    const Component = name ? ComponentMap[name] : null
    return (
        <Dashboard>
            {Component ? (
                <Component />
            ) : <h1>No component in this URL!</h1>}
        </Dashboard>
    )
}