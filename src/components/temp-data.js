const TempData = ({temp_obj, temp_env}) => {
  return (
    <div className='w-2/5 h-full flex flex-col justify-around items-center'>
      <div className='w-3/4 h-2/5 bg-gray-500 p-6 flex flex-col justify-start rounded-full shadow-xl hover:rounded-none hover:shadow-none'>
        <div className='flex justify-center items-center h-1/4 text-sm text-gray-300'>
          suhu tubuh
        </div>
        <div className='flex justify-center items-center h-3/4 text-4xl font-mono text-white text-bold'>
          {temp_obj}
        </div>
      </div>
      <div className='w-3/4 h-2/5 bg-gray-500 p-6 flex flex-col justify-star rounded-full shadow-xl hover:rounded-none hover:shadow-none'>
        <div className='flex justify-center items-center h-1/4 text-sm text-gray-300'>
          suhu lingkungan
        </div>
        <div className='flex justify-center items-center h-3/4 text-4xl font-mono text-white text-bold'>
          {temp_env}
        </div>
      </div>
    </div>
  );
};

export default TempData;
