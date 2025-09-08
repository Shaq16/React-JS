import { useState } from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'

function App() {
  const users =[
  {
    "id": 1,
    "name": "Alice Johnson",
    "city": "New York",
    "profession": "Software Engineer"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "city": "London",
    "profession": "Graphic Designer"
  },
  {
    "id": 3,
    "name": "Charlie Kim",
    "city": "Seoul",
    "profession": "Product Manager"
  },
  {
    "id": 4,
    "name": "Diana Patel",
    "city": "Toronto",
    "profession": "Data Scientist"
  },
  {
    "id": 5,
    "name": "Ethan Wang",
    "city": "Singapore",
    "profession": "UX Researcher"
  }
]

return (
    <div className="flex justify-center items-start space-x-10 p-6">
      {users.map((user) => (
        <Card
          key={user.id}
          userName={user.name}
          userCity={user.city}
          profession={user.profession}
        />
      ))}
    </div>
  );

}

export default App
