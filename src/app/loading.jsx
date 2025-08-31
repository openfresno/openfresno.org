export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-4 text-lg">Loading...</p>
    </div>
  );
}
