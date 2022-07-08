import * as React from 'react';
import { ILeaverequestProps } from './ILeaverequestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import './global.scss'
import * as jQuery from 'jquery'
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './Home';
import DashboardScreen from './DashboardScreen';
import Leave from './Leave';

export default class Leaverequest extends React.Component<ILeaverequestProps, {}> {
  public render(): React.ReactElement<ILeaverequestProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/leave" component={Leave} />
        </Switch>
      </HashRouter>

    );
  }
}
