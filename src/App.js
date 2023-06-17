import React from "react";
import styles from './app.module.css'
import { FaQuoteLeft } from "react-icons/fa"

const App = () => {
    return (
        <div className="App font-body bg-neutral-200 md:px-36 md:py-12 px-8 py-16">
            <div className="md:grid grid-cols-4 grid-rows-2  gap-5">
                {/* First Testimonial */}
                <div className="bg-primary-100 p-7 md:p-6 relative col-span-2 rounded-lg">
                    {/* <div className="absolute top-0 right-10 z-[-10]" >
                        <img src="/images/bg-pattern-quotation.svg"></img>
                    </div>  */}
                    <div>
                        <div className={`flex items-center mb-3 ${styles.allText}`}>
                            <img src="./images/image-daniel.jpg" className="passport w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-neutral-100 mr-3" ></img>
                            <div className="personal-info">
                                <h1 className="font-semibold text-sm mb-.5 text-primary-white">Daniel Clifford</h1>
                                <p className="font-medium text-xs text-primary-lighter">Verified Graduate</p>
                            </div>
                        </div>
                        <div className="testimony-headline text-lg leading-tight font-semibold text-primary-white mb-3">
                            <h2>
                                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                                in the company I joined. I honestly feel I got every penny’s worth.                         
                            </h2>
                        </div>
                        <div className="testimony-content font-medium text-xs leading-5 text-primary-light">
                            <p>
                                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                                transition and have heard some people who had an amazing experience here. I signed up 
                                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                            </p>
                        </div>
                    </div>                
                    
                </div>

                {/* Second Testimonial */}
                <div className="bg-primary-200 p-7 md:p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                        <img src="./images/image-jonathan.jpg" className="passport w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-neutral-100 mr-3" ></img>
                        <div className="personal-info">
                            <h1 className="font-semibold text-sm mb-.5 text-primary-white">Jonathan Walters</h1>
                            <p className="font-medium text-xs text-primary-lighter">Verified Graduate</p>
                        </div>
                    </div>
                    <div className="testimony-headline text-lg leading-tight font-semibold mb-3 text-primary-white">
                        <h2>
                            The team was very supportive and kept me motivated                         
                        </h2>
                    </div>
                    <div className="testimony-content font-medium text-xs leading-5 text-primary-light">
                        <p>
                            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                            for a big company. This was one of the best investments I’ve made in myself. ”
                        </p>
                    </div>
                </div>
                
                {/* Fifth Testimonial */}
                <div className="bg-primary-white p-7 md:p-6 row-span-2 rounded-lg drop-shadow-md">
                    <div className="flex items-center mb-3"> 
                        <img src="./images/image-kira.jpg" className="passport w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-white mr-3" ></img>
                        <div className="personal-info">
                            <h1 className="font-semibold text-sm mb-.5 text-secondary-200">Kira Whittle</h1>
                            <p className="font-medium text-xs text-secondary-lighter">Verified Graduate</p>
                        </div>
                    </div>
                    <div className="testimony-headline text-lg leading-tight font-semibold mb-3 text-secondary-200">
                        <h2>
                            Such a life-changing experience. Highly recommended!                         
                        </h2>
                    </div>
                    <div className="testimony-content font-medium text-xs leading-5 text-secondary-light">
                        <p>
                            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                            professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                            student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                            100% recommend! ”
                        </p>
                    </div>
                </div>

                {/* Third Testimonial */}
                <div className="bg-primary-white p-7 md:p-6 rounded-lg drop-shadow-md">
                    <div className="flex items-center mb-3"> 
                        <img src="./images/image-jeanette.jpg" className="passport w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-white mr-3" ></img>
                        <div className="personal-info">
                            <h1 className="font-semibold text-sm mb-.5 text-secondary-200">Jeanette Harmon</h1>
                            <p className="font-medium text-xs text-secondary-lighter">Verified Graduate</p>
                        </div>
                    </div>
                    <div className="testimony-headline text-lg leading-tight font-semibold mb-3 text-secondary-200">
                        <h2>
                            An overall wonderful and rewarding experience
                        </h2>
                    </div>
                    <div className="testimony-content font-medium text-xs leading-5 text-secondary-light">
                        <p>
                            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                            while doing something I love. ”
                        </p>
                    </div>
                </div>

                {/* Fourth Testimonial */}
                <div className="bg-primary-300 p-7 md:p-6 col-span-2 rounded-lg">
                    <div className="flex items-center mb-3">
                        <img src="./images/image-patrick.jpg" className="passport w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-100 mr-3" ></img>
                        <div className="personal-info">
                            <h1 className="font-semibold text-sm mb-.5 text-primary-white">Patrick Abrams</h1>
                            <p className="font-medium text-xs text-primary-lighter">Verified Graduate</p>
                        </div>
                    </div>
                    <div className="testimony-headline text-lg leading-tight font-semibold mb-3 text-primary-white">
                        <h2>
                            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                            learning from their experiences was easy.                     
                        </h2>
                    </div>
                    <div className="testimony-content font-medium text-xs leading-5 text-primary-light">
                        <p>
                            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                            gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                            junior developer. The standard is above the rest. You will get the personal attention you need from 
                            an incredible community of smart and amazing people. ”
                        </p>
                    </div>
                </div>
            </div>
            <div className="attribution mt-5">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Adeleke Sherifah</a>.
            </div>
        </div>
    )
}

export default App;
