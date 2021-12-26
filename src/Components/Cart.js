import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Image
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)
    return (
        <div>
            <Drawer
                isOpen={isCartOpen}
                placement="right"
                onClose={closeCart}
                >
                   <DrawerOverlay>
                       <DrawerContent>
                           <DrawerCloseButton />
                           <DrawerHeader>Your Shopping Cart</DrawerHeader>

                           <DrawerBody>
                                {
                                    checkout.lineItems && checkout.lineItems.map(item => (
                                        <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                                            <Flex alignItems="center" justifyContent="center">
                                                <CloseIcon />
                                            </Flex>
                                            <Flex alignItems="center" justifyContent="center">
                                                <Image src={item.variant.image.src}/>
                                            </Flex> 
                                            <Flex alignItems="center" justifyContent="center">
                                                <Text>{item.title}</Text>
                                            </Flex>
                                            <Flex alignItems="center" justifyContent="center">
                                                <Text>
                                                    {item.variant.price}
                                                </Text>
                                            </Flex>
                                        </Grid>
                                    ))
                                }
                           </DrawerBody>

                           <DrawerFooter>
                               
                               <Button color="blue">Checkout Here</Button>
                           </DrawerFooter>
                       </DrawerContent>
                    </DrawerOverlay> 

                </Drawer>
        </div>
    )
}

export default Cart
