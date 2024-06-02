
/*
const logIn = ()=>{
    return new Promise ((resolve,reject)=>{
        const data = "logged in"
        setTimeout(
            ()=>{
                resolve(data);
            },3000
        )
    })
}

const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        const message = "data is arrived"
        setTimeout(
            ()=>{
                resolve(message);
            },3000
        )
    })
}

const showHomefeed = ()=>{
    console.log("Homefeed is showed")
}
logIn().then((logInData)=>{
    console.log(logInData)
    fetchData().then((fetchDataMessage)=>{
        console.log(fetchDataMessage);
        showHomefeed();
    })
})
*/
/*
    logIn();
    fetchData();
    getUserPhotos();
    getUserFriends();
    showHomefeed();
*/

const logIn = ()=>{
    return new Promise ((resolve,reject)=>{
        const logInData = "logged in successfully"
        if(true){
            setTimeout(
                ()=>{
                    resolve(logInData)
                },1000
            )        }else{
            let rejectMessage = "rejected !"
            reject(rejectMessage)
        }
    })
}

const fetchData = ()=>{
    return new Promise ((resolve,reject)=>{
        const fetchDataMessage = "data is arrived";
        if(true){
            setTimeout(
                ()=>{
                    resolve(fetchDataMessage)
                },1000
            )        }else{
            let rejectMessage = "rejected !"
            reject(rejectMessage)
        }
    })
}

const getUserPhotos = ()=>{
    return new Promise((resolve,reject)=>{
        const getUserPhotosMessage = "user photos are fetched"
        if(true){
            setTimeout(
                ()=>{
                    resolve(getUserPhotosMessage)
                },1000
            )
        }else{
            let rejectMessage = "rejected !"
            reject(rejectMessage)
        }
    })
}

const getUserFriends = ()=>{
    return new Promise((resolve,reject)=>{
        const getUserFriendsMessage = "user friends are fetched"
        if(true){
            setTimeout(
                ()=>{
                    resolve(getUserFriendsMessage)
                },1000
            )        }else{
            let rejectMessage = "rejected !"
            reject(rejectMessage)
        }
    })
}

const showHomefeed = ()=>{
    console.log("Homefeed is shown")
}

logIn()
.then((logInData)=>{
    console.log(logInData);
    return fetchData();
})
.then((fetchDataMessage)=>{
    console.log(fetchDataMessage);
    return getUserPhotos();
})
.then((getUserPhotosMessage)=>{
    console.log(getUserPhotosMessage);
    return getUserFriends();
})
.then((getUserFriendsMessage)=>{
    console.log(getUserFriendsMessage);
    showHomefeed();
})
.catch((error)=>{
    console.log(error);
})