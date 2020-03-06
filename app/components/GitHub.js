var React = require('react');
var createReactClass = require('create-react-class');

var GitHub = createReactClass({

    handleSubmit: function(e){
        //prevenção ao reload ou postBack
        e.preventDefault();
       console.log(this.refs.username.value);
    },
    render: function () {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1>GitHub Info</h1>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label>Username</label>
                                <input
                                    type="text"
                                    ref="username"
                                    className='form-control'
                                    placeholder="Ex: dpc"
                                />
                            </div>
                            <div className=''>
                                <button
                                    type="submit"
                                    className='btn btn-primary'>
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = GitHub;