const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}
                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
                        OUR COMMITMENT
                    </h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
                        Experience & <span className="text-grey">Dedication You Can Trust.</span>
                    </h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
                        With over 8 years in the industry and more than 1000 students trained, our certified trainers are committed to your success.
                    </h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}
                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
                        YOUR FUTURE
                    </h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
                        <span className="text-blue">Personalized Mentorship</span> for Your Career Path.
                    </h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
                        We provide personalized guidance to help you build the skills and confidence needed to achieve your professional goals.
                    </h5>

                    {/* ✅ Join Now button with redirect */}
                    <div className="text-center sm:text-start">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeF2sinGAhSNAiR_AhmhRME_GWS1RVjD9uoQV9a-Hh_BXne3g/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                                Join Now
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
