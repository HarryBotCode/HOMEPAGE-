import React from 'react'
import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import LOGO from '../Images/LOGO.png'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import wallpaper from '../Images/wallpaper.png'
import { Divider } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
    <Flex
    flexDir='column'
    justifyContent='center'
    w='100%'
    
    >

        <Flex flexDir='row' 
         
        w='100%' 
        justifyContent='center'
        
        px={{base:'4', sm:'6', md:'10', lg:'12', xl:'14'}}
        opacity='.85'
        top="0"
        zIndex='sticky'
        as='nav'
        h='100px'
        >
            
            
            
            <Flex 
            flexDir='row'
            mt='20px'
            mb='20px'
            justifyContent='space-evenly'
            w='100%'
            alignItems='center'
            >
               
            <Box boxSize='135px'>

               <Image src={LOGO}  mt='20px' />
            </Box>
                <Text fontWeight='semibold' fontSize='20px'>Home</Text>
                <Text fontWeight='semibold' fontSize='20px'>Our Services</Text>
                <Text fontWeight='semibold' fontSize='20px'>Case Studies</Text>
                <Text fontWeight='semibold' fontSize='20px'>Blog</Text>
                <Text fontWeight='semibold' fontSize='20px'>Contact</Text>
        
                <Button _hover={{bg:'#011d54'}} h='55px' w='260px' borderRadius='15px' bg='#00308f' color='white' fontSize='23px'>Schedule a call</Button>
            </Flex>
          

            
        
        </Flex>


        <Divider borderWidth="1px" borderColor={'black'}/>
       
    
        <Flex justifyContent='center'
        
        mt='40px'
       
        
        >
          <Flex 
          w='80%'
          flexDir='column'
          justifyContent='center'
          
          >
          <Heading 
          fontWeight='bold' 
          fontSize='60px'
          textAlign='center'
          
          > SKYROCKET YOUR HOTEL BOOKINGS WITH OUR PROVEN MARKETING SYSTEMS - GET 50+ DIRECT BOOKINGS IN 90 DAYS!
          </Heading>

        <Flex
        justifyContent='center'
        >
          
            <Box boxSize='75px' mt='-40px' >
            <Image src={img2} />
            </Box>
            
            <Box boxSize='200px' mt='-80px' ml='780px'>
            <Image src={img3} />
            </Box>
            <Box boxSize='75px' mt='-10px'>
            <Image src={img1} />
            </Box>
            

        </Flex>

        


        </Flex>
         
        </Flex>
        <Flex
        justifyContent='center'>

        <Button _hover={{bg:'#011d54'}} mt='-50px' h='75px' w='400px' borderRadius='15px' bg='#00308f' color='white' fontSize='23px'> Unlock my booking boost now</Button>
        </Flex>
          <Flex
          justifyContent='center'
          w='100%'
          mt='40px'
          mb='-200px'
          zIndex='0'
          >
            
            <Image w='80%' src={wallpaper}/>
          </Flex>

            <Flex bg='#00308f' w='100%' h='30vh'>h</Flex>
  </Flex>
</>  
  )
}

export default Home