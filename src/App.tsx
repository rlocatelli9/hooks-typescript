import React, {
  useCallback, 
  useEffect, 
  useState, 
  useMemo,
  useRef
} from 'react';

interface User {
  name: string;
  login: String;
  avatar_url: string;  
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [techs, setTechs] = useState<string[]>([
    "React JS",
    "Node.js",
    "React Native",
    "Typescript",
    "Figma",
    "Git",
    "Git Flow",
    "Ionic"
  ])
  const inputRef = useRef<HTMLInputElement>(null);


  //sem hook
  // const techMap = techs.map(element => element).join(', ');

  const techMap = useMemo(()=> techs.map(element => element).join(', '), [techs]);

  const loadData = useCallback(async ()=>{
    const response = await fetch('https://api.github.com/users/rlocatelli9');
    const data = await response.json();

    setUser(data);
  },[])

  useEffect(()=>{
    loadData();
  },[loadData])

  inputRef.current?.focus();


  return (
    <>
      <h1>{user.name}</h1>
      <h1>{techMap}</h1>

      <form action="">
        <input type="text" ref={inputRef}/>
      </form>
    </>
  )
}

export default App;
