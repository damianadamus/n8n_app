"use client"

import { Button } from "@/components/ui/button";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import {useEffect} from "react";

const Page = () => {
    useEffect(() => {}, []);
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <Button>
                Click me
            </Button>
            <Button>
                Delete
            </Button>
        </div>
    )
}
export default Page
