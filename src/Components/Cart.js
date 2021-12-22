import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton 
} from '@chakra-ui/react'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)
    return (
        <div>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                >
                   <DrawerOverlay>
                       <DrawerContent>
                           <DrawerCloseButton />
                           <DrawerHeader>Your Shopping Cart</DrawerHeader>

                           <DrawerBody>
                               This is your cart.
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