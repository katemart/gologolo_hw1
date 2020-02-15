import {GoLogoLoCallback} from './GoLogoLoConstants.js'
import AppsterController from '../appster/AppsterController.js'
import { AppsterHTML, AppsterGUIId } from '../appster/AppsterConstants.js';
import AppWork from '../appster/AppWork.js';

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

    goLogoLoCreateNewWork = () => {
        let workName = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        if(workName.value.length >= 1) {
            let existingName = this.model.getRecentWork(workName.value);
            if(existingName === null) {
                let work = new AppWork(workName.value);
                this.model.prependWork(work);
            } else {
                console.log(workName);
                this.model.hideTextInputModal();
                this.model.getConfirmModal();
            }
        }
    }

    registerAppsterEventHandlers() {
        super.registerAppsterEventHandlers();
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK,
            this[GoLogoLoCallback.GOLOGOLO_PROCESS_CREATE_NEW_WORK]);
    }
 }