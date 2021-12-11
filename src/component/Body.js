import PropTypes from 'prop-types'
import { Segment,Message,Input,Loader} from 'semantic-ui-react'
import Singlerespo from './Singlerespo'

function Body({resualt,counter, search, submited,setsearch,newsubmit, loading,submitsearch}) {
  const handlechange=(e)=>{
setsearch(e.target.value)
    }
    const submithandle =(e)=>{
        e.preventDefault();
        newsubmit();
    }
    return (
        <div>
        <form onSubmit={submithandle}>
           <Input fluid icon='search' placeholder='Search...' onChange={handlechange}/>
           </form>

    {resualt.length===0 && search!=="" && submited===true? <Message warning>
    <Message.Header>Désolé, aucun résultat n'a été trouvé pour cette recherche.</Message.Header>
    <p>Veuillez essayer d'autres mots.</p>
  </Message>:"" }
        {counter!==0? <Segment>La recherche a donné {counter} résulats</Segment>:""
        }
     
       
        <div className="cardclass">
        {resualt.map((respo)=> <Singlerespo key={respo.id} {...respo}/>)}
        </div>
        {loading?<Loader size='large' active inline='centered' />:""}  
        {counter!==0 && loading===false ? <button onClick={submitsearch}>Plus de résultats</button>:""} 
        </div>
    )
}
Body.propTypes = {
    resualt :  PropTypes.arrayOf(
      PropTypes.shape({
          id : PropTypes.number.isRequired,
        full_name: PropTypes.string.isRequired,
        owner: PropTypes.object.isRequired,
        html_url :PropTypes.string.isRequired,
        description :PropTypes.string,
      }).isRequired
    ).isRequired,
    }
export default Body
