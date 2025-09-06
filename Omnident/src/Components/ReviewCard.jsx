import { FaStar } from 'react-icons/fa'

const ReviewCard = ({ Person, Location, Content }) => {
  return (
    <div
      className="w-62 h-62 s:w-82 s:h-82 m:w-92 m:h-70 rounded-lg mt-10 hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer flex items-left justify-left flex-col text-2xl text-white"
    >
      <div className="ConnectionContent">
        <button className='w-22 p-1 rounded-2xl border-2 border-OmniRed text-TextPrimary flex justify-between align-middle items-center text-sm'><FaStar className='text-OmniRed'/> 5.0</button>
        <h2 className="text-TextPrimary text-left text-xl font-medium pt-4 s:text-2xl">{Content}</h2>
        <h1 className="text-TextPrimary text-left text-xl font-bold pt-4 s:text-2xl">{Person}</h1>
        <h1 className="text-TextSecondary text-left text-xl font-light -mt-2 s:text-2xl">{Location}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;