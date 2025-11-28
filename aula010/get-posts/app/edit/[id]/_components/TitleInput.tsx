import { Datum } from "@/app/_utils/types";

export function TitleInput({ post }: { post: Datum }) {
    return (
        <div>
            <label htmlFor="title" className="block text-gray-700 mb-2">
                Título *
            </label>
            <input
                id="title"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
                placeholder="Digite o título do post"
                name="title"
                required
                defaultValue={post.title}
            />
        </div>
    );
}
