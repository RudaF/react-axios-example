import React, { Component } from "react";
import axios from "axios";

import SelectInput from "./SelectInput";

export default class CatChoice extends Component {
  state = {
    catImg: "",
    breeds: [],
    selectedBreed: "",
  };

  componentDidMount = async () => {
    this.getNewCat();
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");
    // chamamos a api para recuperar todos os valores de raças de gatos possíveis
    console.log(response.data);
    // salvamos a lista de raças no state para renderizar depois
    this.setState({ breeds: [...response.data] });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.selectedBreed !== this.state.selectedBreed) {
      this.getNewCat();
    }
  };

  getNewCat = async () => {
    const URL =
      this.state.selectedBreed === ""
        ? "https://api.thecatapi.com/v1/images/search"
        : `https://api.thecatapi.com/v1/images/search?breed_id=${this.state.selectedBreed}`;

    const response = await axios.get(URL); // Axios faz a requisição para a API, informa pro garçom o que a aplicação quer comer
    // await espera o garçom retornar se a requisição foi feita com sucesso e a respectiva resposta (o pedido)

    console.log(response);
    this.setState({ catImg: response.data[0].url }); //atualizamos o state com a resposta que recebemos da AP
  };

  handleChange = (event) => {
    // console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="d-flex flex-column container">
        <div>
          <button
            onClick={this.getNewCat}
            style={{ width: "100px" }}
            className="btn btn-secondary m-2"
          >
            New Cat
          </button>
          <button style={{ width: "100px" }} className="btn btn-primary m-2">
            Save Cat
          </button>
          <SelectInput
            name="selectedBreed"
            value={this.state.selectedBreed}
            onChange={this.handleChange}
            breeds={this.state.breeds}
          />
        </div>
        <div className="container">
          {/* imagem com src no state */}
          <img
            style={{ width: "500px" }}
            src={this.state.catImg}
            alt="randomCat"
          />
        </div>
      </div>
    );
  }
}
