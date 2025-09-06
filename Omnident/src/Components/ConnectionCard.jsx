const ConnectionCard = ({ Rotation, Color, Icon, Title, Content }) => {
  return (
    <div
      className="w-52 h-62 rounded-lg m-2 p-4 hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-center flex-col text-2xl text-white"
      style={{ transform: `rotate(${Rotation}deg)`, backgroundColor: Color }}
    >
      <div className="ConnectionIcon text-OmniBg">
        {Icon && <Icon/>}   {/* Render the icon */}
      </div>
      <div className="ConnectionContent">
        <h1 className="text-OmniBg text-left text-2xl font-bold pt-4">{Title}</h1>
        <h2 className="text-TextSecondary text-left text-sm font-medium pt-4">{Content}</h2>
      </div>
    </div>
  );
};

export default ConnectionCard;