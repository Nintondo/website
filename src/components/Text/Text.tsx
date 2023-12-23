import BellsIcon from "../Icons/BellsIcon/BellsIcon";

const Text = () => {
  return (
    <div className={'text-white flex flex-col items-center'} >
      <span className='bg-black text-center mb-8 text-[40px] px-[20px] relative rounded-[8px] flex sm:flex-col lg:flex-row items-center'>
        A secure wallet to store 
          <span className="text-yellow-500 flex items-center lg:ml-[22px] lg:mr-[12px]">
            Bellscoin 
          </span>
          <span className="sm:mb-[12px] lg:mb-[0]">
            <BellsIcon height={30} width={30}/> 
          </span>
      </span>

      <span className='w500px bg-black font-inconsolata text-[20px] px-2 my-1 relative text-center rounded-[8px]'>
        Store. Exchange. Transact. Mine. Explore.
      </span>

    </div>
  );
};

export default Text;
