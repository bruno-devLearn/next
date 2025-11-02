export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50">
            <div className="w-12 h-12 border-4 border-[var(--muted)] border-t-[var(--primary)] rounded-full animate-spin"></div>
        </div>
    );
}
