import './App.css'
import gitphoto from './assets/gitlogo.svg'
import linkphoto from './assets/linkedin.svg'

function App(){
  

  return (
    <section id='cont'>
        <div className='ctn'>

          <div className='hero'>
            <h2>Engenheiro da Computação</h2>
            <h1>Thiago .S</h1>
            <button className='btn'>Fale Comigo!</button>
          </div>

          <div className='GitInfo'>
            <div className='logo'>
              <img src={gitphoto} className="git" width="40" height="40" alt="" />
              <h3 className='nh3'>
                GitHub
              </h3>
            </div>
            <h3>
              GitHub - Repositórios Públicos 
              52 Repositórios
            </h3>
          </div>
          <div className='LinkDinInfo'>
            <div className='logo'>
              <img src={linkphoto} className="linkd" width="40" height="40" alt="" />
              <h3 className='nh3'>
                LinkDin
              </h3>
            </div>
            <h3>
              LinkDin 
              540 Conexões
            </h3>
          </div>


        </div>
          {/*
          <div className='rIcon'>
            <img src=".assets/gitlogo.svg" className="git" width="40" height="40" alt="" />
            <img src=".assets/linkdin.svg" className="linkd" width="40" height="40" alt="" />
            <img src=".assets/instagram.svg" className="insta" width="40" height="40" alt="" />
          </div>
          */}
    </section>
  )

}
export default App
