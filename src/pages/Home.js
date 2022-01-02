import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { Box, Text, Grid, Image } from '@chakra-ui/react'
import Hero from '../components/Hero'
import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText'

const Home = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if(!products) return <div>Loading...</div>

    return (
        <Box>
            <Hero />
            <RichText heading="The relaxation you've been waiting for." text="Our Bath bombs guarantee a fun, relaxing and coloful night."/>
            <Grid templateColumns="repeat(3, 1fr)">
                {products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id}>
                        <Box _hover={{opacity: '80%'}} textAlign="center" position="relative" >
                            <Image src={product.images[0].src}/>
                            <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">{product.title}</Text>
                            <Text position="absolute" bottom="5%" w="100%" color="gray.500">${product.variants[0].price}</Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
           <ImageWithText text="stuff stuff stuff stuff" reverse image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading"/>
           <ImageWithText text="stuff stuff stuff stuff"  image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading"/>
           <ImageWithText text="stuff stuff stuff stuff" reverse image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading"/>
        </Box>
    )
}

export default Home
