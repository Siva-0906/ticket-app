const CastCard = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center text-center w-32">
      <div className="w-28 h-28 rounded-full overflow-hidden shadow-md mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-sm font-semibold text-white leading-tight">
        {name}
      </h4>

      <p className="text-xs text-gray-400">{role}</p>
    </div>
  );
};

export default CastCard;
