import { Button } from "./Button";
import Home from "../assets/Home";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="absolute bottom-0 text-gray-400 text-sm flex w-full justify-between items-center">
      <div className="flex-1 text-center">
        <p>© 2026 Kayky</p>
      </div>
      <div className="">
        <Button innerContent={<Home />} click={() => navigate("/")} />
      </div>
    </footer>
  );
}
