import { useState } from 'react';

function StakeInfo() {
  const [showSection, setShowSection] = useState(true);

  const handleToggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <div 
    className="text-slate-400 p-4 rounded-md w-4/5"
    >
      <div className="bg-slate-800 rounded-md rounded-b-none border-b border-slate-600 p-4 flex justify-between">
        <h2 className="text-xl font-bold text-white">Who is Stake?</h2>
        <button onClick={handleToggleSection}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {showSection && (
        <div className="space-y-4 mt-0 p-2 bg-gray-800 font-semibold rounded-b">
          <p className="text-sm">
            Leading the online gambling industry since 2017, Stake.com offers a
            wide variety of online casino and sports betting options, operating
            globally in 15 different languages.
          </p>
          <p className="text-sm">
            With a reputable and secure platform, Stake Casino is home to
            worldwide local currencies and crypto betting options for online slot
            games, Stake Originals and live casino games. Stake Sportsbook
            offers unbeatable odds on all major sporting events including a
            range of eSport leagues.
          </p>
          <p className="text-sm">
            We host regular bet bonuses and promotions and offer an exclusive
            VIP Club experience - all with a simple-to-use deposit process on our
            licensed platform.
          </p>
        </div>
      )}

<div className="bg-slate-800 flex justify-between rounded-md p-4 mt-4 mb-4">
      <div>
      <h3 className="text-lg font-bold text-white">Is Stake licensed?</h3>
      </div>
      <div className="flex justify-between items-center">
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>

    <div className="bg-slate-800 flex justify-between rounded-md p-4 mb-4">
      <h3 className="text-lg font-bold text-white">Is betting on Stake safe?</h3>
      <div className="flex justify-between items-center">
        <div className="text-gray-400">
          {/* Add your content here */}
        </div>
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>

    <div className="bg-slate-800 flex justify-between rounded-md p-4 mb-4">
      <h3 className="text-lg font-bold text-white">What currencies can I bet with?</h3>
      <div className="flex justify-between items-center">
        <div className="text-gray-400">
          {/* Add your content here */}
        </div>
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>

    <div className="bg-slate-800 flex justify-between rounded-md p-4 mb-4">
      <h3 className="text-lg font-bold text-white">What type of casino games can I play?</h3>
      <div className="flex justify-between items-center">
        <div className="text-gray-400">
          {/* Add your content here */}
        </div>
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
    <div className="bg-slate-800 flex justify-between rounded-md p-4 mb-4">
      <h3 className="text-lg font-bold text-white">What sports can I bet on?</h3>
      <div className="flex justify-between items-center">
        <div className="text-gray-400">
          {/* Add your content here */}
        </div>
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
    <div className="bg-slate-800 flex justify-between rounded-md p-4 mb-4">
      <h3 className="text-lg font-bold text-white">How do I watch live streams?</h3>
      <div className="flex justify-between items-center">
        <div className="text-gray-400">
          {/* Add your content here */}
        </div>
        <svg
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>

    </div>

    
  );
}

export default StakeInfo;