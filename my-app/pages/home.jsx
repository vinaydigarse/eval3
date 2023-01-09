import { Box,Image, Button, Heading, Link, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, {useState, useEffect}from 'react';
// import Image from 'next/image';

const username = "riteshf";

const Homie = () => {
  const [data, setData] = useState([]);
  
  const getData = async () =>{
    let res = await axios.get(`https://api.github.com/users/${username}`)
    console.log(res)
    setData(res.data)
    }
    useEffect(() => {
      getData() 
    }, [])
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
      
      {/* <Image href={data.avatar_url} alt="ritesh" /> */}
      <Image borderRadius='full'
      boxSize='150px'
      src={data.avatar_url} width="100px" height={"100px"}/>
      <Heading>{data.name}</Heading>
      <Link href={data.html_url}>@{data.login}</Link>
      <Text>{data.bio}</Text>
      <Link href="../resume/resume.pdf" download><Button>Resume</Button></Link>
      <Link href={data.html_url}><Button>Follow</Button></Link>
    </Box>
  )
}
export default Homie;