const Profile = ({image}) => {
    return (
      <div className='w-3/4 h-2/3 flex justify-center'>
        <img
          src={image || '/profile.png'}
          alt='profile'
          className='w-auto h-full rounded-xl shadow-lg hover:rounded-none hover:shadow-none'
        />
      </div>
    );
}

export default Profile;