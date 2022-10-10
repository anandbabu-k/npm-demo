console.log("Before");
// getUser(1, getRespositories);
// console.log("After");

// function getRespositories(user){
//     getRespositories(user.gitHubUsername, getCommits)
// }

// function getCommits(repos){-
//     getCommits(repos, displayCommits)
// }

// function displayCommits(commits){
//     console.log(commits)
// }

// const p = getUser(1);
// p.then(user => getRespositories(user.gitHubUsername))
// .then(repos => getCommits(repos[0]))
// .then(commits => console.log("Commits", commits))
// .catch(err => console.log("Error", err.message))

// Async and Await
async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRespositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits)
    }catch(err){
        console.log("Error", err.message)
    }
}

displayCommits()

// console.log("Before");
// const user = getUser(1);
// const repos = get(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log("After");

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Reading a user from data base");
            // resolve({id: id, gitHubUsername: "mosh"});
            reject(new Error("couldn\"t get repos"))
        }, 2000);  
    })
}

function getRespositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["repo1", "repo2", "repo3"]) 
        }, 2000);
    
    })
}

function getCommits(repos){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["commit"]) 
        }, 2000);
    
    })
}