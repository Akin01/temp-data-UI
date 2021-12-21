const Layout = ({ children }) => {
    return (
        <div className='bg-gray-500 p-10 flex-col justify-center items-center  min-h-screen'>
            {children}
      </div>
    );
}

export default Layout;