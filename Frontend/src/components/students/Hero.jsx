import SearchBar from "./SearchBar"

const Hero = () => {
  return (
    <div style={{textAlign: 'center', padding: '50px 0',background: 'linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',backgroundSize: 'cover',backgroundPosition: 'center',color: 'white',backgroundRepeat:'no-repeat',}}>
        <h1 style={{fontWeight: '500',fontSize:'40px'}}>Welcome to LearnSphere the <span style={{color: 'blue',fontWeight: '900'}}>No #1</span> course provider on the web right now</h1>
        <p className="lead" style={{color: 'white'}}>Choose from over 1000 courses and start learning new skills today with world class instructors and a supportive community to achieve your personal and professional goals.</p>

        <SearchBar />
    </div>
  )
}

export default Hero