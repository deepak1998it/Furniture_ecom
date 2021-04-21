import AsyncStorage from '@react-native-community/async-storage';
const CART_KEY = "CART_STOREe";

export const AddToCart = async (product) => {
    var data = await AsyncStorage.getItem(CART_KEY)
    if (!data) {
        await AsyncStorage.setItem(CART_KEY, JSON.stringify([product]))
        return
    }
    data = JSON.parse(data)
    data.push(product)
    if (await ValidateProduct(product['id'])) {
        console.log('product already exist')
        return
    }
    console.log('Adding new Product')
    await AsyncStorage.setItem(CART_KEY, JSON.stringify(data))
}


export const ValidateProduct = async (product_id) => {
    var product_data = await AsyncStorage.getItem(CART_KEY)
    var product_exist = false
    if (!product_data) {
        return product_exist
    }
    JSON.parse(product_data).map((item, index) => {
        console.log(item['id'], product_id)
        if (item['id'] == product_id) {
            product_exist = true
        }
    })
    return product_exist
}

export const clearCart = async () => {
    console.log('clearing cart')
    await AsyncStorage.setItem(CART_KEY, '')

}

export const GetCartProduct = async () => {
    return await AsyncStorage.getItem(CART_KEY)
}