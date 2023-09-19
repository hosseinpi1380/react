import { createContext,useState } from "react";
export const UsernameContext = createContext();
const UsernameContextProvider = ({ children }) => {
    const [username, setUsername] = useState('hossein')
    return <UsernameContext.Provider  value={username}>
        {children}
    </UsernameContext.Provider>
}
export default UsernameContextProvider;