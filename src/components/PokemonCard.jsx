import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({name}) => {
    return <Card 
    style={{width:250}}
    title={name}
    cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto"/>}
    >
        <Meta description="fire, magic"/>
    </Card>
}

export default PokemonCard;