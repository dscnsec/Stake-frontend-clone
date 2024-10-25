import React from 'react';

const StakeInfo = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md w-4/5">
      <h2 className="text-2xl font-bold mb-4">Who is Stake?</h2>
      <p className="mb-4">
        Leading the online gambling industry since 2017, Stake.com offers a wide
        variety of online casino and sports betting options, operating globally in 15
        different languages.
      </p>
      <p className="mb-4">
        With a reputable and secure platform, Stake Casino is home to worldwide
        local currencies and crypto betting options for online slot games,
        Stake Originals and live casino games. Stake Sportsbook offers unbeatable
        odds on all major sporting events including a range of eSport leagues.
      </p>
      <p className="mb-4">
        We host regular bet bonuses and promotions and offer an exclusive
        VIP Club experience - all with a simple-to-use deposit process on our
        licensed platform.
      </p>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Learn More
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Frequently Asked Questions</h3>
        <ul className="list-disc">
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Is Stake licensed?
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Is betting on Stake safe?
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              What currencies can I bet with?
            </a> </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              What types of casino games can I play?
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              What sports can I bet on?
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              How do I watch live streams?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StakeInfo;