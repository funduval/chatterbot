import React, { Component } from 'react';
import Display from './display'
class Form extends Component {
    state={
        chat:{
            user:"initiator",
            content:{
                text:"",
                date:Date()
            }
        }
    }

    chatItems=[];

    renderChatItem=()=>{
        console.log(this.state.content)
        return <span className="badge badge-pill badge-info m-2">{this.state.content}</span>;
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let chat = {...this.state.chat}

        console.log("submitted")
        this.chatItems.push(chat)
        this.renderChatItem();
    }

    handleChange=(e)=>{
        e.preventDefault();
        let chat = {...this.state.chat}
        chat.content = e.currentTarget.value;
        this.setState({chat})
        
    }


render() {
        return (
            <div>
                <Display chats={this.state.chatItems}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea type="input" name="textValue" onChange={this.handleChange} value={this.state.chat.text} autoFocus placeholder="Type your message here" className="form-control" id="chatForm" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        );
    }
}

export default Form;