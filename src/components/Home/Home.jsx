

function App() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      {/* Hero Section */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="relative flex min-h-[510px] flex-col mb-16"> {/* Add margin-bottom here */}
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&w=1785&fit=crop')`,
            }}
          ></div>
          <div className="absolute h-full w-full bg-[#111c2f] opacity-60"></div>
          <div className="relative mt-16 flex flex-col items-center">
            <h1 className="text-center text-5xl font-bold text-white">Find a Game Near You</h1>
            <p className="text-center text-white mt-6">
              Join or create sports games in your local area and meet new people!
            </p>
            <div className="relative mt-8 flex w-full max-w-xl items-center">
              <input
                className="w-full rounded-full border-none bg-white py-3 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                placeholder="Enter your city"
              />
              <button
                className="absolute right-2 flex items-center justify-center rounded-full h-10 w-10 bg-[#2884e6] text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.19-4.4A7.5 7.5 0 112.75 7.5a7.5 7.5 0 0114.97 4.75z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Explore Popular Sports Section */}
        <div className="mx-auto mt-12 max-w-[1200px] px-8"> {/* Adjusted mt-24 to mt-12 */}
          <h2 className="text-center text-3xl font-bold text-[#0e141b]">
            Explore Popular Sports
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[ 
              { name: "Tennis", players: "2,000+", imgUrl: "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Basketball", players: "3,500+", imgUrl: "https://plus.unsplash.com/premium_photo-1668767725891-58f5cd788105?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Soccer", players: "5,000+", imgUrl: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Volleyball", players: "1,200+", imgUrl: "https://plus.unsplash.com/premium_photo-1661963404614-74802f16a7a0?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Cricket", players: "6,000+", imgUrl: "https://images.unsplash.com/photo-1593766788306-28561086694e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Badminton", players: "4,000+", imgUrl: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=3483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            ].map((sport) => (
              <div key={sport.name} className="group relative">
                <div
                  className="h-56 w-full overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
                  style={{
                    backgroundImage: `url(${sport.imgUrl})`,
                  }}
                ></div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-900">{sport.name}</h3>
                  <span className="text-sm text-slate-500">{sport.players} players</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
