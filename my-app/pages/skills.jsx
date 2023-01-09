import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState, useEffect}from 'react'
import { Text } from "@chakra-ui/react"

const Skills = () => {
  const [data, setData] = useState([]);
  const getData = async () =>{
    let res = await axios.get("http://localhost:8080/skills")
    console.log(res)
    setData(res.data)
    }
    useEffect(() => {
      getData()    
    }, [])
  return (
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
    <Heading>Tech Stack</Heading>
      <Text>
        {data.map((ele)=>{
        return (
          <div key={Math.random()}>
            <li bg="skyblue">{ele}</li>
          </div>
        )
      })}
      </Text>
    </Box>
  )
}
export default Skills