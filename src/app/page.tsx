import { Button } from "@/components/ui/button";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

const Page = () => {
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <Button>
                Click me
            </Button>
        </div>
    )
}
export default Page
