const DateTime = ({created_at}) => {
    return (
      <div className='w-3/4 h-7 bg-gray-500 flex justify-center items-center rounded-xl shadow-lg hover:rounded-none hover:shadow-none'>
        <div className='text-sm text-white font-mono'>
          {new Date(created_at).toDateString()}
          {' | '}
          {new Date(created_at).toLocaleTimeString()}
        </div>
      </div>
    );
}

export default DateTime;