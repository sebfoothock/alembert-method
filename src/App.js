import React, { Component } from "react";
import "./assets/style.css";
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      argent: 100,
      pasMise: 5,
      miseMet: 5,
      nbPerdu: 0,
      nbGagne: 0,
      benef: 0,
      argMise: 0,
    };
  }

  win = () => {
    const minMet = this.state.miseMet > this.state.pasMise;

    this.setState({ nbGagne: this.state.nbGagne + 1 });

    this.setState({
      argent: this.state.argent + this.state.miseMet,
    });

    this.setState({
      benef: this.state.benef + this.state.miseMet,
    });

    this.setState({
      argMise: this.state.argMise + this.state.miseMet,
    });

    if (minMet) {
      this.setState({
        miseMet: this.state.miseMet - this.state.pasMise,
      });
    }
  };

  lose = () => {
    this.setState({ nbPerdu: this.state.nbPerdu + 1 });

    this.setState({
      argent: this.state.argent - this.state.miseMet,
    });

    this.setState({
      benef: this.state.benef - this.state.miseMet,
    });

    this.setState({
      argMise: this.state.argMise + this.state.miseMet,
    });

    this.setState({
      miseMet: this.state.miseMet + this.state.pasMise,
    });
  };

  plus = () => {
    this.setState({
      miseMet: this.state.miseMet + this.state.pasMise,
    });
  };

  moins = () => {
    this.setState({
      miseMet: this.state.miseMet - this.state.pasMise,
    });
  };

  render() {
    return (
      <Container className="cadre">
        <Row className="justify-content-md-center">
          <Col lg={9} md={10}>
            <div className="title">Méthode d'Alembert</div>
            <div className="info">
              <div className="mise">
                <h2 className="miseMet">
                  mise à mettre : <label>{this.state.miseMet}</label>
                </h2>
                <Button className="plus" onClick={this.plus}>
                  +
                </Button>
                <Button className="moins" onClick={this.moins}>
                  -
                </Button>
              </div>
              <div>
                <h2>
                  argent restant : <label>{this.state.argent}</label>
                </h2>
              </div>
              <div>
                <h2>
                  bénéfice : <label>{this.state.benef}</label>
                </h2>
              </div>
              <div className="perdu">
                perdu : <label>{this.state.nbPerdu}</label>
              </div>
              <div className="gagne">
                gagné : <label>{this.state.nbGagne}</label>
              </div>
              <div>
                argent misé : <label>{this.state.argMise}</label>
              </div>
            </div>
            <FormGroup className="btn">
              <Button onClick={this.win} className="gagne">
                Gagné
              </Button>
              <Button onClick={this.lose} className="perdu">
                Perdu
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
