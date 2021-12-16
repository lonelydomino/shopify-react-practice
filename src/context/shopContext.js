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
        const checkout = await client.checkout.create()
    }

    fetchCheckout = async () => {

    }

    removeLineItem = async (lineItemIdsToRemove) => {

    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        this.setState({products: products})
    }

    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle)
        this.setState({ product })
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
                    {this.props.children}
                </ShopContext.Provider>
            </div>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopContext, ShopConsumer }

export default ShopProvider
