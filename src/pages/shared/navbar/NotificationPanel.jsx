import PropTypes from "prop-types";
const NotificationPanel = ({ isLoading, openNotification, notification }) => {
  return (
    <div
      className={`absolute right-0 z-[70] top-[71px] rounded-md flex justify-center p-4 shadow-md w-60 h-60 overflow-y-auto bg-white ${
        openNotification ? "scale-100 duration-500" : "scale-0 duration-200"
      }`}
    >
      <div
        className="rotate-180  absolute -top-[1px] left-8"
        style={{
          borderWidth: "12px 8px 0 8px",
          width: "0px",
          height: "0px",
          borderStyle: "solid",
          borderColor: "#8888 transparent transparent transparent",
        }}
      ></div>

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
