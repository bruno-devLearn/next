import { TbLoader2 } from "react-icons/tb";

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-[400px]">
            <TbLoader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
    );
}
