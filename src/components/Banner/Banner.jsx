const Banner = () => {
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
        <div style={bgStyle} className="mb-16 bg-white opacity-25 ">
            <h1 className="text-center font-bold text-black text-5xl">I Grow By Helping People In Need</h1>
            <div className="text-center my-8">
                <form action="">
                    <input className="box-border  border-0 w-96 h-11 border-gray-300 rounded p-2" type="text" placeholder="Search Here..." />
                    <button className="btn bg-red-500 text-white font-bold normal-case border-0">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Banner;
