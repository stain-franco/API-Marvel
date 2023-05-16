'use client';
import Image from 'next/image'
import NavBar from '../navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';



function Home() {
  const [personajes, setPersonajes] = useState([]);
  const [offset, setOffset ] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [x, setX] = useState(0);

  
  const algo = (): any =>{
    
    const x = Math.floor(Math.random() * 100)
    console.log(x) 
    return setX(x);
  }
  const barra = `${x}`

  const opts = {
    height: '191',
    width: '380',
    playerVars: {
      // https://www.youtube.com/watch?v=UhVjp48U2Oc
      autoplay: 1,
    },
  }

  function getData(){
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2ec6fc94a12a9574c07814a323ecfd1a&hash=09d08e5b686b68603b5f393f78021011&limit=5&offset=${offset}`) 
    .then(res=>{
      setPersonajes(res.data.data.results)
      setTotalItems(res.data.data.total)
      console.log(res.data)
    }).catch( error => console.error(error) )
  }

  useEffect(()=>{
   getData()
   algo()
  },[offset])
console.log(personajes)
  return (

    <div className="">
      
      <NavBar/>
      <main className="bg-[url('/Fondo.png')]  bg-cover bg-center w-full m-auto">
        <div className='flex flex-wrap justify-center gap-[22px] pt-[38px] pb-[22px]'>
          <div className='w-[510px] h-[192.35px] border border-bord flex justify-center items-center '>
          
          <div className='w-[460px] bg-white h-[20px] border border-solid-9 border-yellow-200'>
            <div style={{width: `${barra}%`}} className={ `bg-turquesa h-[18.5px] z-10 relative duration-700`}>
            </div>
            
          </div>
          
          
          </div> 
          <div className=' w-[382px] h-[192.35px] border border-bord'>
          <div className="relative w-[380px] ">
          <YouTube videoId="UhVjp48U2Oc" opts={opts}  />
          </div>
          </div>
            <div className='w-[382px] h-[192.35px] border border-bord'>
            <Image
              src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
              alt="Picture of the author"
              className="w-[382px] h-[191px]"
              width={1200}
              height={630}
            />
          </div>
        </div>
      <div className="flex flex-wrap justify-center gap-[21px]">
      {personajes.map((personaje: any) => (
        <button onClick={algo}>
    <div key={personaje.id} className=" flex flex-col justify-center w-[248px] h-[448px]  border border-bord rounded-[5px] bg-[url('/Fondoniveles.png')] bg-cover bg-center  from-black via-gray-900">
        <div className='flex '>
        
        <Image
          src="/Formaniveliz.png"
          alt="Picture of the author"
          className="m-auto"
          width={28}
          height={16.04}
        />
        <h1 className='text-center text-dorado0 m-auto'>{personaje.name}</h1> 
        <Image
          src="/Forma nivel.png"
          alt="Picture of the author"
          className="m-auto"
          width={28}
          height={16.04}
        />
        </div>
      <div className="flex flex-col justify-center items-center ">
       {/* bg-[url('/circulo.png')] bg-no-repeat bg-cover */}
        <div className="flex flex-col justify-start items-center relative bg-[url('/circulo.png')] bg-no-repeat bg-cover bg-center mt-[40px] mb-[35px] mx-[35px] pt-[15px] pb-[15px] px-[15px]"> 
        <Image
            className="absolute top-[-12px]"
            src="/diamante.png"
            alt=""
            width={13.86}
            height={20.2}
          />
          <Image
            className="w-24 h-24  rounded-full "
            src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}  
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="absolute bottom-[-16px]"
            src="/diamante.png"
            alt=""
            width={13.86}
            height={20.2}
          />
        </div>
        <div className="flex flex-col items-center gap-[20px] ">
          <p className="rounded-[5px] text-white border border-gray-200 w-[178px] h-[49px] flex justify-start items-center pl-[20px]">
            Comics: {personaje.comics.available}
          </p>
          <p className="rounded-[5px] text-white border border-gray-200 w-[178px] h-[49px] flex justify-start items-center pl-[20px]">
            Películas: {personaje.series.available}
          </p>
          
        </div>
        
        
      </div>
      
    </div>
    </button>
    
  ))}
</div>
      
      <div>
      <div className="flex items-center justify-center gap-[20px] pt-[22px] pb-[33px]">
      
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-full  bg-dorado2" 
            onClick={()=>{
              if (offset > 0) {
                setOffset(offset-5)
              }
            }} disabled={offset <= 0}>
          <Image
              src="/pagelef.png"
              alt="Picture of the author"
              className=""
              width={8.12}
              height={13.7}
            />
          </button>
        

          <p className="text-[20px] text-dorado2  h-[26.88px]">
            {Math.floor(offset/5)+1} 
            <span className="">/</span>
             {Math.ceil(totalItems/5)} 
          </p>
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full  bg-dorado2" 
        onClick={()=>{
          if (offset + 5 < totalItems) {
            setOffset(offset + 5 )
            }
          }} disabled={offset + 5 >= totalItems
        }>
        <Image
              src="/pagerig.png"
              alt="Picture of the author"
              className=""
              width={7.61}
              height={13.7}
            />
        </button>
        
        </div>
      </div>
      
      </main>
    </div>
  )
}

export default Home;