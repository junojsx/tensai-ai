import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description?: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const Heading = ({title, description, icon,}: HeadingProps) => {

    return ( <>
    <h1>Heading Component</h1>
    </> );
}
 
export default Heading;<>
<h1>Heading Component</h1>
</>