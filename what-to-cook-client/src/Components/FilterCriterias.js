import React, { Component } from 'react';
import axios from 'axios';

class FilterCriterias extends Component {
  constructor() {
    super()

    this.state = {
      ingredients: {},
      recipeList: [],
    }
  }

  onTextChange = (e) => {
    this.setState({ingredients: e.target.value})
  }

  submitFilterCriterias = (e) => {
    e.preventDefault();
    
      axios.post('/api/filter', this.state)
      .then((res) => {
        var recipeList = JSON.parse(res.data)
        this.setState({ recipeList: recipeList.recipes})
        console.log(this.state.recipeList)
      })

  }

  render() {
    return (
      <div className="filterContainer">
      <form>
        <input type="text" onChange={this.onTextChange}></input>
        <button type="submit" onClick={this.submitFilterCriterias}>Find Recipes!</button>
      </form>

      <div className="container">
        <div className="row">
          
            {this.state.recipeList.map((recipe, i) => {
              return (
                      <div className="col-sm-4" key={i}>
                        <div className="row">
                          <img className="img-thumbnail recipeListImages" src={recipe.image_url} alt={recipe.title} />
                          <div className="row">
                            <h4 className="card-title">{recipe.title}</h4>
                            <p>Ratings: {recipe.social_rank}</p>
                            <a href={recipe.source_url} target="_blank" className="btn btn-primary">Head to Recipe</a>
                          </div>
                        </div>
                      </div>
                    )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterCriterias;
