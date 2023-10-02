import { createContext, useContext, useState } from "react";

interface ActionContextProps {
    clicked: boolean;
    handleClick: () => void
}

const ActionContext = createContext<ActionContextProps>({} as ActionContextProps)

const useAction = () => useContext(ActionContext)

const ActionProvider = ( { children }: { children: React.ReactNode }) => {
    // const teste = useAction()
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked((prev) => !prev)
    }

    return (
       <ActionContext.Provider value={{ clicked, handleClick }}>
            { children }
        </ActionContext.Provider>
        
    )
}
export {
    ActionContext,
    ActionProvider,
    useAction
}