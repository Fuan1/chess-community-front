export default function CommentListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 animate-pulse"
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full" />
            <div className="space-y-1">
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-2 w-16 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center space-x-4 mt-3">
            <div className="h-3 w-8 bg-gray-200 rounded" />
            <div className="h-3 w-8 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
