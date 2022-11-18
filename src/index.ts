import { extension_helper } from './helper';
import { init_select } from './select'

function onload({ extensionAPI }: { extensionAPI: RoamExtensionAPI }) {
    init_select(extensionAPI)
}

function onunload() {
    extension_helper.uninstall();
}

export default {
  onload,
  onunload,
};
