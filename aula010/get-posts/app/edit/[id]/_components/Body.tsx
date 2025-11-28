import { Datum } from "@/app/_utils/types";

export function BodyText({ post }: { post: Datum }) {
    return (
        <div>
            <label htmlFor="body" className="block text-gray-700 mb-2">
                Conteúdo *
            </label>
            <textarea
                id="body"
                rows="8"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y border-gray-300"
                placeholder="Digite o conteúdo do post"
                name="body"
                required
                defaultValue={post.body}
                minLength={10}
            />
        </div>
    );
}
