const Title = ({title}) => {
    return (
      <div className='flex justify-center items-center p-6'>
        <div className='bg-white h-10 w-1/4 flex justify-center items-center rounded-xl shadow-xl'>
          <div className='text-gray-600 font-bold font-mono text-lg'>
            {title}
          </div>
        </div>
      </div>
    );
}

export default Title;