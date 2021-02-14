import axiosInstance from './axiosHandler';

const webServices = {
    getGistUserData: function (username) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(username)
                if(!username) {
                    reject(-1);
                    return;
                }
                let resp = await axiosInstance.get(`/users/${username}/gists`);
                console.log(resp);
                if(resp.status == 200)
                    resolve(resp.data)
                else
                    reject(resp)
            } catch (error) {
                reject(error)
            }
        });
    },

    getUrlData: function(url) {
        return new Promise(async (resolve, reject) => {
            try {
                if(!url) {
                    reject(-1);
                    return;
                }
                let resp = await axiosInstance.get(url);
                if(resp.status == 200)
                    resolve(resp.data)
                else
                    reject(resp)
            } catch (error) {
                reject(error)
            }
        });
    }
}



export default webServices;