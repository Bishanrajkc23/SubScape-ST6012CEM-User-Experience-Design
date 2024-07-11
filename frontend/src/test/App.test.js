import axios from "axios";
import loginMock from "../mock/login_mock";
import productsMock from "../mock/products_mock";
const baseUrl = "http://localhost:5600";

describe("API Testing", () => {
    it('Test should Work', async () => {
        const response = await axios.get(`${baseUrl}/test`);
        expect(response.status).toEqual(200);
    });

    it("Login should work", async () => {
        const response = await axios.post(`${baseUrl}/api/user/login`, loginMock);
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Fetch all products and match all data with mock data
    it("Fetch all products", async () => {
        const response = await axios.get(`${baseUrl}/api/product/get_products`);
        expect(response.status).toEqual(200);
        expect(response.data.products).toBeDefined();

        // Matching each product with mock data
        response.data.products.forEach((individualProduct, index) => {
            expect(individualProduct.productName).toEqual(productsMock[index].productName);
        });
    });

    // Add more test cases here...

    // Test adding a product to the cart
    it("Add a product to the cart", async () => {
        const productId = "YOUR_PRODUCT_ID"; // Replace with a valid product ID
        const response = await axios.post(`${baseUrl}/api/cart/add_to_cart`, { productId });
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test viewing the contents of the cart
    it("View the contents of the cart", async () => {
        const response = await axios.get(`${baseUrl}/api/cart/view_cart`);
        expect(response.status).toEqual(200);
        // Add more assertions as needed
    });

    // Test updating the quantity of a product in the cart
    it("Update the quantity of a product in the cart", async () => {
        const cartItemId = "YOUR_CART_ITEM_ID"; // Replace with a valid cart item ID
        const updatedQuantity = 2; // New quantity
        const response = await axios.put(`${baseUrl}/api/cart/update_quantity`, { cartItemId, quantity: updatedQuantity });
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test removing a product from the cart
    it("Remove a product from the cart", async () => {
        const cartItemId = "YOUR_CART_ITEM_ID"; // Replace with a valid cart item ID
        const response = await axios.delete(`${baseUrl}/api/cart/remove_from_cart`, { data: { cartItemId } });
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test creating an order
    it("Create an order", async () => {
        const orderData = {
            // Order data
        };
        const response = await axios.post(`${baseUrl}/api/order/create_order`, orderData);
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test viewing orders
    it("View orders", async () => {
        const response = await axios.get(`${baseUrl}/api/order/view_orders`);
        expect(response.status).toEqual(200);
        // Add more assertions as needed
    });

    // Test viewing a specific order
    it("View a specific order", async () => {
        const orderId = "YOUR_ORDER_ID"; // Replace with a valid order ID
        const response = await axios.get(`${baseUrl}/api/order/view_order/${orderId}`);
        expect(response.status).toEqual(200);
        expect(response.data.order).toBeDefined();
    });

    // Test updating an order status
    it("Update an order status", async () => {
        const orderId = "YOUR_ORDER_ID"; // Replace with a valid order ID
        const updatedStatus = "Shipped"; // New status
        const response = await axios.put(`${baseUrl}/api/order/update_status/${orderId}`, { status: updatedStatus });
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test deleting an order
    it("Delete an order", async () => {
        const orderId = "YOUR_ORDER_ID"; // Replace with a valid order ID
        const response = await axios.delete(`${baseUrl}/api/order/delete_order/${orderId}`);
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test updating user profile
    it("Update user profile", async () => {
        const updatedProfileData = {
            // Updated profile data
        };
        const response = await axios.put(`${baseUrl}/api/user/update_profile`, updatedProfileData);
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });

    // Test deleting user profile
    it("Delete user profile", async () => {
        const response = await axios.delete(`${baseUrl}/api/user/delete_profile`);
        expect(response.status).toEqual(200);
        expect(response.data.success).toEqual(true);
    });
});
