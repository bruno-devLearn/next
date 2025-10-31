// app/loading.tsx
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-64">
            <div
                className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
                style={{
                    borderColor: "var(--accent)",
                    borderTopColor: "var(--primary)",
                }}
            />
        </div>
    );
}
