
import { createContext, useContext, useState } from "react";
const cmsContext = createContext();
export const useCms = () => {
    return useContext(cmsContext)
}
export const CmsProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [detailModal,setDetailModal]=useState(false);
    const [editModal,setEditModal]=useState(false);
    return <cmsContext.Provider value={{ showModal, setShowModal,detailModal,setDetailModal, editModal, setEditModal }}>
        {children}
    </cmsContext.Provider>
}
