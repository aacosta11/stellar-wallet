import ListOfActions from "../../Components/Dashboard/Navigation/ListOfActions";
import { ListOfActionNames } from "../../Components/Dashboard/Navigation/ListOfActionNames";
import "../../wwwroot/style/Views/Home/MainView.scss";
const MainView = ({action}) => {
    const {setActionSelected} = action;
    return (<>
        <div id="container" className="w90percent" >
            {ListOfActionNames.map((act, i) => {
                return (
                    <div  key={i} className="w100percent" onClick={()=>setActionSelected(act)}>
                        {ListOfActions[act][0]}
                    </div>
                )
            })}
        </div>
    </>)
}

export default MainView;