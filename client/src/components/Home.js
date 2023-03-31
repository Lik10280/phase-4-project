import React from "react"
import {Link, Route, useRouteMatch, Switch} from "react-router-dom"
import ApartmentList from "./ApartmentList"
import "./Home.css" // import the CSS file

function Home({apartments, onDeleteApartment, onUpdateApartment, types}){

    let {path} = useRouteMatch()

    if (!Array.isArray(types)) {
        types = [];
    }

    const typeList = types.map(({id, name}) => (
        <li key={id}>
            <Link to={`/types/apartments/${id}`}>{name}</Link>
        </li>
    ));

    return (
        <div  display="flex">
            <ul>{typeList}</ul>
            
            <Switch>
                <Route exact path={path}>
                    <ApartmentList 
                        apartments={apartments} 
                        onDeleteApartment={onDeleteApartment}
                        onUpdateApartment={onUpdateApartment}
                        edit={false}
                    />
                </Route>
                <Route path={`/types/apartments/:typeId`}>
                    <ApartmentList 
                        apartments={apartments} 
                        onDeleteApartment={onDeleteApartment}
                        onUpdateApartment={onUpdateApartment}
                        edit={false}
                    />
                </Route>
            </Switch>
        </div>
    );
}

export default Home
