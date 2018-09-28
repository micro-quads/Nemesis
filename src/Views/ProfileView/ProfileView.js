import React, { Component } from "react";
import ConfigListView from "../ConfigListView/ConfigListView";
import DropdownView from "../Items/DropdownView";
import Paper from "@material-ui/core/Paper";
import theme from "../../Themes/Dark";

export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      current: props.active,
      values: props.profileList
    };
  }

  getContent() {
    return (
      <ConfigListView
        ref="listView"
        notifyDirty={this.props.notifyDirty}
        items={this.props.items}
      />
    );
  }

  render() {
    return (
      <div>
        <Paper
          theme={theme}
          elevation={3}
          style={{ margin: "10px", padding: "10px" }}
        >
          <DropdownView
            ref="profSelector"
            style={{ display: "block" }}
            notifyDirty={this.props.notifyDirty}
            key={this.state.id}
            item={this.state}
          />
        </Paper>
        {this.getContent()}
      </div>
    );
  }
}