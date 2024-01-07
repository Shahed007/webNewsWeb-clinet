import PropTypes from "prop-types";
const NotificationPanel = ({ isLoading, openNotification, notification }) => {
  return (
    <div
      className={`absolute right-0 z-[70] top-[65px] rounded-md flex justify-center p-4 shadow-md w-60 h-60 overflow-y-auto bg-white ${
        openNotification ? "scale-100 duration-500" : "scale-0 duration-200"
      }`}
    >
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="flex flex-col gap-3">
          {notification.map((item) => (
            <p key={item._id} className="text-[12px]">
              <span className="font-bold">New article:</span> {item.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

NotificationPanel.propTypes = {
  isLoading: PropTypes.any,
  notification: PropTypes.array.isRequired,
  openNotification: PropTypes.bool.isRequired,
};

export default NotificationPanel;
