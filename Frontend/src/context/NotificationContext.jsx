import React, { createContext, useState, useContext } from "react";

export const NotificationContext = createContext(null);

/**
 * NotificationProvider — provides toast-style notification system
 */
const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "info", duration = 3500) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeNotification(id), duration);
  };

  const removeNotification = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const toast = {
    success: (msg) => addNotification(msg, "success"),
    error:   (msg) => addNotification(msg, "error"),
    info:    (msg) => addNotification(msg, "info"),
    warning: (msg) => addNotification(msg, "warning"),
  };

  const typeStyles = {
    success: "bg-green-600",
    error:   "bg-red-600",
    info:    "bg-indigo-600",
    warning: "bg-yellow-500",
  };

  return (
    <NotificationContext.Provider value={{ toast, notifications }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white shadow-lg ${typeStyles[n.type]} animate-slide-up`}
          >
            <span>{n.message}</span>
            <button
              onClick={() => removeNotification(n.id)}
              className="ml-auto text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
