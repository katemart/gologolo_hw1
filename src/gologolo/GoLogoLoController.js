import {GoLogoLoCallback, GoLogoLoText, GoLogoLoGUIId} from './GoLogoLoConstants.js'
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
        currentWork.setFontSize(fontSizeSlider.value);
        this.model.loadWorkStyle();
    }

    goLogoLoTextColorPickerAction = () => {
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setTextColor(textColorPicker.value);
        this.model.loadWorkStyle();
    }

    goLogoLoBackgroundColorPickerAction = () => {
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setBackgroundColor(backgroundColorPicker.value);
        this.model.loadWorkStyle();
    }

    goLogoLoBorderColorPickerAction = () => {
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setBorderColor(borderColorPicker.value);
        this.model.loadWorkStyle(); 
    }

    goLogoLoBorderRadiusSliderAction = () => {
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setBorderRadius(borderRadiusSlider.value);
        this.model.loadWorkStyle();
    }

    goLogoLoBorderThicknessSliderAction = () => {
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setBorderThickness(borderThicknessSlider.value);
        this.model.loadWorkStyle();
    }

    goLogoLoPaddingSliderAction = () => {
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setPadding(paddingSlider.value);
        this.model.loadWorkStyle();
    }

    goLogoLoMarginSliderAction = () => {
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        let currentWork = this.model.getWorkToEdit();
        currentWork.setMargin(marginSlider.value);
        this.model.loadWorkStyle();
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
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_FONT_SIZE_SLIDER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT,
           this[GoLogoLoCallback.GOLOGOLO_TEXT_COLOR_PICKER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_BACKGROUND_COLOR_PICKER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_BORDER_COLOR_PICKER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_BORDER_RADIUS_SLIDER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_BORDER_THICKNESS_SLIDER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_PADDING_SLIDER_ACTION]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, AppsterHTML.INPUT,
            this[GoLogoLoCallback.GOLOGOLO_MARGIN_SLIDER_ACTION]);
    }
 }