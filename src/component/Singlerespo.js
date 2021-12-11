import { Card, Image } from 'semantic-ui-react'
function Singlerespo({full_name,description,owner,html_url}) {
    return (
      <a href={html_url} target="_blank" rel="noreferrer" >
        <Card>
        <Image src={owner.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{full_name}</Card.Header>
          <Card.Meta>
            <span className='date'>{owner.login}</span>
          </Card.Meta>
          <Card.Description>
           {description}
          </Card.Description>
        </Card.Content>
       
      </Card>
      </a>
    )
}

export default Singlerespo
