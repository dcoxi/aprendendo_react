var React = require('react');
var createReactClass = require('create-react-class');
var SearchUsers = require('./SearchUser');



var GitHub = createReactClass({

    getInitialState: function (){
        return {
            user:null,
            repos: [],
        };
    },
    updateUser: function(user){
        this.setState({user: user});
    },
    updateRepos: function(repos){
        this.setState({repos: repos});
    },
    render: function () {
        return (
            <div className='container'>
               
              <SearchUsers  
                updateUser={this.updateUser}
                updateRepos={this.updateRepos}
             />
            </div>
        );
    }
});

module.exports = GitHub;