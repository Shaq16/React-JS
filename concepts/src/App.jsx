import { useState } from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'

function App() {
  const users =[
  {
    "id": 1,
    "name": "Alice Johnson",
    "city": "New York",
    "profession": "Software Engineer",
    "img":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "city": "London",
    "profession": "Graphic Designer",
    "img":"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    "id": 3,
    "name": "Charlie Kim",
    "city": "Seoul",
    "profession": "Product Manager",
    "img":"https://images.unsplash.com/photo-1605504836193-e77d3d9ede8a?q=80&w=1163&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    "id": 4,
    "name": "Diana Patel",
    "city": "Toronto",
    "profession": "Data Scientist",
    "img":"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    "id": 5,
    "name": "Ethan Wang",
    "city": "Singapore",
    "profession": "UX Researcher",
    "img":"https://plus.unsplash.com/premium_photo-1661918391309-7ddd44addee6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
]

return (
    <div className="flex justify-center items-start space-x-10 p-6">
      {users.map((user) => (
        <Card
          userImg={user.img}
          key={user.id}
          userId={user.id}
          userName={user.name}
          userCity={user.city}
          userProf={user.profession}
        />
      ))}
    </div>
  );

}

export default App