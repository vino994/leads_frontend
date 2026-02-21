function RecentActivity() {
  const activities = [
    { text: "Generated 20 leads in Chennai", color: "bg-blue-500" },
    { text: "Upgraded to Pro Plan", color: "bg-green-500" },
    { text: "Downloaded Excel file", color: "bg-purple-500" },
    { text: "Generated 15 leads in Bangalore", color: "bg-indigo-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl">
      <h3 className="text-sm text-gray-500 mb-6">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`w-3 h-3 rounded-full mt-2 ${item.color}`} />
            <p className="text-sm text-gray-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;