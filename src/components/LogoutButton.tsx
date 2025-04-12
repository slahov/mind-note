"use client"; // to work with other client components

import  { Button } from "./ui/button";
import {Loader2Icon} from "lucide-react";
import {useState} from "react";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

function LogoutButton() {
    const { toast } = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a logout request
            const errorMessage = null;
        if (!errorMessage) {
            toast({
                title: "Logged out",
                description: "You have been logged out successfully.",
                variant: "success",
            });
            router.push("/");
        } else {
            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
            });
        }
        setLoading(false);
    };

    return (
        <Button
        variant={"outline"}
        onClick={handleLogout}
        disabled={loading}
        className={"w-24"}>
            {loading ? <Loader2Icon className={"animate-spin"} /> : "Log Out"}
        </Button>
    );
}

export default LogoutButton;