
const setLoading = (isLoading, setIsloading) => {

    if (setIsloading.type === 'loading') {
        isLoading = true

    }

    if (setIsloading.type === 'notLoading') {
        isLoading = false
    }

    return isLoading
}

export default setLoading