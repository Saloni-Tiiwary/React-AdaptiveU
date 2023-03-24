const { expect } = require("@playwright/test");
class EditPopupLinkInnerview{
    constructor(page){
        this.page=page;
        this.EditOption=page.locator(".edit-content");
        this.EditPopup=page.locator(".container");
        this.LearningMinInputField=page.getByPlaceholder("Min");
        this.LinkTitleConfirm=page.locator(".link-name").nth(0);
        this.SaveTabEditPopup=page.getByRole('button', { name: 'save' });
        this.LinkTitleLinkInnerview=  page.getByPlaceholder("Enter Title");
        this.LinkMinutes=page.locator(".link-min").nth(1);
        this.WarningMessage= page.locator(".warning");
        this.LinkNameError=page.locator(".link-name.error");
        this.LinkUrlInputField=page.getByPlaceholder('Share any video/article, which benefits your organization!');
        this.LinkUrlError=page.locator(".recommend-link.error");
        this.LinkFirstOuterCardTitle=page.locator("h2.link-name");
        this.EditPopupClose=page.locator(".popup-close")
        

    }
    async closeEditPopupInnerview(){
        await this.EditPopupClose.click()
    }
    async editOptionClick(){
       await this.EditOption.click();
    }
    async editPopupConfirmation(){
        await expect(this.EditPopup).toBeVisible();
    }
    async nullMinInput(){
        await this.LearningMinInputField.fill("");
    }
    async clickSaveButton(){
        await this.SaveTabEditPopup.click();
    }
    async linkMinError(){
        await expect(this.LearningMinInputField).toHaveClass("points error");
    }
    async linkMinSpecialCharFill(){
        await this.LearningMinInputField.fill("");
        await this.LearningMinInputField.fill("!@#$%");
    }
    async linkZeroMinFill(){
        await this.LearningMinInputField.fill("");
        await this.LearningMinInputField.fill("0");
    }
    async linkMinAlphabetsFill(){
        await this.LearningMinInputField.fill("");
        await this.LearningMinInputField.fill("ASDF");
    }
    async linkMinValidInput(){
        await this.LearningMinInputField.fill("10");
    
    }
    async validLinkMinConfirmation(){
        await expect(this.LinkMinutes).toHaveText("14m");
    }
    async validLinkTitleInput(){
        await this.LinkTitleLinkInnerview.fill("");
        await this.LinkTitleLinkInnerview.fill("testing edit name");
    }
    async validLinkTitleConfirm(){
       await expect(this.LinkTitleConfirm).toHaveText("testing edit name");
    }
    async specialCharLinkTitleInput(){
        await this.LinkTitleLinkInnerview.fill("");
        await this.LinkTitleLinkInnerview.fill("!@#$%");
    }
    async onlyNumInput(){
        await this.LinkTitleLinkInnerview.fill("");
        await this.LinkTitleLinkInnerview.fill("123");
    }
    async verifyNumTitleInput(){
      await expect(this.LinkFirstOuterCardTitle).toContainText("123")

    }
    async leadingSpaceInput(){
        await this.LinkTitleLinkInnerview.fill("");
        await this.LinkTitleLinkInnerview.fill("                      leading space test");
    }
    async leadingSpaceTrimmedVerify(){
        await expect(this.LinkFirstOuterCardTitle).toContainText("leading space test")
    }
    async trailingSpacesInput(){
        await this.LinkTitleLinkInnerview.fill("");
        await this.LinkTitleLinkInnerview.fill("trailing space test                             ");
    }
    async trailingSpaceTrimmedVerify(){
        await expect(this.LinkFirstOuterCardTitle).toContainText("trailing space test")
    }
    async extraIntermediateSpaceInput(){
        await this.LinkTitleLinkInnerview.fill("");
        await this.LinkTitleLinkInnerview.fill("i     i     i");
    }
    async extraIntermediateSpaceTrimmedVerify(){
        await expect(this.LinkFirstOuterCardTitle).toContainText("i i i")
    }
    async invalidTitleWarning(){
        await expect(this.WarningMessage).toContainText("Please provide link name with at least one character other than special characters!");
    }
    async nullLinkTitleInput(){
        await this.LinkTitleLinkInnerview.fill("");
    }
    async linkTitleError(){
        await expect(this.LinkNameError).toBeVisible();
    }
    async linkTitleMaxCharLimitBreach(){
        await this.LinkTitleLinkInnerview.fill("");
    for(let i=1;i<=201;i++){
        await this.LinkTitleLinkInnerview.type("1");
    }
    }
    async linkURLEmpty(){
        await this.LinkUrlInputField.fill("");
    }
    async linkURLError(){
         await expect(this.LinkUrlError).toBeVisible();
    }
    async linkURLonlyAlphabetsInput(){
        await this.LinkUrlInputField.fill("asdf");
    }
    async linkURLonlySpecialcharInput(){
        await this.LinkUrlInputField.fill("!@#$%");
    }
    async linkURLonlyNumbersInput(){
        await this.LinkUrlInputField.fill("123456");
    }
    async invalidLinkURLInput(){
        await this.LinkUrlInputField.fill("https://www.youtube.cooom/watch?v=RHbBEFk7kHQ");

    }
    async linkURLwarning(){
        await expect(this.WarningMessage).toContainText("Please provide valid link!");
    }
    }

 module.exports={EditPopupLinkInnerview}