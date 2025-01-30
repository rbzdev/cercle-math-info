"use client";

import meets from "@/lib/meets";

export default function UpComingMeets() {
  return (
    <div className="flex flex-col items-center p-2 h-fit  border rounded-2xl  ">
      {/* Derniers événements */}
      <div className="w-full space-y-2 p-2 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Upcoming meets
        </h2>
        <ul className="space-y-4">
          {meets.map((meet, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-2"
            >
              <div className="text-2xl p-2 bg-gray-300 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-medium line-clamp-1 ">
                  {meet.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {meet.date}
                </p>
              </div>
              {/* <p className="text-gray-700 dark:text-gray-300 mt-2">
                {meet.description}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
