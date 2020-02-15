import {GoLogoLoCallback, GoLogoLoText} from './GoLogoLoConstants.js'
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

    /**
    * This method gets the input from the text input modal and validates the input,
    * if valid, the work gets added to the recent work list.
    * If invalid, an error message is shown
    */
    goLogoLoCreateNewWork = () => {
        let workNameField = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        if(workNameField.value.length >= 1) {
            let existingWorkName = this.model.getRecentWork(workNameField.value);
            if(existingWorkName === null) {
                //let newWork = this.model.createNewWork(workNameField.value);
                console.log(workNameField.value)
            } else {
                this.model.hideTextInputModal();
                this.model.getConfirmModal();
            }
        } else {
            console.log("invalid name")
        }
    }

    registerAppsterEventHandlers() {
        super.registerAppsterEventHandlers();
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK,
            this[GoLogoLoCallback.GOLOGOLO_PROCESS_CREATE_NEW_WORK]);
    }
 }