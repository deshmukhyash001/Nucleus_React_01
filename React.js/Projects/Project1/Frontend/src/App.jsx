import {React} from "react"
import "./App.css"

function App(){
  let Name = "Yash "
  let Surname = "Deshmukh"
  
  let Fullname = Name+Surname
  return(
    <div className="bg-black text-white h-screen w-full flex justify-center items-center ">

      <div className="main-box m-6 p-2 rounded-xl border-[0.1px] border-gray-300">
        <div className="box1 gap-4 flex flex-col justify-between">
          <div className="section1 gap-4 flex justify-between">

            <div className="card1 h-56 w-56 border-[0.1px] p-2 justify-between border-amber-50 rounded-xl flex flex-col">
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <img className="h-12" src="https://sheryians.com/images/home/future-ready/yt.png" alt="" />
                  <h3 className="text-4xl">600K</h3>
                </div>
                <p>Nucleus Subscriber</p>

              </div>

              <p> vero vel dolore, corporis mollitia!</p>
            </div>

            <div className="card2 h-56 w-56 border-[0.1px] p-2 gap-16 border-amber-50 rounded-xl justify-between flex flex-col">
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <img className="h-12" src="https://sheryians.com/images/home/future-ready/yt.png" alt="" />
                  <h3 className="text-4xl">600K</h3>
                </div>
                <p>Nucleus Subscriber</p>

              </div>

              <p>corporis mollitia!</p>
            </div>
          </div>
          <div className="section2 w-[480px] border-[0.1px] border-amber-50 rounded-xl p-2">
            <p className="text-4xl flex uppercase">Unlock
                <div className="flex">
                  <img className="h-8 w-8  border-2 border-white rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg/250px-Shah_Rukh_Khan_in_2023_%281%29.jpg" alt="" />
                  <img className="h-8 w-8 -ml-3 border-2 border-white rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg/250px-Shah_Rukh_Khan_in_2023_%281%29.jpg" alt="" />
                  <img className="h-8 w-8 -ml-3 border-2 border-white rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg/250px-Shah_Rukh_Khan_in_2023_%281%29.jpg" alt="" />
                  <img className="h-8 w-8 -ml-3 border-2 border-white rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/9/98/Sunny_Deol_at_Dev%27s_Anand%27s_autobiography_release.jpg" alt="" />
                </div>
                Your <br />First Job and Internship with us</p>
          </div>

        </div>


        <div className="box2 "></div>
      </div>

    </div>
  )
}

export default App