import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  InputGroup,
  Dialog,
  Classes,
  Divider,
} from "@blueprintjs/core";
import { DateRangePicker } from "@blueprintjs/datetime";
import { store } from "./store";
import { extension_helper } from "./helper";
import { enableLegendStateReact, observer } from "@legendapp/state/react";

enableLegendStateReact();
const CONSTANTS = {
  class: {},
  el: document.createElement("div"),
};

function _App() {
  return (
    <>
      <Dialog
        isOpen={store.ui.isOpen()}
        onClose={() => store.actions.closeDialog()}
      >
        <div className={Classes.DIALOG_HEADER}>Search</div>
        <div className={Classes.DIALOG_CONTAINER}>
          <div>
            <InputGroup
              value={store.ui.getSearch()}
              onChange={(e) => store.actions.changeSearch(e.target.value)}
            />
            <DateRangePicker
              className={Classes.ELEVATION_1}
              onChange={(range) => store.actions.changeRange(range)}
            />
          </div>
          <Divider />
        </div>
      </Dialog>
      <Button onClick={() => store.actions.openDialog()}>Search</Button>
    </>
  );
}

const App = observer(_App);

export function init_select(extensionAPI: RoamExtensionAPI) {
  const topbar = document.querySelector(".rm-topbar");
  topbar.appendChild(CONSTANTS.el);
  ReactDOM.render(<App />, CONSTANTS.el);
  extension_helper.on_uninstall(() => {
    topbar.removeChild(CONSTANTS.el);
  });
}
