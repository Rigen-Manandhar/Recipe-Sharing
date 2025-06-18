const ConfirmBox = ({ onConfirm, onCancel }) => {
  return (
    // Overlay: fullscreen, centered, semi-transparent background
    <div
      className="fixed inset-0 flex justify-center items-center bg-opacity-80 z-50"
      onClick={onCancel}
    >
      {/* Stop click propagation so clicking inside box doesn't close */}
      <div
        className="shadow-2xl bg-white w-[500px] h-64 flex flex-col rounded-3xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-center mt-5 text-2xl font-sans font-bold">
          Are you sure you want to <span className="text-red-500">Logout?</span>
        </h1>
        <div className="flex justify-center items-center gap-8 p-8">
          <button
            onClick={onConfirm}
            className="bg-red-500 w-24 h-12 rounded-xl font-sans text-white cursor-pointer shadow-2xl shadow-red-700 hover:text-black transition duration-400 ease-in-out"
          >
            YES
          </button>
          <button
            onClick={onCancel}
            className="bg-green-500 w-24 h-12 rounded-xl font-sans text-white cursor-pointer shadow-2xl shadow-green-700 hover:text-black transition duration-400 ease-in-out"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
