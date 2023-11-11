const UserAndSignOutButtonSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center space-x-4">
      <div className="w-12 h-4 bg-gray-200 rounded-sm">
      </div>
      <div className="w-24 h-8 bg-gray-200 rounded-full">
      </div>
    </div>
  );
};

export default UserAndSignOutButtonSkeleton;