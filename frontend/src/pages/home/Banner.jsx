export default function Banner () {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div><img src="src/assets/banner.png" alt="" /></div>
      <div className="md:w-1/2 w-full">
        <h1 className="text-blue-950 md:text-5xl text-3xl font-medium mb-7">New Releases This Week</h1>
        <h3 className="text-primary font-medium mb-6 text-2xl">Discover the latest page-turners across every genre.</h3>
        <p className="mb-10">From gripping thrillers to inspiring non-fiction, explore our handpicked selection of new arrivals. Whether you're a casual reader or a devoted bookworm, there's something fresh waiting for you</p>
        
        <div className="flex items-center gap-4">
          <button className="bg-white-400 px-6 py-2 rounded-md text-base font-bold ring-2 ring-blue-950 hover:text-white hover:bg-blue-950 transition-all cursor-pointer duration-200">Find your read</button>
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>

      
    </div>
  )
}