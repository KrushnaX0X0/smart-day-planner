
function Loading() {
    return (
        <div className=" z-40 absolute top-0  h-screen w-screen backdrop-blur-lg bg-black/60 flex flex-col justify-center items-center">
             <div className="relative w-32 h-32 mb-6">
        <div className="absolute inset-0 rounded-full border-t-5 border-white border-opacity-50 animate-spin"></div>
        <div className="absolute inset-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-2xl opacity-20"></div>
      </div>

    

      {/* AI message */}
      <p className="mt-6 text-center text-3xl font-medium text-slate-300 animate-pulse">
        AI is generating your Smart Day Plan...
      </p>

      {/* Background floating orb effect */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-white rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-yellow-500 rounded-full blur-[100px] opacity-20 " />
        
        </div>
    )
}

export default Loading