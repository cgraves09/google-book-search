import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import API from '../utils/API'
export default class Saved extends Component {
state = {
    books: []
  };
componentDidMount() {
        this.loadBooks();
        
    }
DeleteBook = (id) => {

      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
    loadBooks = () => {
        API.getBooks().then(res => {
            this.setState({ books: res.data, _id: "", title: "", author: [], synopsis: "",thumbnail: "" })
        })
        .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>React Google Book Search</h1>
                    <h3> Search and Save your favorite Books! </h3>
                    </Jumbotron>
                    {this.state.books.map(book => {
                        return (
                            <div key={book._id} className='container'>
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4 image">
                                                <img src={book.thumbnail} alt=""/>
                                            </div>
                                            <div className="col-md-8 info">
                                                <h1>{book.title}<span><h3 author={book.author}></h3></span></h1>
                                                <hr className='lineBreak' />
                                                <p>{book.synopsis}</p>
                                                <button className='btn btn-primary btn-lg btn-block' onClick={() => {this.DeleteBook(book._id)}}>Delete Book</button>                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
            </div>                      
        )
    }
}
