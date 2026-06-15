import React from "react";

/**
 * ProfileCard — displays user summary at the top of the profile page
 * @param {object} props
 * @param {object} props.user
 */
const ProfileCard = ({ user }) => {
  const { name, email, role, department, avatar, joinedAt } = user ?? {};

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm text-center dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:text-left">
      {avatar ? (
        <img src={avatar} alt={name} className="h-20 w-20 rounded-full object-cover ring-4 ring-indigo-100 dark:ring-indigo-900" />
      ) : (
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600 ring-4 ring-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 dark:ring-indigo-900">
          {name?.[0]?.toUpperCase() ?? "U"}
        </div>
      )}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium capitalize text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
            {role}
          </span>
          {department && (
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {department}
            </span>
          )}
          {joinedAt && (
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              Joined {joinedAt}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
