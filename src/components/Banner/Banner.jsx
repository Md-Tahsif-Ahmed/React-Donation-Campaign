import PropTypes from 'prop-types';
const Banner = ({handleSubmit}) => {
    const bgStyle = {
        backgroundImage: "url('https://i.ibb.co/ZLHLkNV/cover.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",  
        height: "100vh",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",  
    };

    return (
        <div style={bgStyle} className="mb-16 bg-white opacity-25 relative">     
            <div className="absolute">
                <h1 className="text-center font-bold text-black text-xl md:text-2xl lg:text-5xl">I Grow By Helping People In Need</h1>
                <div className="text-center my-8">
                    <form onSubmit={handleSubmit}>
                        <input className="box-border  border-0 focus:outline-none rounded-l-lg w-5xl md:w-96 h-11 border-gray-300 p-2" type="text" name="name" placeholder="Search Here..." />
                        {/* <button className="p-2 bg-red-500 text-white font-bold normal-case border-0 rounded-r-lg">Search</button> */}
                        <input className="p-2 bg-red-500 text-white font-bold normal-case border-0 rounded-r-lg" type="submit" value="Search"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

    handleSubmit: PropTypes.any
};

export default Banner;
