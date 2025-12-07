import { BiGlobe, BiPhone, BiUser } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { UserProps } from "../_utils/types";

interface UserInfoProps {
    user: UserProps;
    totalPosts: number;
}

export function UserInfo({ user, totalPosts }: UserInfoProps) {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BiUser className="text-white" size={32} />
                </div>
                <div className="flex-1">
                    <h2 className="text-gray-900 mb-1">{user.name}</h2>
                    <p className="text-gray-600 mb-3">@{user.username}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 text-gray-700">
                            <TfiEmail size={16} className="text-blue-600" />
                            <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <BiPhone size={16} className="text-blue-600" />
                            <span>{user.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <BiGlobe size={16} className="text-blue-600" />
                            <span>{user.website}</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-blue-600">{totalPosts}</div>
                    <div className="text-gray-600">posts</div>
                </div>
            </div>
        </div>
    );
}
