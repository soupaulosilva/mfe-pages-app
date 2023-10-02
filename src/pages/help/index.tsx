import { useAction } from '@/context/action';
import HelpService from '@/services/help'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';

const onResolvedClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
  try {
    const response = await HelpService.resolveClick();

    alert(response.data.message)
  } catch (err) {
    alert(err)
  }
}

export default function About({ location = 'local' }: { location: string }) {
  const { handleClick, clicked } = useAction();
  
  useEffect(() => {
    console.log(localStorage.getItem('token'))
  }, [])
  const frase  = `voce clicou ${clicked}`
  return (
    <div>
      <header>
        <h1>about page rendered from { location }</h1>
      </header>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <p>{frase}</p>
      <footer>
        <button type="button" onClick={handleClick}>resolvido</button>
        <button type="button" onClick={() => toast.success('deu certo')}>teste</button>
      </footer>
    </div>
  )
}
