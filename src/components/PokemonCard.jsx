import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({name, image, abilities}) => {
  const ability = abilities.map(ability => ability.ability.name).join(', ')

    return <Card 
    style={{width:250}}
    title={name}
    cover={<img src={image} alt={name}/>}
    >
        <Meta description={ability} />
    </Card>
}

export default PokemonCard;