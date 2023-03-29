const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{TakeawaysAndRemoveProgress}=require('../pageobject_pagefile/takeaways-and-remove-progress');
const{TakeawaysFormattingOptions}=require('../pageobject_pagefile/takeaways-formatting-options');
//const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
//const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{urls}=require('../constant/urls');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link');
const{DeletingSampleLink}=require('../pageobject_pagefile/deleting-samplelink-innerview');

 
// test('Recommending a sample article', async({page})=>{
//     const Urlarticle= "https://playwright.dev/docs/navigations";
//     const Minarticle="14"
    
//     const navigationurl= new NavigationURL(page)
//     await navigationurl.navigationURL()
//     const recommendVideoLink=new RecommendTab(page)
//     const linkoutercard= new LinkOuterCard(page);
    
//     await recommendVideoLink.univNameVisible();
    
//     await recommendVideoLink.recommendButtonClick();
//     await recommendVideoLink.linkFill(Urlarticle);
//     await recommendVideoLink.minFill(Minarticle);
//    await recommendVideoLink.saveLink();
//    await recommendVideoLink.articleFirstLinkOuterCardVerify();
//   })

// test("give a sample takeaway",async({page})=>{
//     const navigationurl= new NavigationURL(page)
//     await navigationurl.navigationURL();
//     const linkoutercard= new LinkOuterCard(page); 
//     const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
//     await linkoutercard.linkOuterCardClick();
//     await takeawayformattingoptions.sampleTakeawayInput();
//     await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
//     await takeawayformattingoptions.closingPayitforwardPopup();
//     await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
// })



test("verify as we select the text in the takeaway the formatting options are available", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL25,urls.MIN,"Playwright Automatic Screenshots");

    
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })

  test("verify when the bold option is clicked the takeaway turns bold", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL41,urls.MIN,"Appium Introduction");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.boldFormatVisible();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })




  test("verify when italics option is clicked the takeaway text turn italics", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL42,urls.MIN,"Appium Philosophy");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.italicsFormatVisible();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  });
  test("verify when underlined is clicked the takeaway text is underlined", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL43,urls.MIN,"Appium Architecture");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.underlineFormatVisible();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  });
  test("verify a text can be both bold and italics", async ({ page }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL44,urls.MIN,"Appium Session");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.boldAndItalicsTextVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  });

  test("verify a text can be both bold and underlined", async ({ page }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL45,urls.MIN,"The Mobile JSON Wire Protocol");
   // await linkoutercard.linkOuterCardClick();
   await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.boldAndUnderlinedTextVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  });
  test("verify whether the text can be italics and underlined", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL46,urls.MIN,"Prerequisite for Appium");
   // await linkoutercard.linkOuterCardClick();
   await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.italicsAndUnderlinedTextVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  });
  test("verify that a text can be bold italics and underlined", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);


    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL47,urls.MIN,"Appium Desktop Download for Windows");

   // await linkoutercard.linkOuterCardClick();
   await takeawayformattingoptions.sampleTakeawayInput();
   await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
   await takeawayformattingoptions.closingPayitforwardPopup();
   await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.boldItalicsAndUnderlinedTextVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  });
  test("verify that a takeaway can be consolidated into bullet points", async ({page}) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL48,urls.MIN,"Appium Desired Capabilities");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
   await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
   await takeawayformattingoptions.closingPayitforwardPopup();
   await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
   // await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.bulletPointFormattingClick();
    await takeawayformattingoptions.bulletPointFormatTextVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  });
  test("verify that a text can be consolidated in numbered points", async ({
    page,
  }) => {
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL49,urls.MIN,"Install Android SDK Packages");
   // await linkoutercard.linkOuterCardClick();
   await takeawayformattingoptions.sampleTakeawayInput();
   await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
   await takeawayformattingoptions.closingPayitforwardPopup();
   await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    //await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.numberedFormatClick();
    await takeawayformattingoptions.numberedFormatTextverify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

  });
    
  test("verify if we click on the embed link the page is redirecting to the embedded link",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL50,urls.MIN,"Playwright Solutions");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.embedLinkClick();
    await takeawayformattingoptions.waitForNavigationAndVerify();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
 
})
test("verify that hyperlink embedded in takeaway using formatting options is clickable",async({page})=>{
  try{
    const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await samplelink.recommendingSampleArticleLink(urls.URL51,urls.MIN,"Android Desired Capabilities");
    //await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
   await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
   await takeawayformattingoptions.closingPayitforwardPopup();
   await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingWholeSampleText();
    await takeawayformattingoptions.hyperlinkFormattingOptionClick();
    await takeawayformattingoptions.hyperlinkLinkInput();
    await takeawayformattingoptions.saveButtonClick();
    await takeawayformattingoptions.saveButtonNotVisibleVerify(); 
    await takeawayformattingoptions.hyperLinkClickAndwaitForRedirectionAndVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  
})
 