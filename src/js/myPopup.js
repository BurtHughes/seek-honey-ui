import React from "react";
import { Popup, PopupHeader, Cells, Cell, CellBody } from "react-weui";

export default class MyPopup extends React.Component {
  render = () => {
    return (
      <Popup
        show={false}
        onRequestClose={e => this.setState({ bottom_show: false })}
        enableMask
      >
        <PopupHeader
          left="Cancel"
          right="Ok"
          leftOnClick={e => this.setState({ bottom_show: false })}
          rightOnClick={e => this.setState({ bottom_show: false })}
        />
        <div style={{ height: "100vh", overflow: "scroll" }}>
          <Cells>
            <Cell onClick={this.hide}>
              <CellBody>选项1</CellBody>
            </Cell>
            <Cell>
              <CellBody>选项2</CellBody>
            </Cell>
          </Cells>
        </div>
      </Popup>
    );
  };
}
