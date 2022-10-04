import React, {Component} from "react";
import { 
  Nav, Navbar, OverlayTrigger, Popover, Tooltip, Tabs,
  Pagination, ProgressBar, Table, Tab, Collapse,
  Container, NavDropdown, Button, Row, Col, Breadcrumb
} from "react-bootstrap";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buka: false
    }
    this.tooltip = this.tooltip.bind(this);
    this.pop = this.pop.bind(this);
    this.versiWeb = this.versiWeb.bind(this);
  }
  tooltip(props){
    // button cari
    return(<Tooltip {...props}>Cari</Tooltip>);
  }
  pop(props){
    return(
      <Popover {...props}>
        <Popover.Header as="h3">Informasi Website</Popover.Header>
        <Popover.Body>
          Website ini dibuat untuk memudahkan dalam pencarian informasi 
          terkini tentang berita olahraga
        </Popover.Body>
      </Popover>
    );
  }
  versiWeb(){
    this.setState({buka:!this.state.buka});
    console.log(this.state.buka)
  }
  render (){
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Collapse className="justify-content-start">
          <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <Nav.Link href="#live_scores">Live Scores</Nav.Link>
            <NavDropdown title="Piala &amp; Liga" id="basic-nav-dropdown">
              <NavDropdown.Item href="#champion_league">Champion League</NavDropdown.Item>
              <NavDropdown.Item href="#europe_eague">Europe League</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#transfer">Transfer Pemain</Nav.Link>
            <Nav.Link href="#tim">Tim</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <input type="text" placeholder="Search"/>
            &ensp;
            <OverlayTrigger overlay={this.tooltip} placement="bottom">
              <Button variant="outline-primary">Search</Button>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
          <Col md={4} style={{backgroundColor: "#ccc", borderRadius: "3px"}}>
            <Breadcrumb>
              <Breadcrumb.Item href="/"><b>Home</b></Breadcrumb.Item>
              <Breadcrumb.Item href="/liga_inggris"><b>Liga Inggris</b></Breadcrumb.Item>
              <Breadcrumb.Item href="/transfer" active><b>Transfer Pemain</b></Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Rumor Transfer Pemain</h1>
        <Tabs className="mb-3" fill>
          <Tab title="Semua Transfer" disabled></Tab>
          <Tab title="Liga Primer Inggris"></Tab>
          <Tab title="Serie A"></Tab>
          <Tab title="Divisi Primera"></Tab>
          <Tab title="Bundesliga"></Tab>
          <Tab title="Liga 1 Indonesia"></Tab>
        </Tabs>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Pemain</th>
              <th>Tim</th>
              <th>Transfer</th>
              <th>Proses Transfer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>MAROUANE FELLANI</td>
              <td>MANCHESTER UNITED</td>
              <td>SHANDONG LUNENG</td>
              <td><ProgressBar striped now={85} label={`85%`}/></td>
            </tr>
            <tr>
              <td>2</td>
              <td>LUIS NANI</td>
              <td>SPORTING CP</td>
              <td>ORLANDO CITY</td>
              <td><ProgressBar striped now={55} label={`55%`}/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>MAREK HAMSIK</td>
              <td>NAPOLI</td>
              <td>DALIAN YIFANG</td>
              <td><ProgressBar striped now={95} label={`95%`}/></td>
            </tr>
            <tr>
              <td>4</td>
              <td>SARDAR AZMOUN</td>
              <td>RUBIN KAZAN</td>
              <td>ZENIT ST PETERSBURG</td>
              <td><ProgressBar striped now={100} label={`100%`}/></td>
            </tr>
            <tr>
              <td>5</td>
              <td>MICHY BATSHUAYI</td>
              <td>CHELSEA</td>
              <td>CRYSTAL PALACE</td>
              <td><ProgressBar striped now={50} label={`50%`}/></td>
            </tr>
            <tr>
              <td>6</td>
              <td>LUCAS PIAZON</td>
              <td>CHELSEA</td>
              <td>CHIEVO</td>
              <td><ProgressBar striped now={100} label={`100%`}/></td>
            </tr>
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <OverlayTrigger trigger="click" overlay={this.pop} placement={"right"}>
          <Button variant="primary"><b>Informasi</b></Button>
        </OverlayTrigger>
        &ensp;
        <Button variant="primary" onClick={this.versiWeb}><b>Versi Website</b></Button>
        <Collapse in={this.state.buka}>
          <p>Berita Transfer Pemain</p>
        </Collapse>
      </Container>
      </>
    );
  }
}

export default App;
