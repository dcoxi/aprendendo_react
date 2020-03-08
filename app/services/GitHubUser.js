var axios = require('axios');

var GitHubService = {
    getByUsername: function(username){
         return axios.get('https://api.github.com/users/'+username);
    },
    getReposByUsername : function(username){
         return axios.get("https://api.github.com/users/" + username+'/repos');
    }
};

module.exports = GitHubService;