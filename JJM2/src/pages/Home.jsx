import React from "react"
import e3 from '../assets/img/e3.jpg'
import Footer from "../components/Footer"
import card1 from '../assets/img/card1.jpg'
import conditioner from '../assets/img/conditioner.jpg'

function Home(){
    return(
        <>
        <div>
        <section id='1' className="min-w-fit bg-gray-200 flex items-center">
                <div className="w-1/2">
                <img src={e3} alt="Statue" className="w-full h-full object-cover " />
                </div>
                <div className="w-1/2 pl-8">
                    <h1 className="text-7xl font-bold text-emerald-400 mb-4">Welcome</h1>
                    <p className="text-lg text-black">To JJM Soap and Detergent Manufacturing.</p>
                </div>
            </section>
        
            <section id='2' className="flex flex-col items-center justify-center h-screen py-10 bg-gray-100 shadow-black">
    <h2 className="text-4xl font-bold text-black mb-8">
        Products
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Apple Watch Card */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Liquid</h5>
                </a>
                <div className="flex items-center justify-between my-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₱28</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                     dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>

        {/* JJM Lemon Dishwashing Card */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="/docs/images/products/lemon-dishwashing.png" alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Lemon Dishwashing Liquid</h5>
                </a>       
                <div className="flex items-center justify-between my-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₱25</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                      dark:focus:ring-blue-800">Buy Now</a>
                </div>
            </div>
        </div>

        {/* JJM Antibac Fabric Card */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={conditioner} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Antibac Fabric Conditioner</h5>
                </a>
                <div className="flex items-center justify-between my-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₱35</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                      dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>

        {/* JJM Calamansi Dishwashing Paste Card */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="/docs/images/products/calamansi-dishwashing.png" alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Paste</h5>
                </a>
                <div className="flex items-center justify-between my-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₱55</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                      dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
    </div>
</section>


            <div className="bg-green-900 text-white h-1/2 p-6">
            <section id='3' className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
            <h1 className="text-2xl font-bold text-green-300">JJM</h1>
            <p className="text-sm text-green-500">Soap and Detergent Manufacturing</p>
            <h2 className="mt-4 text-lg">
            Basta Best Buy at Best Quality JJM nayan!
            </h2>
            <p className="mt-4">
                We take pride in our state-of-the-art manufacturing processes, which prioritize sustainability and quality at every step. 
                By using biodegradable ingredients, recyclable packaging, and reducing waste, we are working towards a cleaner, greener future.
            </p>
            </div>

            <div>
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <ul className="space-y-2">
                <li>📍 Bulacan, Philippines · San Jose del Monte, Philippines</li>
                <li>✉️ negosyongpaunlad@gmail.com</li>
            </ul>
            </div>
            
            <div>
            <img src={card1} className='h-52' alt="" />
            </div>
        </section>
        </div>
        <Footer/>   
        </div>
        </>
    )

}
export default Home