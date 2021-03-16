import 'antd/dist/antd.css'
import './index.css'
import { Input } from 'antd'
import { Button, Tooltip } from 'antd'
import { Layout } from 'antd'
import { Row, Col, Divider } from 'antd'
import './App.css'
import EmptySearch from './EmptySearch'
import SearchResults from './SearchResults'
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
  withRouter,
} from 'react-router-dom'
import queryString from 'query-string'
import { useRef } from 'react'

const { Header, Footer, Sider, Content } = Layout

function App() {
  const history = useHistory()
  const inputRef = useRef()

  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Row>
            <Col span={6}>
              <div className="logo">
                <img src="/example-logo-png-transparent-resized.png"></img>
              </div>
            </Col>
            <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={6}></Col>
          </Row>
        </Header>
        <Content>
          <Row justify="start" className="search-panel">
            <Col flex={4}>
              <Input
                ref={inputRef}
                placeholder="Reduce manual work for sales acquisition"
              />
            </Col>
            <Col flex={1}>
              <Button
                type="primary"
                onClick={() => {
                  const str = queryString.stringify({
                    q: inputRef.current.state.value,
                  })

                  history.push('/search/?' + str)
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
          <Row className="row-search-results-items">
            <Switch>
              <Route Route exact path="/search" component={SearchResults} />
              <Route Route exact path="/" component={EmptySearch} />
            </Switch>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  )
}

export default withRouter(App)
