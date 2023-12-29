import React, { useEffect, useState } from "react";
import Profile1 from '../img/profile-ku.jpg';
import Profile2 from '../img/mark-zuckerberg.jpg';
 
const Home = () => {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.org/comments');
            const result = await response.json();
            setChatData(result);
        } catch (error) {
            console.error('Error fetching chat data:', error);
        }
        };

        fetchData();
    }, []);
   return (
    <div>
        <div class="flex h-dvh antialiased  text-gray-800">
            <div class="flex flex-row h-full w-full overflow-x-hidden bg-cover bg-center">
                <div class="flex flex-col flex-auto h-full lg:p-6">
                    <div class="flex flex-col flex-auto flex-shrink-0bg-gray-100 h-full">
                        <header class="bg-blue-600 p-3 text-gray-700 flex items-center">
                            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                <img src={Profile2} class="rounded-full w-auto" alt=""/>
                            </div>
                            <h1 class="text-2xl text-white font-semibold ml-3">Mark Zuckerberg</h1>
                        </header>            
                        <div class="flex flex-col h-full bg-slate-100 rounded-2xl overflow-x-auto mb-4 mt-4 p-3">
                            <div class="flex flex-col h-full">
                                <div className="grid grid-cols-12" id="chat-container">
                                {chatData.map((item, index) => {
                                    const userId = item.userId;
                                    const comment = item.comment;
                                    const profileImage = userId === 1 ? Profile1 : Profile2; // Adjust this based on the number of users

                                    return (
                                    <div key={index} className="col-start-1 col-end-13 pb-7 rounded-lg">
                                        <div className={`flex ${userId === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-indigo-500 flex-shrink-0">
                                            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-indigo-500 flex-shrink-0">
                                            <img src={profileImage} className="rounded-full w-auto" alt="" />
                                            </div>
                                        </div>
                                        <div className={`relative ${userId === 1 ? 'mr-3' : 'ml-3'} text-sm ${userId === 1 ? 'bg-blue-100' : 'bg-white'} py-2 px-4 shadow rounded-xl`}>
                                            <div>{comment}</div>
                                            <div className={`absolute text-xs bottom-0 ${userId === 1 ? 'right-0 mr-2 -mb-5' : 'left-0 ml-2 -mb-5'} text-gray-500`}>
                                                Dilihat
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center h-16 bg-blue-600 w-full px-4 py-5">
                            <div>
                                <button class="flex items-center justify-center text-white hover:text-gray-600">
                                    <svg
                                    class="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-grow ml-4">
                                <div class="relative w-full">
                                    <input type="text" class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" placeholder="Tulis Pesan ..."/>
                                    <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                        <svg
                                            class="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="ml-4">
                                <button class="flex items-center justify-center bg-green-500 hover:bg-green-400 rounded-full text-white px-3  py-3 lg:py-2 flex-shrink-0">
                                    <span class="hidden sm:inline">Send</span>
                                    <span class="ml-0 lg:ml-2">
                                        <svg
                                            class="w-4 h-4 transform rotate-45 -mt-px"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
};
 
export default Home;