import React from 'react';
import Link from 'next/link'
import { Box, Heading, Spacer } from '@chakra-ui/react';
// import Project from '../../pages/project'
const Navbar = () => {
  return (
    <>
    <Heading>
    <Link href="/">Ritesh Firodiya</Link>
    <Link href="/project">Project </Link>
    <Link href="/experience">Experience</Link>
    </Heading>
    </>
  )
}


export default Navbar
