import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class Fq extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          A quoi ça sert ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Comment faire une recherche ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          Sur la page recherche, complétez le champ de recherche et valider la recherche.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Puis-je chercher n'importe quel terme ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          Oui, c'est fou.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
