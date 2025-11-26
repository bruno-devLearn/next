import { FormContent } from "./FormContent";
import { TopContainer } from "./TopContainer";

export function MainContent() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <TopContainer />
            <FormContent />
        </div>
    );
}
