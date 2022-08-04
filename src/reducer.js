
const setLoading = (isLoading, setIsloading) => {

    if (setIsloading.type === 'loading') {
        isLoading = true
        console.log(isLoading)
    }

    if (setIsloading.type === 'notLoading') {
        isLoading = false
        console.log(isLoading)
    }

    return isLoading
}

export default setLoading