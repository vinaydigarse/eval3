import { Box, Heading, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState, useEffect}from 'react'
import { Text } from "@chakra-ui/react"

const Experience = () => {
  const [data, setData] = useState([]);
  const getData = async () =>{
    let res = await axios.get("http://localhost:8080/experience")
    console.log(res)
    setData(res.data)
    }
    useEffect(() => {
      getData()    
    }, [])
  return (
   <>
   <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
    <Heading>Experience</Heading>
      <Text>
        {data.map(({role, year})=>{
        return (
          <div key={Math.random()}>
            <li bg="skyblue">{role}</li>
            <p>{year}</p>
          </div>
        )
      })}
      </Text>
    </Box>
   
   </>
  )
}

export async function getServerSideProps(){
  let r = await fetch("http://localhost:8080/skills");
  let d= await r.json();
  console.log(d);
  return {
    props: {
      blogs: d,
    }
  }
}
export default Experience