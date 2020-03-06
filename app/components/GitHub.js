var React = require('react');
var createReactClass = require('create-react-class');
var SearchUsers = require('./SearchUser');

var GitHub = createReactClass({

    handleSubmit: function(e){
        //prevenção ao reload ou postBack
        e.preventDefault();
       console.log(this.refs.username.value);
    },
    render: function () {
        return (
            <div className='container'>
              <SearchUsers />
            </div>
        );
    }
});

module.exports = GitHub;