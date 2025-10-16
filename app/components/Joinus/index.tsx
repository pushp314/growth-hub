import { MapPin, Mail, Phone } from "lucide-react";

const Join = () => {
    return (
        <div className="bg-joinus my-32">
            <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">JOIN US</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
                        Empower Your Career <br /> and Skills with Us
                    </h2>
                    <p className="text-lightblack text-base font-normal max-w-2xl mx-auto">
                        Unlock your potential with our comprehensive English online & offline coaching, 
                        hands-on job placement support, and expert career counseling. 
                        Start your journey toward a brighter professional future today.
                    </p>

                    {/* Highlighted Contact Section */}
                    <div className="mt-12 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md rounded-2xl p-6 sm:p-10 inline-block text-left">
                        <h4 className="text-blue text-xl font-semibold mb-4 text-center">Contact Information</h4>
                        <div className="space-y-4 text-gray-800 text-base font-medium">

                            <div className="flex items-start gap-3">
                                <MapPin className="text-blue-600 w-5 h-5 mt-1" />
                                <p>
                                    <span className="font-semibold">Address:</span><br />
                                    Near New Kolkata Sweets, Above Arogya Pharmacy,<br />
                                    Borsi Road, Durg, Chhattisgarh, 491001
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-600 w-5 h-5" />
                                <p>
                                    <span className="font-semibold">Email:</span>{" "}
                                    <a href="mailto:Growthhub527@gmail.com" className="text-blue-600 hover:underline">
                                        Growthhub527@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-blue-600 w-5 h-5" />
                                <p>
                                    <span className="font-semibold">Contact:</span>{" "}
                                    <a href="tel:9203293567" className="text-blue-600 hover:underline">9203293567</a>,{" "}
                                    <a href="tel:9588629327" className="text-blue-600 hover:underline">9588629327</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
