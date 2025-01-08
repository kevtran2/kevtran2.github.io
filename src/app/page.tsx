//import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="fixed h-16 top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
        <nav className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <h1 className="bg-white text-black font-bold py-1 px-1 rounded">&lt;/&gt;</h1>
            <a href="#welcome" className="text-xl font-bold">&nbsp;kevintran</a>
          </div>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id='welcome' className="min-h-screen bg-gray-800 text-white flex items-center justify-center ">
        <div className="">
          <h1 className="text-9xl ml-24 text-gray-400 font-extrabold">Hi, I&apos;m Kevin.</h1>
          <p className="text-xl ml-24 mr-24 mt-8 mb-8">
           I graduated from Stanford University in 2022 in Electrical Engineering
          with a Computer Engineering specialization. I enjoy exploring new technologies and building impactful software applications. Currently, I am at Amazon Lab126, 
          where I have been for the past two years. This site is a place for me to share my experiences and projects.
          </p>
          <a 
              href="https://www.linkedin.com/in/kevin-tran-b9ab83160/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex ml-24"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 mr-2" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path 
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.967 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.804c0-1.145-.021-2.619-1.595-2.619-1.595 0-1.839 1.246-1.839 2.537v4.886h-3v-9h2.869v1.228h.041c.399-.756 1.375-1.554 2.831-1.554 3.026 0 3.584 1.993 3.584 4.585v4.741z"
                />
              </svg>
            </a>
        </div>
      </section>

      <section id='projects' className="min-h-screen flex items-center bg-gray-900 pt-16 ">
        <div className='text-white ml-20 mr-20'>
          <div className="flex-row justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 text-black gap-2">
              <div className="hover:bg-gray-700 p-4 m-2 rounded-md">
                {/*<img src="/spotify-youtube.png" alt="spotify youtuber converter image" className="w-full rounded-t-md" />*/}
                <h3 className="text-xl text-white font-bold mt-4">Spotify to Youtube Converter</h3>
                <p className="text-white mt-2">Seemlessly converts your Spotify playlist to a Youtube playlist. I created this program
                  when I was considering if I wanted to use Youtube Music over Spotify. This tool allowed me to quickly move my playlists over
                  and try out the listening experience on Youtube.
                </p>
                <a href="#" className="text-blue-500 mt-4 inline-block hover:text-blue-700">View Project</a>
              </div>
              <div className="hover:bg-gray-700 p-4 m-2 rounded-md">
                {/*<img src="/mortal-coil.png" alt="mortal coil image" className="w-full rounded-t-md" />*/}
                <h3 className="text-xl text-white font-bold mt-4">Mortal Coil</h3>
                <p className="text-white mt-2">I wrote a program in Python and C to solve Mortal Coil, a maze game where every square must be visited exactly once. I wrote search algorithms optimized with heuristics and pruning to solve as many levels as possible. 
                  At each level, the size of the maze becomes much larger, creating a need for search optimizations over a brute force strategy. </p>
                <a href="#" className="text-blue-500 mt-4 inline-block hover:text-blue-700">View Project</a>
              </div>
              <div className="hover:bg-gray-700 p-4 m-2 rounded-md">
                {/*<img src="/" alt="Project 3" className="w-full rounded-t-md" />*/}
                <h3 className="text-xl text-white font-bold mt-4">Simple Poker</h3>
                <p className="text-white mt-2">Inspired by the lack of poker games that are not gaudy and full of virtual slot machines. I created a simple version with UI that is easy to use and easy to look at. Connect and play with friends with no unneccessary ads or visual clutter. </p>
                <a href="#" className="text-blue-500 mt-4 inline-block hover:text-blue-700">View Project</a>
              </div>
              <div className="hover:bg-gray-700 p-4 m-2 rounded-md">
                {/*<img src="#" alt="Project 4" className="w-full rounded-t-md" />*/}
                <h3 className="text-xl text-white font-bold mt-4">ML/AI Project</h3>
                <p className="text-white mt-2">Work in progress. More details coming soon.</p>
                <a href="#" className="text-blue-500 mt-4 inline-block hover:text-blue-700">View Project</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id='experience' className="min-h-screen bg-gray-900 text-white grid pt-32 ">
        <div className="flex p-2 ml-36 mr-36 border-gray-700 border-b-2 border-t-2">
          <div>
            <a href="https://intuita.io/" className="text-white text-xl font-bold inline-block ">Intuita - SWE Intern</a>
            <p className="text-white mt-2">Building templates for code modifications, which allow for seamless automated code base migrations and updates.
            </p>
          </div>
        </div>
        <div className="flex p-2 ml-36 mr-36 border-b-gray-700 border-b-2">
          <div>
            <a href="https://www.zmp.co.jp/en/" className="text-white text-xl font-bold mt-4 inline-block ">ZMP - SWE Intern</a>
            <p className="text-white mt-2">Building face detection for autonomous delivery vehicles.
            </p>
          </div>
        </div>
        <div className="flex p-2 ml-36 mr-36 border-b-gray-700 border-b-2">
          <div>
            <a href="https://www.amazon.com/" className="text-white text-xl font-bold inline-block ">Amazon - Hardware Test Engineer</a>
            <p className="text-white mt-2">Validate performance of Amazon devices with antennas that use Wifi and BT technology.
            </p>
          </div>
        </div>
        <div className="flex p-2 ml-36 mr-36 border-b-gray-700 border-b-2">
          <div>
            <a href="https://www.stanford.edu/" className="text-white text-xl font-bold inline-block ">Stanford CS105 Section Leader</a>
            <p className="text-white mt-2">Led section for CS105, an intro CS course for 2 years.
            </p>
          </div>
        </div>
        <div className="flex p-2 ml-36 mr-36 border-b-gray-700 border-b-20">
          <div>
            <a href="https://www.stanford.edu/" className="text-white text-xl font-bold inline-block ">Stanford University - B.S. in Electrical Engineering (Computer Engineering)</a>
            <p className="text-white mt-2">Completed the EE and CS core along with classes in AI, Robotics, and Systems.
            </p>
          </div>
        </div>
      </section>

      <section id='contact' className="bg-gray-900 flex items-center justify-center text-white p-4 ">
      <p className="">Contact me via &nbsp;</p>
        <div>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/kevin-tran-b9ab83160/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 mr-2" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path 
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.967 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.804c0-1.145-.021-2.619-1.595-2.619-1.595 0-1.839 1.246-1.839 2.537v4.886h-3v-9h2.869v1.228h.041c.399-.756 1.375-1.554 2.831-1.554 3.026 0 3.584 1.993 3.584 4.585v4.741z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© 2024 Kevin Tran. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/kevin-tran-b9ab83160/" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/kevtran2" className="hover:text-blue-400">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
