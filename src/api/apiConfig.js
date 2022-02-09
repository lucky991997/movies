const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e616c90e65f4cbc5f9c6f93f799c62e8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

}

export default apiConfig;