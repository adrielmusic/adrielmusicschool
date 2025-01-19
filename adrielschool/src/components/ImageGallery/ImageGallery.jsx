import React, { useState } from 'react'
import OnlineTeach from '../../assets/videos/online-teach.mp4'
const Gallery = [
    {
        id:1,
        type:'img',
        data: '',
        url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
        age: '',
        location: '',
    },
    {
        id:2,
        type:'img',
        url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
        name: '',
        age: '',
        location: '',
    },
    {
        id:3,
        type:'img',
        url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
        name: '',
        age: '',
        location: '',
    },
    {
        id:4,
        type:'img',
        url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
        name: '',
        age: '',
        location: '',
    },
    {
        id:5,
        type:'img',
        data: '',
    },
    {
        id:6,
        type:'img',
        url: '',
        name: '',
        age: '',
        location: '',
    },
    {
        id:7,
        type:'img',
        url: '',
        name: '',
        age: '',
        location: '',
    },
    {
        id:8,
        type:'img',
        url: '',
        name: '',
        age: '',
        location: '',
    },
    {
        id:9,
        type:'img',
        url: '',
        name: '',
        age: '',
        location: '',
    },
    {
        id:10,
        type:'img',
        url: '',
        name: '',
        age: '',
        location: '',
    },

]
const ImageGallery = () => {
    const [data, setData] = useState({url : '', i : 0})
    const ViewGallery = (data) =>{
        let url = data.url;
        let id = data.id;
        console.log(url)
        console.log(id)
        setData({url, id})
    }
  return <>
  {data.url && 
  <div style={{
    width: "100%",
    background: "black",
    height: "100vh",
    position: "absolute",
    overflow: "hidden",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    zIndex: 1000,
  }}>
    <img src={data.url} alt="" className='w-90 h-96 object-cover'/>
    <button>previous</button>
    <button>Next</button>
  </div>
}
    <div className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Students Gallery</h1>
        <p className='mb-4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
                Gallery.map((data)=>{
                    return(
                        
                    <div onClick={()=>ViewGallery(data)} className="relative overflow-hidden rounded-2xl shadow-lg group hover:cursor-pointer">
                    {
                    data.type == "img" ? (
                    <>
                    <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food" class="w-full h-48 object-cover"/>
                    </>
                    ):(
                        <video className='w-full h-48 object-cover' controls>
                        <source src={OnlineTeach} type="video/mp4"/>
                       </video>
                    )
                }
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-xl font-bold text-white">Joshuva</h4>
                            <p className='text-white'>Age : 16</p>
                            <p className='text-white'>India - Bangalore</p>
                        </div>
                    </div>
                   </div>

                    )
                })
            }

        </div>
    </div>
</div>
  </>
}

export default ImageGallery