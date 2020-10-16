export const getUserDetails = () => {
    let userDetails = localStorage.getItem('userDetails');
    userDetails = userDetails ? JSON.parse(userDetails) : '';
    if (userDetails && userDetails.token) {
        return userDetails;
    }
    return '';
}

export const commonLogoutFunc = (history) => {
    localStorage.removeItem('userDetails');
    return history.push('/login')
}

export const checkImageURL = (url) => {
    if(!url) {
        return false;
    }
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

export const imgError = (image) => {
    image.target.src = '/avatars/6.png'
    image.target.onerror = ''
    return true;
}