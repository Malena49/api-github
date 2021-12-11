import { Link } from 'react-router-dom'
import React from 'react'
import { Segment } from 'semantic-ui-react'

const MenuExampleProps = () => (
  <Segment>
    <ul>
    <Link to="/">
      <li className="menu">Recherche</li>
      </Link>
      <Link to="/faq">
      <li className="menu">FAQ</li>
      </Link>
    </ul>
  </Segment>
)

export default MenuExampleProps