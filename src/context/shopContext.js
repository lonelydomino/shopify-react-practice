import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
  });

class ShopProvider extends Component {
    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false
    }

    createCheckout = async () => {

    }

    fetchCheckout = async () => {

    }

    removeLineItem = async (lineItemIdsToRemove) => {

    }
    fetchAllProducts = async () => {

    }

    fetchProductWithHandle = async (handle) => {

    }

    closeCart = () => {

    }

    openCart = () => {

    }

    closeMenu = () => {

    }

    openMenu = () => {

    }

    render() {
        return (
            <div>
                <ShopContext.Provider>
                    {}
                </ShopContext.Provider>
            </div>
        )
    }
}

export default ShopProvider
