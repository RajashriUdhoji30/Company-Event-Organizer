/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';

class MenuItems extends  React.Component{
    render(){
        return(
            <div>
                <div className="dropdown" style={{float: 'left',paddingRight:'40px', paddingLeft:'80px'}}>
                    <button className="btn btn-primary dropdown-toggle" type="button" style={{width:'80px'}} data-toggle="dropdown">On Going Events
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu" style={{marginLeft:'80px'}}>
                        <li><a href="#">Table Tennis</a></li>
                        <li><a href="#">Carrom</a></li>
                        <li><a href="#">Chess</a></li>
                    </ul>
                </div>
                <div className="dropdown" style={{float: 'left',paddingRight: '40px'}}>
                    <button className="btn btn-primary dropdown-toggle" type="button" style={{width:'80px'}} data-toggle="dropdown">Cultural Events
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Dance</a></li>
                        <li><a href="#">Singing</a></li>
                        <li><a href="#">Skit</a></li>
                    </ul>
                </div>
                <div className="dropdown" style={{float: 'left',paddingRight: '40px'}}>
                    <button className="btn btn-primary dropdown-toggle" type="button" style={{width:'80px'}} data-toggle="dropdown">Sport Events
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Table Tennis</a></li>
                        <li><a href="#">Carrom</a></li>
                        <li><a href="#">Chess</a></li>
                    </ul>
                </div>
                <div className="dropdown" style={{float: 'left',paddingRight: '40px'}}>
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Technical Events
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">React Sessions</a></li>
                        <li><a href="#">REST API testing</a></li>
                        <li><a href="#">DevOps Session</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);