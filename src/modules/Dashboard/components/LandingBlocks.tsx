import {Crystal} from '../../../assets/svgComponents/Crystal';
import {Diamond} from '../../../assets/svgComponents/Diamond';
import {Robot} from '../../../assets/svgComponents/Robot';

export const LandingBlocks = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <h1 className="text-4xl font-bold text-white text-center uppercase">
        Empowering
        <span className="text-[#01C3FD]"> Web3 </span>Innovation with
        <span className="text-[#43CA9B]"> CryptoDo</span>
      </h1>
      <div className="flex w-full justify-center py-[10vh]">
        <Crystal />
      </div>
      <div className="flex flex-row w-full justify-between p-5 gap-10 bg-[#286497] bg-opacity-20 backdrop-blur-md rounded-[30px]">
        <div className="rounded-[30px] pr-6 bg-[#286497] bg-opacity-20 flex justify-start items-center w-[220px] h-[180px]">
          <Diamond color="#32FDE8" />
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <p className="font-semibold text-2xl mb-2 text-white">
            <span className="text-[#43CA9B]">20%</span> of
            <span className="text-[#43CA9B]"> CryptoDo</span> profits are
            distributed by CBO holders through our
            <span className="text-[#43CA9B]">smart-contract</span>.
          </p>
          <p className="font-normal text-md text-white">
            It is accepted as a payment for the service, and also distributes
            the company's profits among the leaders.
          </p>
          <p className="font-normal text-md text-white">
            All tokens accepted as payment are burned.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <p className="font-semibold text-2xl text-white">CryptoDo</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="italic text-lg text-white">
                The future of Web3
                <span className="text-[#43CA9B]"> is here</span>
              </p>
              <Robot />
            </div>
            <button className="rounded-[30px] bg-gradient-to-tr from-[#4ACE9E] to-[#07EAD3] text-white px-4 py-2">
              Deploy to test next
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between p-5 gap-10 bg-[#286497] bg-opacity-20 backdrop-blur-md rounded-[30px]">
        <div className="flex flex-col gap-2 w-[30%]">
          <p className="font-semibold text-2xl text-white">CryptoDo</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="italic text-lg text-white">
                Blockchain for
                <span className="text-[#01C3FD]"> Web3</span>
              </p>
              <Robot color="#1E88E5" />
            </div>

            <button className="rounded-[30px] bg-gradient-to-tr from-[#00C3FD] to-[#0284E2] text-white px-4 py-2">
              Deploy to test next
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <p className="font-semibold text-2xl mb-2 text-white">
            <span className="text-[#01C3FD]">20%</span> of
            <span className="text-[#01C3FD]"> CryptoDo</span> profits are
            distributed by CBO holders through our
            <span className="text-[#01C3FD]">smart-contract</span>.
          </p>
          <p className="font-normal text-md text-white">
            It is accepted as a payment for the service, and also distributes
            the company's profits among the leaders.
          </p>
          <p className="font-normal text-md text-white">
            All tokens accepted as payment are burned.
          </p>
        </div>
        <div className="rounded-[30px] pr-6 bg-[#286497] bg-opacity-20 flex justify-start items-center w-[220px] h-[180px]">
          <Diamond />
        </div>
      </div>
    </div>
  );
};
