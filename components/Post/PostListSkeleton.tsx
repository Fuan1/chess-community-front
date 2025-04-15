export default function PostListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg animate-pulse bg-gray-50"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-3 w-16 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <div className="h-4 w-12 bg-gray-200 rounded" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
