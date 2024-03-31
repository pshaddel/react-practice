import { PropsWithChildren, useState } from "react";

// Drilling
export function Main({}) {
  const [user] = useState('Poorshad');
  return <Dashboard user={user}/>
}

function Dashboard({ user }: { user: string }) {
  return <List user={user} />
}

function List({ user }: { user: string }) {
  return <Item user={user} />
}

function Item({ user }: { user: string }) {
  return <div>
    <p>{user}</p>
    <p>Content</p>
  </div>
}



// No Drilling - Avoid Context
export function Main2({}) {
  const [user] = useState('Poorshad');
  return <Dashboard2>
    <List2>
      <Item2 user={user} ></Item2>
    </List2>
  </Dashboard2>
}

function Dashboard2({ children }: PropsWithChildren) {
  return <div>
    Dashboard
    {children}
    </div>
}

function List2({ children }: PropsWithChildren) {
  return <div>
    List
    {children}
  </div>
}

function Item2({ user }: { user: string }) {
  return <div>
    <p>{user}</p>
    <p>Content</p>
  </div>
}


