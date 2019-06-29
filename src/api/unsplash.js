import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
        "Client-ID a1352d9b662afe6c8ce64dfb3929c20c21aef2aa281d7377da9cc522e0284d0f"
    }
});