import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Menu } from 'antd';


const Sidebar = () => {
  
  const baseURl = 'https://gist.githubusercontent.com/lakehouseadmin/800fdf1f30cf202172a55d5c1daa1290/raw/b2b92dd9b051e7b2d4b916d2873c06a7aa1b9699/sidebar.json'

  const [sidebarData, setSidebarData] = useState([])

  useEffect(() => {
    axios.get(baseURl).then((Response) => {
      
      setSidebarData(Response?.data.data)
    })
  }, [])

  const items = [sidebarData.map((item) => {
    
    const returnData = {
      label: item.category.name,
      children: item.sub_categories.map((childrendata) => {
        const ReturnChildrenData = {
          label:childrendata.name
        }
        return ReturnChildrenData
      }),
      icon: <img src={item.category.ui_info.icon} alt='menuIcon'
      height= '70%'
      />,
      }
      return returnData
    })]
  
  return (
    <div>

      <Menu
    
        style={{
        width: 256,
        }}
    
        mode="inline"
        items={items[0]}
      />
    </div>
  )
}

export default Sidebar