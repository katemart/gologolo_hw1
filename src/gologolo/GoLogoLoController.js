import {GoLogoLoCallback, GoLogoLoText, GoLogoLoGUIId, GoLogoLoHTML} from './GoLogoLoConstants.js'
import AppsterController from '../appster/AppsterController.js'
import {AppsterHTML, AppsterGUIId} from '../appster/AppsterConstants.js';
import AppWork from '../appster/AppWork.js';

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    /**
    * This method gets the input from the text input modal and validates the input,
    * if valid, the work gets added to the recent work list.
    * If invalid, an error message is shown
    */
    goLogoLoCreateNewWork(){
        let workNameField = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        if(workNameField.value.length >= 1) {
            let existingWorkName = this.model.getRecentWork(workNameField.value);
            if(existingWorkName === null) {
                let newWork = this.model.createNewWork(workNameField.value);
                console.log(newWork);
                this.model.hideTextInputModal();
                this.model.prependWork(newWork);
                workNameField.value = '';
            } else {
                workNameField.value = '';
                this.model.hideTextInputModal();
                this.model.showConfirmModal();
            }
        } else {
            console.log("invalid name");
        }
    }

    goLogoLoEditTextButtonAction = () => {
        this.model.updateText();
        let logoText = this.model.getWorkToEdit().getText();
        let logoTextField = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        logoTextField.value = logoText;
    }

    processLogoText() {
        let logoNameField = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        let currentWork = this.model.getWorkToEdit();
        if(logoNameField.value.length >= 1) {
            currentWork.setText(logoNameField.value);
            this.model.loadWork();
            this.model.hideTextInputModal();
        } else {
            console.log("invalid name");
        }
    }

    goLogoLoEnterButtonAction = () => {
        let home_screen = document.getElementById(AppsterGUIId.APPSTER_HOME_SCREEN);
        if (home_screen.hidden) {
            this.processLogoText();
        } else {
            this.goLogoLoCreateNewWork();
        }
    }

    goLogoLoFontSizeSliderAction = () => {
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        let currentWork = this.model.getWorkToEdit();
        console.log(this.model.getWorkToEdit().getFontSize());
        currentWork.setFontSize(fontSizeSlider.value);
        console.log(this.model.getWorkToEdit().getFontSize());
        this.model.loadWork();
    }

    /**
     * This function sets up the event handlers for GoLogoLo app controls.
     */
    registerAppsterEventHandlers() {
        super.registerAppsterEventHandlers();
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK,
            this[GoLogoLoCallback.GOLOGOLO_ENTER_BUTTON_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK,
            this[GoLogoLoCallback.GOLOGOLO_EDIT_TEXT_BUTTON_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, GoLogoLoHTML.CHANGE,
            this[GoLogoLoCallback.GOLOGOLO_FONT_SIZE_SLIDER_ACTION]);
    }
 }