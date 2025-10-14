import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Quick Links",
        link: ['Home', 'Services', 'About Us', 'Contact'],
    },
    {
        id: 2,
        section: "Courses",
        link: ['English Coaching', 'Job Training', 'Career Counseling', 'Workshops']
    },
    {
        id: 3,
        section: "Resources",
        link: ['Blog', 'Testimonials', 'FAQs', 'Guides']
    },
    {
        id: 4,
        section: "Legal",
        link: ['Privacy Policy', 'Terms & Conditions']
    }
]

const Footer = () => {
    return (
        <div className="bg-black -mt-40" id="footer-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>Growthhub</h3>
                        <p className="text-offwhite text-base mb-6">
                            Helping you grow with expert coaching, job placement, and career guidance.
                        </p>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com" target="_blank">
                                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com" target="_blank">
                                    <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com" target="_blank">
                                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2/3 */}
                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal hover:text-blue-500">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-gray-700">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>
                                &copy; 2025 Growthhub. All Rights Reserved.
                            </h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6 hover:text-blue-500">Privacy Policy</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-l border-gray-700 hover:text-blue-500">Terms & Conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
