import React, { useContext } from 'react'
import { Flex, Icon, Image, Text } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    return (
        <Flex backgroundColor="#FFA8E2" flexDirection="row" justifyContent="space-between" p="2rem" >
            <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}></Icon>
            <Link to="/"><Image cursor="pointer" src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540" w={100} h={100}/></Link>
            <Icon cursor="pointer" fill="white" as={MdShoppingBasket} w={30} h={30} onClick={()=> openCart()}></Icon>
        </Flex>
    )
}

export default NavBar
