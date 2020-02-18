import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
//import {GoLogoLoText} from './GoLogoLoConstants.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newWork = new GoLogoLoLogo(workName);
        return newWork;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    loadWork() {
        this.view.loadWork(this.getWorkToEdit());
    }

    loadWorkStyle() {
        this.view.loadWorkStyle(this.getWorkToEdit());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    updateText() {
 //       this.view.
        this.view.showLogoInputModal();
    }

    goList(){
        this.view.showTextInputModal();
    }

    showConfirmModal() {
        this.view.showConfirmModal();
    }

    showErrorModal() {
        this.view.showErrorModal();
    }

    hideErrorModal() {
        this.view.hideErrorModal();
    }

    hideLogoInputModal() {
        this.view.hideLogoInputModal();
    }
}