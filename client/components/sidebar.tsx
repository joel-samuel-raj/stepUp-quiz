import Drawer from "@mui/material/Drawer"
import { useState } from "react"

export default function SideBar() {
    const [ drawer, setDrawer ] = useState( false )
    return (
        <>
            <Drawer open={true}>
                
            </Drawer>
        </>
    )
}