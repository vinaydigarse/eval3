import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Badge, Box, Heading, Link, Image, Text } from '@chakra-ui/react';


const Project = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get("https://api.github.com/search/repositories?q=user:riteshf+fork:true&sort=updated&per_page=10&type=Repositories")
    console.log(res.data.items)
    setData(res.data.items)
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <Text>
        {data.map((ele)=>{
        return (
          <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
          <Link href={ele.html_url} borderRadius='full' px='2' colorScheme='teal'>
            GitHub
          </Link>
          <Text
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {ele.name}
        </Text>
        </Box>
        <Box>
        {ele.full_name}
        </Box>
        <Box>Star -{ele.stargazers_count}</Box> 
        <Box>Fork -{ele.forks}</Box> 
        <Box>Language : {ele.language}</Box>

      </Box>
    </Box>
        )
      })}
      </Text>
    </>
  )
}

export default Project

